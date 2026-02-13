const letter = document.getElementById("letter");

document.getElementById("openBtn").addEventListener("click", () => {
  letter.classList.add("open");
});

document.getElementById("closeBtn").addEventListener("click", () => {
  letter.classList.remove("open");
});