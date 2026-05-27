import { drawButton } from "../utils/uiHelper.js";
import howToPlay1 from "../assets/how-to-play/how-to-play-1.png";
import howToPlay2 from "../assets/how-to-play/how-to-play-2.png";
import howToPlay3 from "../assets/how-to-play/how-to-play-3.png";
import howToPlay4 from "../assets/how-to-play/how-to-play-4.png";
import howToPlay5 from "../assets/how-to-play/how-to-play-5.png";
import howToPlay6 from "../assets/how-to-play/how-to-play-6.png";
import howToPlay7 from "../assets/how-to-play/how-to-play-7.png";

const howToPlay1Img = new Image();
howToPlay1Img.src = howToPlay1;

const howToPlay2Img = new Image();
howToPlay2Img.src = howToPlay2;
const howToPlay3Img = new Image();
howToPlay3Img.src = howToPlay3;
const howToPlay4Img = new Image();
howToPlay4Img.src = howToPlay4;
const howToPlay5Img = new Image();
howToPlay5Img.src = howToPlay5;
const howToPlay6Img = new Image();
howToPlay6Img.src = howToPlay6;
const howToPlay7Img = new Image();
howToPlay7Img.src = howToPlay7;

const slides = [];

slides.push(
  howToPlay1Img,
  howToPlay2Img,
  howToPlay3Img,
  howToPlay4Img,
  howToPlay5Img,
  howToPlay6Img,
  howToPlay7Img
);

let currentSlide = 0;

export function resetSlide() {
  currentSlide = 0;
}

export function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    return;
  }
}

export function previousSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    return;
  }
}

export function getLeftArrowButton(canvas) {
  return {
    x: 120,
    y: canvas.height / 2 - 40,
    width: 80,
    height: 80,
  };
}

export function getRightArrowButton(canvas) {
  return {
    x: canvas.width - 200,
    y: canvas.height / 2 - 40,
    width: 80,
    height: 80,
  };
}

export function getHowToPlayBackButton(canvas) {
  return {
    x: canvas.width / 2 - 50,
    y: canvas.height - 80,
    width: 100,
    height: 50,
  };
}

export function drawHowToPlay(ctx, canvas, mouseX, mouseY) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#120d18";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // TITLE

  ctx.fillStyle = "white";
  ctx.font = "70px HarryPotter";
  ctx.textAlign = "center";

  ctx.fillText("How To Play", canvas.width / 2, 50);

  const image = slides[currentSlide];

  const maxWidth = canvas.width * 0.7;
  const maxHeight = canvas.width * 0.65;

  const aspect = image.width / image.height;
  let drawWidth = maxWidth;
  let drawHeight = drawWidth / aspect;

  if (drawHeight > maxHeight) {
    drawHeight = maxHeight;
    drawWidth = drawHeight * aspect;
  }

  const x = canvas.width / 2 - drawWidth / 2;
  const y = canvas.height / 2 - drawHeight / 2;
  ctx.drawImage(image, x, y, drawWidth, drawHeight);

  drawButton(ctx, mouseX, mouseY, getLeftArrowButton(canvas), "<");
  drawButton(ctx, mouseX, mouseY, getRightArrowButton(canvas), ">");

  // BACK BUTTON

  drawButton(ctx, mouseX, mouseY, getHowToPlayBackButton(canvas), "Back");
}
