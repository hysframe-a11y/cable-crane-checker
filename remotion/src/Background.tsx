import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import {
  COLORS,
  HEIGHT,
  T_LOGOTYPE_END,
  T_STRUCTURE_END,
  T_WIREFRAME_END,
  T_END,
  WIDTH,
} from "./theme";

const Mountains: React.FC<{ opacity: number }> = ({ opacity }) => {
  return (
    <svg
      width={WIDTH}
      height={HEIGHT}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      style={{ position: "absolute", inset: 0, opacity }}
    >
      <path
        d={`M0,${HEIGHT * 0.62} C ${WIDTH * 0.22},${HEIGHT * 0.52} ${WIDTH * 0.38},${HEIGHT * 0.66} ${WIDTH * 0.58},${HEIGHT * 0.56} C ${WIDTH * 0.78},${HEIGHT * 0.47} ${WIDTH * 0.9},${HEIGHT * 0.6} ${WIDTH},${HEIGHT * 0.54} L ${WIDTH},${HEIGHT} L 0,${HEIGHT} Z`}
        fill={COLORS.mountainFar}
        opacity={0.55}
      />
      <path
        d={`M0,${HEIGHT * 0.72} C ${WIDTH * 0.2},${HEIGHT * 0.64} ${WIDTH * 0.42},${HEIGHT * 0.76} ${WIDTH * 0.6},${HEIGHT * 0.68} C ${WIDTH * 0.8},${HEIGHT * 0.6} ${WIDTH * 0.92},${HEIGHT * 0.72} ${WIDTH},${HEIGHT * 0.66} L ${WIDTH},${HEIGHT} L 0,${HEIGHT} Z`}
        fill={COLORS.mountainMid}
        opacity={0.6}
      />
      <path
        d={`M0,${HEIGHT * 0.82} C ${WIDTH * 0.25},${HEIGHT * 0.76} ${WIDTH * 0.45},${HEIGHT * 0.86} ${WIDTH * 0.65},${HEIGHT * 0.79} C ${WIDTH * 0.82},${HEIGHT * 0.74} ${WIDTH * 0.93},${HEIGHT * 0.83} ${WIDTH},${HEIGHT * 0.8} L ${WIDTH},${HEIGHT} L 0,${HEIGHT} Z`}
        fill={COLORS.mountainNear}
        opacity={0.65}
      />
    </svg>
  );
};

const PersimmonTree: React.FC<{ opacity: number }> = ({ opacity }) => {
  const bx = WIDTH * 0.8;
  const by = HEIGHT * 0.62;
  return (
    <svg
      width={WIDTH}
      height={HEIGHT}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      style={{ position: "absolute", inset: 0, opacity }}
    >
      <path
        d={`M ${bx},${by + 160} C ${bx - 10},${by + 90} ${bx + 30},${by + 60} ${bx + 10},${by} `}
        stroke={COLORS.trunk}
        strokeWidth={6}
        fill="none"
        strokeLinecap="round"
      />
      <path
        d={`M ${bx + 10},${by + 40} C ${bx - 30},${by + 10} ${bx - 40},${by - 20} ${bx - 60},${by - 30}`}
        stroke={COLORS.trunk}
        strokeWidth={4}
        fill="none"
        strokeLinecap="round"
      />
      <path
        d={`M ${bx + 15},${by + 10} C ${bx + 45},${by - 20} ${bx + 55},${by - 40} ${bx + 80},${by - 55}`}
        stroke={COLORS.trunk}
        strokeWidth={4}
        fill="none"
        strokeLinecap="round"
      />
      {[
        [bx - 60, by - 30],
        [bx - 20, by - 40],
        [bx + 20, by - 55],
        [bx + 55, by - 40],
        [bx + 80, by - 55],
        [bx + 5, by - 10],
      ].map(([x, y], i) => (
        <ellipse
          key={`leaf-${i}`}
          cx={x - 14}
          cy={y - 6}
          rx={20}
          ry={13}
          fill={COLORS.leaf}
          opacity={0.8}
        />
      ))}
      {[
        [bx - 55, by - 22],
        [bx - 15, by - 30],
        [bx + 25, by - 45],
        [bx + 60, by - 30],
        [bx + 10, by],
      ].map(([x, y], i) => (
        <circle key={`fruit-${i}`} cx={x} cy={y} r={9} fill={COLORS.fruit} />
      ))}
    </svg>
  );
};

export const Background: React.FC = () => {
  const frame = useCurrentFrame();

  const dawnOpacity = interpolate(
    frame,
    [0, T_WIREFRAME_END],
    [1, 0.15],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const sceneOpacity = interpolate(
    frame,
    [0, T_WIREFRAME_END, T_STRUCTURE_END],
    [0, 0.3, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const whiteFade = interpolate(frame, [T_LOGOTYPE_END, T_END], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          background: `radial-gradient(120% 90% at 18% 82%, ${COLORS.dawnPeach} 0%, ${COLORS.dawnSky} 55%, ${COLORS.mist} 100%)`,
        }}
      />
      <AbsoluteFill
        style={{
          background: `linear-gradient(160deg, ${COLORS.dawnSky} 0%, ${COLORS.mist} 100%)`,
          opacity: sceneOpacity,
        }}
      />
      <Mountains opacity={sceneOpacity} />
      <PersimmonTree opacity={sceneOpacity} />
      <AbsoluteFill
        style={{
          background: "#ffffff",
          opacity: whiteFade,
        }}
      />
    </AbsoluteFill>
  );
};
