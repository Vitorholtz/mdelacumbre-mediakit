// mobile menu toggle
let menuToggle = document.querySelector('.mobile-menu-toggle');
let mobileMenu = document.querySelector('.md-header');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('mobile-menu-toggle--active');
    mobileMenu.classList.toggle('md-header--mobile');
})

// reveal on scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

// other
window.onload
feather.replace()


// Identificar o clique no menu
// Verificar o item que foi clicado e fazer referência com o alvo
// Verificar a distância entre o alvo e o topo
// Animar o scroll até o alvo

const menuItems = document.querySelectorAll('div.md-nav-bar--header a[href^="#"], div.md-nav-bar--footer a[href^="#"]');

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  // Caso queira o nativo apenas
	// window.scroll({
	// top: to,
	// behavior: "smooth",
	// })
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget)- 80;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});

// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};


// Video pop up

let playBtn = document.querySelector('.doc-video-player');
let playBtnSecondary = document.querySelector('.secondary-button--trailer');
let playBtnPodcast = document.querySelector('.video-player-container');
let videoContainer = document.querySelector('.documentary-video-pop-up');
let closeVideoBtn = document.querySelector('.close-icon');
let videoIframe = document.querySelector('.trailer-video');

playBtnPodcast.addEventListener('click',()=>{
  videoContainer.classList.add('documentary-video-pop-up--active');
  videoIframe.src = "https://www.youtube.com/embed/WKkGP9ZopV8?autoplay=1"; // Substitua pela URL do seu vídeo

})


playBtn.addEventListener('click',()=>{
  videoContainer.classList.add('documentary-video-pop-up--active');
  videoIframe.src = "https://www.youtube.com/embed/vQna8iPWEuY?autoplay=1"; // Substitua pela URL do seu vídeo

})

playBtnSecondary.addEventListener('click',()=>{
  videoContainer.classList.add('documentary-video-pop-up--active');
  videoIframe.src = "https://www.youtube.com/embed/vQna8iPWEuY?autoplay=1"; // Substitua pela URL do seu vídeo

})

closeVideoBtn.addEventListener('click',()=>{
  videoContainer.classList.remove('documentary-video-pop-up--active');
  videoIframe.src = ''; // Pausa o vídeo ao remover a URL

})


// TESTIMONIALS CAROUSEL

let nextBtn = document.querySelector('.next-btn');
let previousBtn = document.querySelector('.previous-btn');
let testimonial = document.querySelectorAll('.testimonial');
let itemAtivoIndex = 0;

nextBtn.addEventListener('click', () => {
  if (itemAtivoIndex >= 0) {
    testimonial[itemAtivoIndex].classList.remove('t-active');
  }

  itemAtivoIndex = (itemAtivoIndex + 1) % testimonial.length;
  testimonial[itemAtivoIndex].classList.add('t-active');
})

previousBtn.addEventListener('click', () => {
  if (itemAtivoIndex >= 0) {
    testimonial[itemAtivoIndex].classList.remove('t-active');
  }

  itemAtivoIndex = (itemAtivoIndex - 1 + testimonial.length) % testimonial.length;
  testimonial[itemAtivoIndex].classList.add('t-active');
});

// CAROUSEL PAGINATION

let pagItem = document.querySelectorAll('.p-item');
let pagAtivoIndex = 0;

nextBtn.addEventListener('click', () => {
  if (pagAtivoIndex >= 0) {
    pagItem[pagAtivoIndex].classList.remove('p-active');
  }

  pagAtivoIndex = (pagAtivoIndex + 1) % pagItem.length;
  pagItem[pagAtivoIndex].classList.add('p-active');
})

previousBtn.addEventListener('click', () => {
  if (pagAtivoIndex >= 0) {
    pagItem[pagAtivoIndex].classList.remove('p-active');
  }

  pagAtivoIndex = (pagAtivoIndex - 1 + pagItem.length) % pagItem.length;
  pagItem[pagAtivoIndex].classList.add('p-active');
});
