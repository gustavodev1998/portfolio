/* OPEN AND CLOSE MENU */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const btn of toggle) {
  btn.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

/* ACTIVE LINK */
let activeBeforeClick = document.querySelector('.active')

/* CLICK ON A ITEM FROM THE MENU */
const links = document.querySelectorAll('.menu a')

for (const link of links) {
  link.addEventListener('click', () => {
    activeBeforeClick.classList.remove('active')
    link.classList.add('active')
    activeBeforeClick = link
    nav.classList.remove('show')
  })
}

/* PROJECTS SLIDER */
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 1,
      setWrapperSize: true
    },
    1100: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* BACK TO TOP */

const backToTop = document.querySelector('.back-to-top')
window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    backToTop.classList.add('show')
  } else backToTop.classList.remove('show')
})

backToTop.addEventListener('click', () => {
  activeBeforeClick.classList.remove('active')
  links[0].classList.add('active')
  activeBeforeClick = links[0]
})

const readMorebtn = document.querySelector('.bt-read')
readMorebtn.addEventListener('click', () => {
  activeBeforeClick.classList.remove('active')
  links[1].classList.add('active')
  activeBeforeClick = links[1]
})

/* SCROLL REVEAL */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .text, 
  #projects .title,
  #contact .text, form,
  footer .brand, footer .social
  `,
  { interval: 100 }
)
