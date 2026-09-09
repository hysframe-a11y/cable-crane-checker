import React from "react";
import { Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  COLORS,
  HEIGHT,
  LOGO_CX,
  LOGO_CY,
  LOGO_R,
  LOGO_RING_WIDTH,
  T_LOGOTYPE_END,
  T_STRUCTURE_END,
  WIDTH,
} from "./theme";

const PLATE_WIDTH = LOGO_R * 1.86;
const PLATE_HEIGHT = LOGO_RING_WIDTH * 1.08;

export const Logotype: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const start = T_STRUCTURE_END - 4;

  const scale = spring({
    frame: frame - start,
    fps,
    config: { damping: 12, mass: 0.5, stiffness: 160 },
    durationInFrames: T_LOGOTYPE_END - start,
  });

  const opacity = interpolate(frame, [start, start + 6], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const glareX = interpolate(
    frame,
    [start + 4, T_LOGOTYPE_END + 4],
    [-PLATE_WIDTH, PLATE_WIDTH * 1.4],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.inOut(Easing.cubic),
    }
  );

  const textTracking = interpolate(frame, [start, T_LOGOTYPE_END], [6, 2], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const clipId = "plateClip";

  return (
    <svg
      width={WIDTH}
      height={HEIGHT}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      style={{
        position: "absolute",
        inset: 0,
        opacity,
        transform: `scale(${scale})`,
        transformOrigin: `${LOGO_CX}px ${LOGO_CY}px`,
      }}
    >
      <defs>
        <linearGradient id="plateGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={COLORS.plateLight} />
          <stop offset="100%" stopColor={COLORS.plateMid} />
        </linearGradient>
        <linearGradient id="glareGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity={0} />
          <stop offset="50%" stopColor="#ffffff" stopOpacity={0.55} />
          <stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
        </linearGradient>
        <clipPath id={clipId}>
          <rect
            x={LOGO_CX - PLATE_WIDTH / 2}
            y={LOGO_CY - PLATE_HEIGHT / 2}
            width={PLATE_WIDTH}
            height={PLATE_HEIGHT}
            rx={PLATE_HEIGHT / 2}
          />
        </clipPath>
      </defs>

      <rect
        x={LOGO_CX - PLATE_WIDTH / 2}
        y={LOGO_CY - PLATE_HEIGHT / 2}
        width={PLATE_WIDTH}
        height={PLATE_HEIGHT}
        rx={PLATE_HEIGHT / 2}
        fill="url(#plateGradient)"
      />

      <text
        x={LOGO_CX}
        y={LOGO_CY}
        fill="#ffffff"
        fontSize={LOGO_RING_WIDTH * 0.52}
        fontWeight={700}
        fontFamily="'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
        textAnchor="middle"
        dominantBaseline="central"
        letterSpacing={textTracking}
      >
        NAGANO
      </text>

      <g clipPath={`url(#${clipId})`}>
        <rect
          x={LOGO_CX - PLATE_WIDTH / 2 + glareX}
          y={LOGO_CY - PLATE_HEIGHT / 2}
          width={PLATE_WIDTH * 0.4}
          height={PLATE_HEIGHT}
          fill="url(#glareGradient)"
          transform={`skewX(-20)`}
        />
      </g>
    </svg>
  );
};
