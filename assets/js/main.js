/*==================== Ativo Link ===============  */
const navlink = document.querySelectorAll('.nav__link'); /* Selecionar os buttom do Projects */

function activeLink() {
    navlink.forEach((a) => a.classList.remove('active-link'));
    this.classList.add('active-link');
}

navlink.forEach((a) => a.addEventListener('click', activeLink));

/*==================== Mixitup filter ===============  */
let mixerProjects = mixitup('.projects__container', { /* class dos blocos de projetos */
    selectors: {
        target: '.project__item' /* Class do projetos item */
    },
    animation: {
        duration: 300
    }
});

/* Active Work */
const linkWork = document.querySelectorAll('.category__btn'); /* Selecionar os buttom do Projects */

function activeWork() {
    linkWork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));

/*==================== Testimonial Swiper ===============  */
var testiSwiper = new Swiper(".testimonial__container", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });