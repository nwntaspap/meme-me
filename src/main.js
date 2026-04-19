import './style.css';
import { drawVideo, getVideo } from './assets/camera';
import { drawText } from './assets/text';

const memeCanvas = document.getElementById('meme');

// Create unattached canvas elements
// to serve as "layers" of the meme
const selfieLayer = document.createElement('canvas');
const textLayer = document.createElement('canvas');
for (let canvas of [selfieLayer, textLayer]) {
  canvas.width = memeCanvas.width;
  canvas.height = memeCanvas.height;
}

// When either layer has changed, we'll
// call this function to redraw the
// meme with the layers' new data
function redrawCanvas() {
  const memeCtx = memeCanvas.getContext('2d');
  memeCtx.drawImage(selfieLayer, 0, 0);
  memeCtx.drawImage(textLayer, 0, 0);
}

const previewCanvas = document.getElementById('preview');
const savePhotoBtn = document.getElementById('save-photo');
const video = await getVideo(previewCanvas);
savePhotoBtn.addEventListener('click', () => {
  drawVideo(video, selfieLayer);
  redrawCanvas();
});

const saveTextBtn = document.getElementById('text-save');
saveTextBtn.addEventListener('click', () => {
  drawText(textLayer);
  redrawCanvas();

  // Clear the input fields
  document.getElementById('text-top').value = '';
  document.getElementById('text-bottom').value = '';
});
