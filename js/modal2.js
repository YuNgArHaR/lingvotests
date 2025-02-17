// 2
const openModalBtn2 = document.querySelector(".open-modal-btn2");
const modalOverlay2 = document.getElementById("modalOverlay2");
const closeModalBtn2 = document.getElementById("closeModalBtn2");

openModalBtn2.addEventListener("click", () => {
  modalOverlay2.style.opacity = "1";
  modalOverlay2.style.visibility = "visible";
  document.querySelector(".modal2").classList.add("open");
});

closeModalBtn2.addEventListener("click", () => {
  modalOverlay2.style.opacity = "0";
  modalOverlay2.style.visibility = "hidden";
  document.querySelector(".modal2").classList.remove("open");
});

modalOverlay2.addEventListener("click", (e) => {
  if (e.target === modalOverlay2) {
    closeModalBtn2.click();
  }
});

