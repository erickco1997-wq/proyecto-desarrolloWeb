const preview = document.getElementById("preview");

const controls = [
  { range: document.getElementById("rRange"), num: document.getElementById("rNum") },
  { range: document.getElementById("gRange"), num: document.getElementById("gNum") },
  { range: document.getElementById("bRange"), num: document.getElementById("bNum") }
];

function clamp255(value) {
  const n = Number(value);
  if (Number.isNaN(n)) return 0;
  return Math.max(0, Math.min(255, n));
}

function paint() {
  const [r, g, b] = controls.map((c) => clamp255(c.range.value));
  preview.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

controls.forEach((control) => {
  control.range.addEventListener("input", () => {
    control.num.value = control.range.value;
    paint();
  });

  control.num.addEventListener("input", () => {
    const value = clamp255(control.num.value);
    control.num.value = value;
    control.range.value = value;
    paint();
  });
});

paint();
