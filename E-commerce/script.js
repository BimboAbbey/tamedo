const open = document.getElementById("open");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (open) {
  open.addEventListener("click", () => {
    nav.classList.toggle("active");
    open.style.display = "none";
    close.style.display = "block";
    close.style.zIndex = 10;
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.toggle("active");
    close.style.display = "none";
    open.style.display = "block";
  });
}
