const certificatePreview = document.getElementById("certificatePreview");
const certificateModal = document.getElementById("certificateModal");
const closeModal = document.getElementById("closeModal");

certificatePreview.addEventListener("click", () => {
  certificateModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  certificateModal.style.display = "none";
});

certificateModal.addEventListener("click", (event) => {
  if (event.target === certificateModal) {
    certificateModal.style.display = "none";
  }
});