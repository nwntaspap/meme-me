export async function getVideo(previewCanvas) {
  const avStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });

  const video = document.createElement('video');
  try {
    // modern browsers
    video.srcObject = avStream;
  } catch {
    // old browsers
    video.src = window.URL.createObjectURL(avStream);
  }

  if (previewCanvas) {
    video.addEventListener('canplay', () => {
      drawPreview(video, previewCanvas);
    });
  }

  await video.play();

  return video;
}

// Draws ONE frame at the moment it's called
export function drawVideo(video, canvas) {
  const context = canvas.getContext('2d');
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
}

// Draws continuously (every ~16ms ≈ 60fps) using setInterval
export function drawPreview(video, canvas) {
  const context = canvas.getContext('2d');
  setInterval(() => {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
  }, 16);
}
