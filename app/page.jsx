// Default: loads v4 (latest & most complete)
// To switch versions, change the import below:
//   import AloneAudioStudio from "../components/AloneAudioStudio_v1";  // UI-only prototype
//   import AloneAudioStudio from "../components/AloneAudioStudio_v2";  // WaveSurfer + Tone.js
//   import AloneAudioStudio from "../components/AloneAudioStudio_v3";  // + Cut Tool + FFmpeg Export
//   import AloneAudioStudio from "../components/AloneAudioStudio";     // v4 — + ONNX AI Stems (current)

import AloneAudioStudio from "../components/AloneAudioStudio";

export default function Home() {
  return <AloneAudioStudio />;
}
