/** =========== SHOW NAV MENU =========== */
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/** =========== REMOVE NAV MENU MOBILE =========== */
const navLink = document.querySelectorAll('.nav__link')

navLink.forEach((n) => {
    n.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
})

/** =========== HOME SWIPER =========== */
let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: "true",

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
window.addEventListener('scroll', () => {
    const header = document.getElementById('header')
    if (scrollY >= 80) {
        header.classList.add('scroll-header')
    } else {
        header.classList.remove('scroll-header')
    }
})

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper('.new-swiper', {
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: 'true',
    spaceBetween: 16
})

/*=============== SHOW SCROLLUP ===============*/

window.addEventListener('scroll', () => {
    const scrollUp = document.getElementById('scroll-up')

    if (scrollY >= 460) {
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')

    }
})

/*=============== SHOW ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link')
        } else {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`)
sr.reveal(`.category__data, .trick__content, .footer__content`, { interval: 100 })
sr.reveal(`.about__data, .discount__img`, { origin: 'left' })
sr.reveal(`.about__img, .discount__data`, { origin: 'right' })