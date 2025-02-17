// 3
const openModalBtn3 = document.querySelector(".open-modal-btn3");
const modalOverlay3 = document.getElementById("modalOverlay3");
const closeModalBtn3 = document.getElementById("closeModalBtn3");

openModalBtn3.addEventListener("click", () => {
  modalOverlay3.style.opacity = "1";
  modalOverlay3.style.visibility = "visible";
  document.querySelector(".modal3").classList.add("open");
});

closeModalBtn3.addEventListener("click", () => {
  modalOverlay3.style.opacity = "0";
  modalOverlay3.style.visibility = "hidden";
  document.querySelector(".modal3").classList.remove("open");
});

modalOverlay3.addEventListener("click", (e) => {
  if (e.target === modalOverlay3) {
    closeModalBtn2.click();
  }
});
