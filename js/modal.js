// 1
const openModalBtn = document.querySelector(".open-modal-btn");
const modalOverlay = document.getElementById("modalOverlay");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", () => {
  modalOverlay.style.opacity = "1";
  modalOverlay.style.visibility = "visible";
  document.querySelector(".modal").classList.add("open");
});

closeModalBtn.addEventListener("click", () => {
  modalOverlay.style.opacity = "0";
  modalOverlay.style.visibility = "hidden";
  document.querySelector(".modal").classList.remove("open");
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    closeModalBtn.click();
  }
});

