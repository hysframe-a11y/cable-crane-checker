import {
  AbsoluteFill,
  Composition,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";

const CX = 540;
const CY = 800;
const R = 300;
const RING_WIDTH = 88;
const BAND_HEIGHT = 132;
const BAND_WIDTH = R * 2.06;

export const NaganoSplashComposition = () => {
  return (
    <Composition
      id="NaganoSplash"
      component={NaganoSplash}
      durationInFrames={72}
      fps={60}
      width={1080}
      height={1920}
    />
  );
};

export const NaganoSplash: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill name="Scene" style={{ backgroundColor: "#eef2ee" }}>
      <Interactive.Div
        name="Paper background"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(130% 95% at 20% 85%, #fbe8c9 0%, #f3ede0 45%, #e7ede6 100%)",
          opacity: interpolate(frame, [0, 18], [1, 0.35], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />

      <Interactive.Div
        name="Mountain scene"
        style={{
          position: "absolute",
          inset: 0,
          opacity: interpolate(frame, [0, 18, 42], [0, 0.3, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <svg width={1080} height={1920} viewBox="0 0 1080 1920">
          <path
            d="M0,1190 C238,1030 410,1267 626,1075 C842,884 972,1152 1080,1037 L1080,1920 L0,1920 Z"
            fill="#b9cfc4"
            opacity={0.55}
          />
          <path
            d="M0,1382 C216,1229 454,1459 648,1306 C864,1152 1000,1382 1080,1267 L1080,1920 L0,1920 Z"
            fill="#9dbdad"
            opacity={0.6}
          />
          <path
            d="M0,1574 C270,1459 486,1651 702,1517 C874,1421 1006,1594 1080,1536 L1080,1920 L0,1920 Z"
            fill="#7fa892"
            opacity={0.65}
          />
        </svg>
      </Interactive.Div>

      <Interactive.Svg
        name="Wireframe guides"
        style={{
          position: "absolute",
          inset: 0,
          opacity: interpolate(frame, [0, 18, 28], [1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
        width={1080}
        height={1920}
        viewBox="0 0 1080 1920"
      >
        <Interactive.Circle
          name="Guide circle outer"
          cx={CX}
          cy={CY}
          r={R}
          fill="none"
          stroke="#4caf7d"
          strokeWidth={1.5}
          style={{ opacity: 0.6 }}
          strokeDasharray={1000}
          strokeDashoffset={interpolate(frame, [0, 18], [1000, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          })}
          pathLength={1000}
        />
        <Interactive.Circle
          name="Guide circle inner"
          cx={CX}
          cy={CY}
          r={R * 0.6}
          fill="none"
          stroke="#4caf7d"
          strokeWidth={1.2}
          style={{ opacity: 0.4 }}
          strokeDasharray={1000}
          strokeDashoffset={interpolate(frame, [0, 18], [1000, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          })}
          pathLength={1000}
        />
        <Interactive.Line
          name="Guide axis horizontal"
          x1={CX - R * 1.5}
          y1={CY}
          x2={CX + R * 1.5}
          y2={CY}
          stroke="#4caf7d"
          strokeWidth={1}
          style={{ opacity: 0.4 }}
        />
        <Interactive.Line
          name="Guide axis vertical"
          x1={CX}
          y1={CY - R * 1.5}
          x2={CX}
          y2={CY + R * 1.5}
          stroke="#4caf7d"
          strokeWidth={1}
          style={{ opacity: 0.4 }}
        />
        <Interactive.Line
          name="Guide diagonal 1"
          x1={CX - R * 1.4}
          y1={CY + R * 1.1}
          x2={CX + R * 1.4}
          y2={CY - R * 1.1}
          stroke="#4caf7d"
          strokeWidth={1}
          style={{ opacity: 0.5 }}
        />
        <Interactive.Line
          name="Guide diagonal 2"
          x1={CX - R * 1.4 + 40}
          y1={CY + R * 1.1}
          x2={CX + R * 1.4 + 40}
          y2={CY - R * 1.1}
          stroke="#4caf7d"
          strokeWidth={1}
          style={{ opacity: 0.5 }}
        />
        <Interactive.Text
          name="Guide label"
          x={CX - R * 1.3}
          y={CY + R * 1.35}
          fill="#4caf7d"
          fontFamily="monospace"
          style={{ fontSize: 13, opacity: 0.7 }}
        >
          (240, 800, 600)
        </Interactive.Text>
      </Interactive.Svg>

      <Interactive.Div
        name="White transition"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#ffffff",
          opacity: interpolate(frame, [60, 72], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />

      <Interactive.Div
        name="Logo group"
        style={{
          position: "absolute",
          inset: 0,
          translate: interpolate(frame, [60, 72], ["0px 0px", "0px -220px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
          scale: interpolate(frame, [60, 72], [1, 0.86], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
            output: "perceptual-scale",
          }),
        }}
      >
        <svg
          width={1080}
          height={1920}
          viewBox="0 0 1080 1920"
          style={{ position: "absolute", inset: 0, overflow: "visible" }}
        >
          <defs>
            <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5fd694" />
              <stop offset="100%" stopColor="#1f8a52" />
            </linearGradient>
            <mask id="logoMask">
              <rect x={0} y={0} width={1080} height={1920} fill="black" />
              <circle
                cx={CX}
                cy={CY}
                r={R}
                fill="none"
                stroke="white"
                strokeWidth={RING_WIDTH}
              />
              <rect
                x={CX - BAND_WIDTH / 2}
                y={CY - BAND_HEIGHT / 2}
                width={BAND_WIDTH}
                height={BAND_HEIGHT}
                fill="white"
              />
            </mask>
          </defs>

          <Interactive.Circle
            name="Logo ring"
            cx={CX}
            cy={CY}
            r={R}
            fill="none"
            stroke="url(#ringGradient)"
            strokeWidth={RING_WIDTH}
            style={{
              opacity: interpolate(frame, [14, 20], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
            strokeDasharray={1000}
            strokeDashoffset={interpolate(frame, [14, 42], [1000, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            })}
            pathLength={1000}
          />

          <Interactive.Rect
            name="Logo band"
            x={CX - BAND_WIDTH / 2}
            y={CY - BAND_HEIGHT / 2}
            width={BAND_WIDTH}
            height={BAND_HEIGHT}
            rx={BAND_HEIGHT / 2}
            fill="url(#ringGradient)"
            style={{
              opacity: interpolate(frame, [30, 38], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              scale: interpolate(frame, [30, 42], [0.7, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.out(Easing.back(1.6)),
                output: "perceptual-scale",
              }),
              transformOrigin: `${CX}px ${CY}px`,
            }}
          />

          <g mask="url(#logoMask)">
            {[-2, -1, 0, 1, 2].map((k) => (
              <Interactive.Rect
                key={`stripe-${k}`}
                name={`Reveal stripe ${k}`}
                x={0}
                y={0}
                width={70}
                height={2400}
                fill={k % 2 === 0 ? "#e8f5ee" : "#0f5c34"}
                style={{
                  opacity: interpolate(frame, [16, 24, 38, 44], [0, 0.9, 0.9, 0], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  }),
                  translate: interpolate(
                    frame,
                    [16, 44],
                    [`${CX - 500 + k * 140}px -300px`, `${CX + 500 + k * 140}px -300px`],
                    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
                  ),
                  rotate: "34deg",
                }}
              />
            ))}
          </g>

          <Interactive.Text
            name="Logo text"
            x={CX}
            y={CY}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#ffffff"
            fontFamily="'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
            style={{
              fontSize: 58,
              fontWeight: 700,
              letterSpacing: 3,
              opacity: interpolate(frame, [34, 42], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            NAGANO
          </Interactive.Text>
        </svg>
      </Interactive.Div>
    </AbsoluteFill>
  );
};
