function initCarousel() {
  const container = document.querySelector(".carousel__inner");
  const goNext = document.querySelector(".carousel__arrow_right");
  const goBack = document.querySelector(".carousel__arrow_left");

  let index = 0;
  goBack.style.display = "none";

  function updateButtonsVisibility() {
    if (index > 0) {
      goBack.style.display = "";
    } else {
      goBack.style.display = "none";
    }
    if (index === container.children.length - 1) {
      goNext.style.display = "none";
    } else {
      goNext.style.display = "";
    }
  }

  goNext.addEventListener("click", () => {
    if (index < container.children.length - 1) {
      index += 1;
      value = `${container.offsetWidth * index}px`;
      container.style.transform = `translateX(-${value})`;
    }
    updateButtonsVisibility();
  });

  goBack.addEventListener("click", () => {
    if (index > 0) {
      index -= 1;
      value = `${container.offsetWidth * index}px`;
      container.style.transform = `translateX(-${value})`;
    }
    updateButtonsVisibility();
  });
}
