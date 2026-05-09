const keys = {};
export let justPressed = {};

window.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();

  if (!keys[key]) {
    justPressed[key] = true;
  }

  keys[key] = true;
});

window.addEventListener("keyup", (e) => {
  keys[e.key.toLowerCase()] = false;
});

export function clearJustPressed() {
  justPressed = {};
}

export default keys;
