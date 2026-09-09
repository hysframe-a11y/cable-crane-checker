import React from "react";
import { Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  COLORS,
  HEIGHT,
  LOGO_CX,
  LOGO_CY,
  LOGO_R,
  LOGO_RING_WIDTH,
  T_STRUCTURE_END,
  T_WIREFRAME_END,
  WIDTH,
} from "./theme";

const PATH_LEN = 1000;
const r = LOGO_R / 2;

const S_PATH = `M ${LOGO_CX} ${LOGO_CY - LOGO_R} A ${r} ${r} 0 0 0 ${LOGO_CX} ${LOGO_CY} A ${r} ${r} 0 0 1 ${LOGO_CX} ${LOGO_CY + LOGO_R}`;

export const LogoMark: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const growStart = T_WIREFRAME_END - 4;

  const draw = interpolate(frame, [growStart, T_STRUCTURE_END], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const scale = spring({
    frame: frame - growStart,
    fps,
    config: { damping: 14, mass: 0.6, stiffness: 120 },
    durationInFrames: T_STRUCTURE_END - growStart,
  });

  const opacity = interpolate(frame, [growStart, growStart + 6], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const dashOffset = (1 - draw) * PATH_LEN;

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
        <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={COLORS.greenLight} />
          <stop offset="55%" stopColor={COLORS.greenMid} />
          <stop offset="100%" stopColor={COLORS.greenDark} />
        </linearGradient>
      </defs>
      <path
        d={S_PATH}
        fill="none"
        stroke="url(#ringGradient)"
        strokeWidth={LOGO_RING_WIDTH}
        strokeLinecap="round"
        pathLength={PATH_LEN}
        strokeDasharray={PATH_LEN}
        strokeDashoffset={dashOffset}
      />
    </svg>
  );
};
