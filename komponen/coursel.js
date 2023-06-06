const sliderItems = document.querySelectorAll(".slider-item");
let currentItemIndex = 0;

function showSlide(index) {
  sliderItems.forEach((item, i) => {
    if (i === index) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function nextSlide() {
  currentItemIndex = (currentItemIndex + 1) % sliderItems.length;
  showSlide(currentItemIndex);
}

function prevSlide() {
  currentItemIndex =
    (currentItemIndex - 1 + sliderItems.length) % sliderItems.length;
  showSlide(currentItemIndex);
}

showSlide(currentItemIndex);
setInterval(nextSlide, 3000);
// TEKNIK KOMPUTER DAN JARINGAN