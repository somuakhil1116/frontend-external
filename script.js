const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const caption = document.getElementById("caption");

document.querySelectorAll(".gallery-img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    caption.innerText = img.alt;
  });
});

document.querySelector(".close").addEventListener("click", () => {
  modal.style.display = "none";
});
