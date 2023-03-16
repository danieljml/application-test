export const handlerAnimation = (btn, eventType) => {
  if (btn) {
    btn.addEventListener(eventType, (e) => {
      e.target.classList.toggle("animate__pulse");
    });
  }
};

export const handlerSignMethod = (firstBtn, secondBtn) => {
  if (firstBtn && secondBtn) {
    firstBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.parentNode.classList.replace("show", "hidden");
      secondBtn.parentNode.classList.replace("hidden", "show");
    });
  }
};
