'use strick';

// navbar trans when it on the top

const navbar = document.querySelector( '#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
   
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// Handle scrolling when tappong on the navbar menu

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    scrollIntoView(link);
});

// Handle click on "contact me" button on home

homeBtn = document.querySelector('.home__contact');
homeBtn.addEventListener('click', ()=>{
    scrollIntoView('#contact');
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior : 'smooth'});
}
