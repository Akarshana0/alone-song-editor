# ALONE Audio Studio — Full Version History

> 100% client-side web audio editor.  
> Zero server. Zero uploads. All audio processing happens in your browser.

---

## ⚡ Quick Start

```bash
npm install
npm run dev
```

Open **http://localhost:3000**

---

## 🗂 Version History (All Included)

| File | Version | What's Inside |
|------|---------|---------------|
| `AloneAudioStudio_v1.jsx` | **v1.0** | UI-only prototype — fake waveform data, no real audio engine |
| `AloneAudioStudio_v2.jsx` | **v2.0** | Real WaveSurfer.js waveforms + Tone.js playback + 10-band EQ |
| `AloneAudioStudio_v3.jsx` | **v3.0** | + Cut Tool ✂ + Clip Timeline + FFmpeg.wasm WAV/MP3 Export |
| `AloneAudioStudio.jsx`    | **v4.0** ✅ | + ONNX AI Stem Separation (Demucs-lite) + Web Worker |

All files are in `components/`. **v4 is the default** loaded by `app/page.jsx`.

---

## 🔀 Switching Versions

Edit `app/page.jsx` and change the import line:

```js
// v1 — UI prototype only
import AloneAudioStudio from "../components/AloneAudioStudio_v1";

// v2 — Real audio engine (WaveSurfer + Tone.js)
import AloneAudioStudio from "../components/AloneAudioStudio_v2";

// v3 — Cut tool + FFmpeg export
import AloneAudioStudio from "../components/AloneAudioStudio_v3";

// v4 — Full feature set (default)
import AloneAudioStudio from "../components/AloneAudioStudio";
```

---

## 🏗 Build for Production

```bash
npm run build
npm start
```

---

## 📂 Project Structure

```
alone-audio-studio/
├── app/
│   ├── layout.jsx
│   ├── page.jsx                      # Version switcher — loads v4 by default
│   └── globals.css
├── components/
│   ├── AloneAudioStudio.jsx          # ✅ v4.0 — CURRENT (ONNX AI Stems)
│   ├── AloneAudioStudio_v3.jsx       # v3.0 — Cut Tool + FFmpeg Export
│   ├── AloneAudioStudio_v2.jsx       # v2.0 — WaveSurfer + Tone.js
│   └── AloneAudioStudio_v1.jsx       # v1.0 — UI Prototype
├── next.config.mjs                   # COOP/COEP headers (SharedArrayBuffer)
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🔑 Critical: COOP/COEP Headers

`next.config.mjs` sets these on every route — required for FFmpeg.wasm and ONNX:

| Header | Value |
|--------|-------|
| `Cross-Origin-Opener-Policy` | `same-origin` |
| `Cross-Origin-Embedder-Policy` | `require-corp` |

---

## 🎛 Feature Matrix

| Feature | v1 | v2 | v3 | v4 |
|---------|----|----|----|----|
| UI / Layout | ✅ | ✅ | ✅ | ✅ |
| Real Waveform (WaveSurfer) | ❌ | ✅ | ✅ | ✅ |
| Real Playback (Tone.js) | ❌ | ✅ | ✅ | ✅ |
| 10-Band EQ | ❌ | ✅ | ✅ | ✅ |
| Cut Tool + Clip Timeline | ❌ | ❌ | ✅ | ✅ |
| FFmpeg.wasm Export | ❌ | ❌ | ✅ | ✅ |
| AI Stem Separation (ONNX) | ❌ | ❌ | ❌ | ✅ |
| Web Worker (off-main-thread) | ❌ | ❌ | ❌ | ✅ |

---

## 📦 Dependencies

Only `framer-motion` installed via npm.  
WaveSurfer, Tone.js, FFmpeg, ONNX Runtime load from CDN at runtime.

---

## 🚨 Troubleshooting

**SharedArrayBuffer / FFmpeg not working**  
Run via `npm run dev` — not by opening HTML directly.

**Audio CDN failed**  
Check network/firewall — needs `unpkg.com` and `cdnjs.cloudflare.com`.

**ONNX model stalls (v4)**  
Demucs-lite is ~47 MB from HuggingFace. Auto-falls back to DSP filter bank.
