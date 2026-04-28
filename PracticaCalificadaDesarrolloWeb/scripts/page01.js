const dropZone = document.getElementById("dropZone");
const imageInput = document.getElementById("imageInput");
const imagePath = document.getElementById("imagePath");

function showFileName(file) {
  if (!file) return;
  const path = file.path || file.webkitRelativePath || file.name;
  imagePath.textContent = path;
}

imageInput.addEventListener("change", () => {
  showFileName(imageInput.files[0]);
});

dropZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropZone.classList.add("drag-over");
});

dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("drag-over");
});

dropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  dropZone.classList.remove("drag-over");
  const file = event.dataTransfer.files[0];
  showFileName(file);
});
