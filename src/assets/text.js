export function drawText(canvas) {
  const data = getTextData();
  const context = canvas.getContext('2d');

  // Clear any previous text
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (let { text, x, y } of data) {
    const maxWidth = canvas.width - 10 - x;
    context.fillStyle = 'white';
    context.strokeStyle = 'black';
    context.font = 'bold 80px Impact';
    context.fillText(text, x, y, maxWidth);
    context.strokeText(text, x, y, maxWidth);
  }
}

function getTextData() {
  const top = document.getElementById('text-top');
  const topData = {
    text: top.value.trim().toUpperCase() || ' ', // Prevent empty
    x: 10,
    y: 90,
  };

  const bottom = document.getElementById('text-bottom');
  const bottomData = {
    text: bottom.value.trim().toUpperCase() || ' ', // Prevent empty
    x: 10,
    y: 470,
  };

  return [topData, bottomData];
}
