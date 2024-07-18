const mobileMenuOpenBtn = document.querySelectorAll("[data-mobile-menu-open-btn]");
const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
const mobileMenuCloseBtn = document.querySelectorAll("[data-mobile-menu-close-btn]");

if (mobileMenuOpenBtn.length) {
  for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
    mobileMenuOpenBtn[i].addEventListener("click", function () {
      mobileMenu[i].classList.add("active");
    });

    mobileMenuCloseBtn[i].addEventListener("click", function () {
      mobileMenu[i].classList.remove("active");
    });
  }
}

const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
const accordion = document.querySelectorAll("[data-accordion]");

console.log(accordionBtn);

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    const clickedBtn = this.nextElementSibling.classList.contains("active");

    for (let i = 0; i < accordion.length; i++) {
      if (clickedBtn) break;

      if (accordion[i].classList.contains("active")) {
        accordion[i].classList.remove("active");
        accordionBtn[i].classList.remove("active");
      }
    }

    this.nextElementSibling.classList.toggle("active");
    this.classList.toggle("active");
  });
}
