import "./globals.css";

export const metadata = {
  title: "ALONE Audio Studio v4",
  description:
    "100% client-side web audio editor — WaveSurfer · Tone.js · FFmpeg.wasm · ONNX AI Stem Separation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
