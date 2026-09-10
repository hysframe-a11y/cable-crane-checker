export const WIDTH = 1080;
export const HEIGHT = 1920;
export const FPS = 60;
export const DURATION_IN_FRAMES = Math.round(1.2 * FPS); // 72 frames / 1.2s

// Phase boundaries (in frames, at 60fps)
export const T_WIREFRAME_END = Math.round(0.3 * FPS); // 18
export const T_STRUCTURE_END = Math.round(0.7 * FPS); // 42
export const T_LOGOTYPE_END = Math.round(1.0 * FPS); // 60
export const T_END = DURATION_IN_FRAMES; // 72

// Logo geometry
export const LOGO_CX = WIDTH / 2;
export const LOGO_CY = Math.round(HEIGHT * 0.42);
export const LOGO_R = 300;
export const LOGO_RING_WIDTH = LOGO_R * 0.42;

export const COLORS = {
  dawnPeach: "#ffe3c2",
  dawnSky: "#eef5f0",
  mist: "#dbe8e0",
  mountainFar: "#b9cfc4",
  mountainMid: "#9dbdad",
  mountainNear: "#7fa892",
  greenLight: "#8fe0ae",
  greenMid: "#3fb373",
  greenDark: "#1a6b40",
  greenDeep: "#0f4c2e",
  plateLight: "#c9f5da",
  plateMid: "#4fc985",
  stripeDark: "#1b5e3a",
  stripeShine: "#eef2ef",
  trunk: "#6b4a35",
  leaf: "#8fae7c",
  fruit: "#e8935a",
  wire: "#4caf7d",
};
