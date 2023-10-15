const moreBtn = document.querySelector("#more");
const sidebar = document.querySelector(".sidebar");

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.querySelectorAll(".box h3").forEach((faqBox) => {
  faqBox.onclick = () => {
    faqBox.parentElement.classList.toggle("active");
  };
});

moreBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show");
  moreBtn.classList.toggle("change");
  console.log("clicked");
});

function img(anything) {
  document.querySelector(".slide").src = anything;
}

ScrollReveal().reveal(".one", { delay: 200 });
ScrollReveal().reveal(".two", { delay: 800 });
ScrollReveal().reveal(".three", { delay: 1600 });
