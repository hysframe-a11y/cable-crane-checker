import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import {
  COLORS,
  HEIGHT,
  LOGO_CX,
  LOGO_CY,
  LOGO_R,
  T_STRUCTURE_END,
  T_WIREFRAME_END,
  WIDTH,
} from "./theme";

const ANGLE_DEG = -34;
const STRIPE_COLORS = [COLORS.stripeDark, COLORS.stripeShine, COLORS.stripeDark];
const STRIPE_WIDTH = LOGO_R * 0.16;
const STRIPE_GAP = STRIPE_WIDTH * 1.35;
const STRIPE_LENGTH = LOGO_R * 3.6;

export const Stripes: React.FC = () => {
  const frame = useCurrentFrame();

  const start = T_WIREFRAME_END + 2;
  const progress = interpolate(frame, [start, T_STRUCTURE_END], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const opacity = interpolate(frame, [start, start + 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const slide = interpolate(progress, [0, 1], [-140, 0]);

  return (
    <svg
      width={WIDTH}
      height={HEIGHT}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      style={{ position: "absolute", inset: 0, opacity }}
    >
      <g transform={`rotate(${ANGLE_DEG} ${LOGO_CX} ${LOGO_CY}) translate(${slide} 0)`}>
        {STRIPE_COLORS.map((color, i) => {
          const offset = (i - 1) * STRIPE_GAP;
          return (
            <rect
              key={`stripe-${i}`}
              x={LOGO_CX + offset - STRIPE_WIDTH / 2}
              y={LOGO_CY - STRIPE_LENGTH / 2}
              width={STRIPE_WIDTH}
              height={STRIPE_LENGTH}
              rx={STRIPE_WIDTH / 2}
              fill={color}
              opacity={color === COLORS.stripeShine ? 0.85 : 1}
            />
          );
        })}
      </g>
    </svg>
  );
};
