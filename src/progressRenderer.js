export function drawProgressBar(ctx, obj) {
  const station = obj.station;

  if (station.duration <= 0) return;

  if (station.progress >= station.duration) return;

  const width = 100;
  const height = 15;

  const x = obj.x + obj.width / 2 - width / 2;
  const y = obj.y - 70;

  ctx.fillStyle = "#222";
  ctx.fillRect(x, y, width, height);

  ctx.fillStyle = "#4caf50";

  const ratio = station.progress / station.duration;

  ctx.fillRect(x, y, width * ratio, height);

  ctx.strokeStyle = "black";
  ctx.strokeRect(x, y, width, height);
}

export function drawCauldronProgress(ctx, obj) {
  const station = obj.station;

  if (station.duration <= 0) return;

  const width = 100;
  const height = 12;

  const x = obj.x + obj.width / 2 - width / 2;
  const y = obj.y - 55;

  ctx.fillStyle = "#222";
  ctx.fillRect(x, y, width, height);

  let ratio;

  // FIRST BREW
  if (station._first_brew) {
    ratio = station.progress / station.duration;

    ctx.fillStyle = "#3fa34d";
  }

  //OVERBREW PHASE
  else {
    ratio = (station.progress - station.duration) / (0.5 * station.duration);

    ratio = Math.max(0, Math.min(1, ratio));

    ctx.fillStyle = "#c0392b";
  }

  ctx.fillRect(x, y, width * ratio, height);

  ctx.strokeStyle = "black";
  ctx.strokeRect(x, y, width, height);
}
