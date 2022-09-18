const fs = require('fs')
const { createCanvas } = require('canvas')
const path = require('path');

const wrapText = function (ctx, text, x, y, maxWidth, lineHeight) {
  let words = text.split(' ');
  let line = '';
  let testLine = '';
  let wordArray = [];
  let totalLineHeight = 0;

  for (var n = 0; n < words.length; n++) {
    testLine += `${words[n]} `;
    var metrics = ctx.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      wordArray.push([line, x, y]);
      y += lineHeight;
      totalLineHeight += lineHeight;
      line = `${words[n]} `;
      testLine = `${words[n]} `;
    }
    else {
      line += `${words[n]} `;
    }
    if (n === words.length - 1) {
      wordArray.push([line, x, y]);
    }
  }

  return [wordArray, totalLineHeight];
}

const cleanText = (stringInput) => {
  return stringInput.normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(new RegExp(' ', 'g'), "_")
    .replace(/[^\w]/g, '')
}

const createOGImage = ({ route, title, subtitle = '' }) => {

  const root = process.cwd();

  const width = 1200
  const height = 630
  const canvas = createCanvas(width, height)
  const context = canvas.getContext('2d')

  const lingrad = context.createLinearGradient(0, 0, 1230, 3000)
  lingrad.addColorStop(0, '#f1f1f1')
  lingrad.addColorStop(1, '#f8f8f8')
  context.fillStyle = lingrad

  context.fillRect(0, 0, width, height)

  context.fillStyle = '#0f0f00'
  context.fillRect(0, height - 20, width, 20)

  context.font = 'bold 54pt Montserrat'
  context.textAlign = 'center'
  context.textBaseline = 'top'
  context.fillStyle = '#F6A02D'

  const wrappedTitle = wrapText(context, title, 600, 500, 1000, 100);
  wrappedTitle[0].forEach((item, id) => {
    const diffDistance = wrappedTitle[0].length >= 2 ? 200 : 300;
    context.fillText(item[0], item[1], item[2] - wrappedTitle[1] - diffDistance);

    if (id === wrappedTitle[0].length - 1) {
      context.fillStyle = '#F6B22D'
      context.font = 'bold 40pt Montserrat'
      context.fillText(subtitle, 600, item[2] - wrappedTitle[1] - (diffDistance - 100))
    }

  })

  context.fillStyle = '#000'
  context.font = 'bold 40pt Montserrat'
  context.textAlign = 'center'
  context.fillText('michyaraque.dev', 600, 520)

  const buffer = canvas.toBuffer('image/png')
  fs.writeFileSync(path.join(root, 'public', 'opengraph', `${cleanText(route)}.png`), buffer)
}

module.exports = { wrapText, cleanText, createOGImage }
