import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import {
  COLORS,
  HEIGHT,
  LOGO_CX,
  LOGO_CY,
  LOGO_R,
  T_WIREFRAME_END,
  WIDTH,
} from "./theme";

const PATH_LEN = 1000;

export const Wireframe: React.FC = () => {
  const frame = useCurrentFrame();

  const draw = interpolate(frame, [0, T_WIREFRAME_END], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const fadeOutEnd = T_WIREFRAME_END + 10;
  const opacity = interpolate(frame, [T_WIREFRAME_END, fadeOutEnd], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const dashOffset = (1 - draw) * PATH_LEN;

  return (
    <svg
      width={WIDTH}
      height={HEIGHT}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      style={{ position: "absolute", inset: 0, opacity }}
    >
      <circle
        cx={LOGO_CX}
        cy={LOGO_CY}
        r={LOGO_R}
        fill="none"
        stroke={COLORS.wire}
        strokeWidth={1.5}
        opacity={0.6}
        pathLength={PATH_LEN}
        strokeDasharray={PATH_LEN}
        strokeDashoffset={dashOffset}
      />
      <circle
        cx={LOGO_CX}
        cy={LOGO_CY}
        r={LOGO_R * 0.62}
        fill="none"
        stroke={COLORS.wire}
        strokeWidth={1.2}
        opacity={0.45}
        pathLength={PATH_LEN}
        strokeDasharray={PATH_LEN}
        strokeDashoffset={dashOffset}
      />

      <line
        x1={LOGO_CX - LOGO_R * 1.5}
        y1={LOGO_CY}
        x2={LOGO_CX + LOGO_R * 1.5}
        y2={LOGO_CY}
        stroke={COLORS.wire}
        strokeWidth={1}
        opacity={0.4}
        pathLength={PATH_LEN}
        strokeDasharray={PATH_LEN}
        strokeDashoffset={dashOffset}
      />
      <line
        x1={LOGO_CX}
        y1={LOGO_CY - LOGO_R * 1.5}
        x2={LOGO_CX}
        y2={LOGO_CY + LOGO_R * 1.5}
        stroke={COLORS.wire}
        strokeWidth={1}
        opacity={0.4}
        pathLength={PATH_LEN}
        strokeDasharray={PATH_LEN}
        strokeDashoffset={dashOffset}
      />

      {[-1, 0, 1].map((k) => (
        <line
          key={`diag-${k}`}
          x1={LOGO_CX - LOGO_R * 1.4 + k * 40}
          y1={LOGO_CY + LOGO_R * 1.1}
          x2={LOGO_CX + LOGO_R * 1.4 + k * 40}
          y2={LOGO_CY - LOGO_R * 1.1}
          stroke={COLORS.wire}
          strokeWidth={1}
          opacity={0.5}
          pathLength={PATH_LEN}
          strokeDasharray={PATH_LEN}
          strokeDashoffset={dashOffset}
        />
      ))}

      {[
        { x: LOGO_CX - LOGO_R, y: LOGO_CY },
        { x: LOGO_CX + LOGO_R, y: LOGO_CY },
        { x: LOGO_CX, y: LOGO_CY - LOGO_R },
        { x: LOGO_CX, y: LOGO_CY + LOGO_R },
      ].map((p, i) => (
        <circle
          key={`dot-${i}`}
          cx={p.x}
          cy={p.y}
          r={4}
          fill={COLORS.wire}
          opacity={draw}
        />
      ))}

      <text
        x={LOGO_CX - LOGO_R * 1.35}
        y={LOGO_CY + LOGO_R * 1.35}
        fill={COLORS.wire}
        fontSize={13}
        fontFamily="monospace"
        opacity={draw * 0.7}
      >
        {`(${(LOGO_CX - LOGO_R).toFixed(0)}, ${LOGO_CY}, ${(LOGO_R * 2).toFixed(0)})`}
      </text>
      <text
        x={LOGO_CX - LOGO_R * 0.2}
        y={LOGO_CY - LOGO_R * 1.15}
        fill={COLORS.wire}
        fontSize={13}
        fontFamily="monospace"
        opacity={draw * 0.7}
      >
        {`(${LOGO_CX.toFixed(0)}, ${(LOGO_CY - LOGO_R).toFixed(0)})`}
      </text>
    </svg>
  );
};
