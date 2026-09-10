import {
  AbsoluteFill,
  Composition,
  Easing,
  Interactive,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const CX = 540;
const CY = 800;
const R = 300;
const RING_WIDTH = 84;
const BAND_HEIGHT = 104;
const BAND_WIDTH = R * 2;
const RING_COLOR = "#1EA854";

export const BootAnimationComposition = () => {
  return (
    <Composition
      id="BootAnimation"
      component={BootAnimation}
      durationInFrames={36}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};

export const BootAnimation: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const ringMaskScale = spring({
    frame: frame - 9,
    fps,
    durationInFrames: 12,
    config: { damping: 16, mass: 0.6, stiffness: 140 },
  });

  const bandScaleX = spring({
    frame: frame - 21,
    fps,
    durationInFrames: 9,
    config: { damping: 14, mass: 0.5, stiffness: 160 },
  });

  const textScale = spring({
    frame: frame - 25,
    fps,
    durationInFrames: 9,
    config: { damping: 12, mass: 0.4, stiffness: 180 },
  });

  return (
    <AbsoluteFill name="Scene" style={{ backgroundColor: "#eef2ee" }}>
      <Interactive.Div
        name="Watercolor mountains"
        style={{
          position: "absolute",
          inset: 0,
          opacity: interpolate(frame, [0, 9, 21], [0.25, 0.55, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <svg width={1080} height={1920} viewBox="0 0 1080 1920">
          <defs>
            <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f3ede0" />
              <stop offset="100%" stopColor="#e2ece4" />
            </linearGradient>
          </defs>
          <rect x={0} y={0} width={1080} height={1920} fill="url(#skyGradient)" />
          <path
            d="M0,1190 C238,1030 410,1267 626,1075 C842,884 972,1152 1080,1037 L1080,1920 L0,1920 Z"
            fill="#b9cfc4"
            opacity={0.5}
          />
          <path
            d="M0,1382 C216,1229 454,1459 648,1306 C864,1152 1000,1382 1080,1267 L1080,1920 L0,1920 Z"
            fill="#9dbdad"
            opacity={0.55}
          />
          <path
            d="M0,1574 C270,1459 486,1651 702,1517 C874,1421 1006,1594 1080,1536 L1080,1920 L0,1920 Z"
            fill="#7fa892"
            opacity={0.6}
          />
        </svg>
      </Interactive.Div>

      <Interactive.Svg
        name="Wireframe guides"
        style={{
          position: "absolute",
          inset: 0,
          opacity: interpolate(frame, [0, 9, 12], [1, 1, 0], {
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
          pathLength={1000}
          strokeDasharray={1000}
          strokeDashoffset={interpolate(frame, [0, 9], [1000, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          })}
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
          pathLength={1000}
          strokeDasharray={1000}
          strokeDashoffset={interpolate(frame, [0, 9], [1000, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          })}
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
          pathLength={1000}
          strokeDasharray={1000}
          strokeDashoffset={interpolate(frame, [0, 9], [1000, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          })}
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
          pathLength={1000}
          strokeDasharray={1000}
          strokeDashoffset={interpolate(frame, [0, 9], [1000, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          })}
        />
        <Interactive.Text
          name="Guide coordinate label"
          x={CX - R * 1.3}
          y={CY + R * 1.35}
          fill="#4caf7d"
          fontFamily="monospace"
          style={{
            fontSize: 13,
            opacity: interpolate(frame, [3, 9], [0, 0.7], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          (240, 800, 600)
        </Interactive.Text>
      </Interactive.Svg>

      <Interactive.Div
        name="Logo group"
        style={{
          position: "absolute",
          inset: 0,
          filter: `brightness(${interpolate(frame, [30, 33, 36], [1, 1.35, 1.08], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}) drop-shadow(0 0 ${interpolate(frame, [30, 33, 36], [0, 34, 18], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}px rgba(30, 168, 84, 0.75))`,
          opacity: interpolate(frame, [33, 36], [1, 0.08], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
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
            <linearGradient id="ringGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2fc06c" />
              <stop offset="100%" stopColor={RING_COLOR} />
            </linearGradient>
            <mask id="growMask">
              <rect x={0} y={0} width={1080} height={1920} fill="black" />
              <circle
                cx={CX}
                cy={CY}
                r={R * 1.35 * ringMaskScale}
                fill="white"
              />
            </mask>
            <mask id="stripeSilhouette">
              <rect x={0} y={0} width={1080} height={1920} fill="black" />
              <circle
                cx={CX}
                cy={CY}
                r={R}
                fill="none"
                stroke="white"
                strokeWidth={RING_WIDTH}
              />
            </mask>
          </defs>

          <g mask="url(#growMask)">
            <Interactive.Circle
              name="Logo ring"
              cx={CX}
              cy={CY}
              r={R}
              fill="none"
              stroke="url(#ringGradient)"
              strokeWidth={RING_WIDTH}
            />

            <g mask="url(#stripeSilhouette)">
              {[-2, -1, 0, 1, 2].map((k) => (
                <Interactive.Rect
                  key={`stripe-${k}`}
                  name={`Reveal stripe ${k}`}
                  x={CX - 500 + k * 140}
                  y={CY - 900}
                  width={70}
                  height={1800}
                  fill={k % 2 === 0 ? "#e8f5ee" : "#0e6b39"}
                  style={{
                    rotate: "34deg",
                    transformOrigin: `${CX}px ${CY}px`,
                    opacity: interpolate(frame, [9, 13, 18, 21], [0, 0.9, 0.9, 0], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    }),
                  }}
                />
              ))}
            </g>
          </g>

          <Interactive.Rect
            name="Logo band"
            x={CX - BAND_WIDTH / 2}
            y={CY - BAND_HEIGHT / 2}
            width={BAND_WIDTH}
            height={BAND_HEIGHT}
            rx={BAND_HEIGHT / 2}
            fill="url(#ringGradient)"
            style={{
              scale: bandScaleX,
              transformOrigin: `${CX}px ${CY}px`,
              opacity: interpolate(frame, [21, 24], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          />

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
              scale: interpolate(textScale, [0, 1], [0.95, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                output: "perceptual-scale",
              }),
              transformOrigin: `${CX}px ${CY}px`,
              opacity: interpolate(frame, [25, 30], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            NAGANO
          </Interactive.Text>
        </svg>
      </Interactive.Div>

      <Interactive.Div
        name="Dashboard screen"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#ffffff",
          opacity: interpolate(frame, [30, 36], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.in(Easing.cubic),
          }),
        }}
      >
        <Interactive.Div
          name="Dashboard header"
          style={{
            position: "absolute",
            top: 96,
            left: 64,
            right: 64,
            height: 64,
            borderRadius: 16,
            backgroundColor: "#eef5f0",
          }}
        />
        {[0, 1, 2].map((row) => (
          <Interactive.Div
            key={`dashboard-card-${row}`}
            name={`Dashboard card ${row}`}
            style={{
              position: "absolute",
              top: 200 + row * 160,
              left: 64,
              right: 64,
              height: 120,
              borderRadius: 20,
              backgroundColor: "#f4f6f5",
              border: "1px solid #dfe4e2",
            }}
          />
        ))}
      </Interactive.Div>
    </AbsoluteFill>
  );
};
