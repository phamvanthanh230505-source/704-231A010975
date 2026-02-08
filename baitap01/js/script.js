const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-track img");
const total = slides.length;

let index = 0;

function updateSlide() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % total;
  updateSlide();
  resetAutoSlide();
}

function prevSlide() {
  index = (index - 1 + total) % total;
  updateSlide();
  resetAutoSlide();
}

let autoSlide = setInterval(nextSlide, 3000);

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 3000);
}
