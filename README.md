# 🎭 Meme Me

A simple meme generator built with **Vanilla JavaScript + Canvas API + Vite**.

Users can:

- 📸 Take a selfie using the webcam
- ✍️ Add custom top and bottom text
- 🎨 Apply dark/light theme
- 🖼 Preview meme in real-time using layered canvas rendering
- ⬇️ Download the final meme as an image

---

## 🚀 Live Demo

👉 [View Live Project](https://nwntaspap.github.io/meme-me/)

---

## 🧠 Tech Stack

- HTML5 Canvas API
- JavaScript (ES Modules)
- Vite
- CSS Grid + Custom Properties
- MediaDevices API (camera access)

---

## 📸 Features

### Camera Capture

Uses `navigator.mediaDevices.getUserMedia()` to access webcam and render frames onto canvas.

### Layered Canvas System

The meme is built using multiple canvas layers:

- selfie layer (image)
- text layer (overlay text)

Both are combined into a final render.

### Theme System

Light/dark mode using CSS variables and `data-theme` attribute.

### Modal UI System

Custom modal class wraps UI sections into dialog-based components.

---

## 📦 Installation

```bash
npm install
npm run dev
```
