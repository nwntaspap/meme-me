import './style.css';
import { drawVideo, getVideo } from './assets/camera';
import { drawText } from './assets/text';
import { getThemeToggle } from './assets/theme';
import { Modal } from './assets/modal';

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
  memeCtx.drawImage(selfieLayer, 0, 0); // Bottom Layer
  memeCtx.drawImage(textLayer, 0, 0); // Top Layer
}

function setupSettings() {
  const settings = document.getElementById('settings');
  getThemeToggle();

  const themeModal = new Modal(
    'Settings',
    settings,
    settings.querySelector('.modal-content'),
  );
  themeModal.render();
}

function setupAddText() {
  const textInputs = document.getElementById('add-text');
  const saveTextBtn = document.getElementById('text-save');

  saveTextBtn.addEventListener('click', () => {
    drawText(textLayer);
    redrawCanvas();

    // Clear the input fields
    document.getElementById('text-top').value = '';
    document.getElementById('text-bottom').value = '';
  });

  const textModal = new Modal(
    'Add some text',
    textInputs,
    textInputs.querySelector('.modal-content'),
  );
  textModal.render();
}

async function setupTakeSelfie() {
  const selfie = document.getElementById('take-selfie');
  const savePhotoBtn = document.getElementById('save-photo');

  const selfieModal = new Modal(
    'Take a selfie',
    selfie,
    selfie.querySelector('.modal-content'),
  );
  selfieModal.render();

  const previewCanvas = document.getElementById('preview');

  const video = await getVideo(previewCanvas);

  savePhotoBtn.addEventListener('click', () => {
    drawVideo(video, selfieLayer);
    redrawCanvas();
  });
}

function setupDownload() {
  const downloadBtn = document.getElementById('download-meme');

  downloadBtn.addEventListener('click', () => {
    // 1. Convert the canvas to a data URL (PNG format)
    const dataURL = memeCanvas.toDataURL('image/png');

    // 2. Create a "ghost" anchor element
    const link = document.createElement('a');
    link.download = 'my-meme.png'; // The name of the file
    link.href = dataURL;

    // 3. Trigger the click and remove the link
    link.click();
  });
}

// IIFE in case we don't have top-level await
(async function run() {
  setupSettings();
  setupAddText();
  await setupTakeSelfie();
  setupDownload();
})();
