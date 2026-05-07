export default function Canvas() {
  const canvas = document.createElement("canvas");
  canvas.id = "canvas";
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext("2d");

  function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resize);
  resize();

  return { canvas, ctx};
}
