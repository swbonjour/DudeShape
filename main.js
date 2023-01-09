import './style.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/all';

const headerLogo = document.querySelector('.header-logo');
const headerNavButtons = document.querySelector('.header-nav_buttons');

const headerNavLinks = gsap.utils.toArray('.header-nav_links > ul > li');

const headerNavTl = gsap.timeline();

headerNavTl.from([headerLogo, headerNavButtons], {
    y: -50,
    opacity: 0,
    duration: 1,
})

for(let i = 0; i < headerNavLinks.length; i++) {
    headerNavTl.from(headerNavLinks[i], {
        opacity: 0,
        duration: 0.3,
    })
}

const mainTl = gsap.timeline();

const mainText = document.querySelector('.main-text');

mainTl.delay(1.8);

const mainImgs = gsap.utils.toArray('.main > img');

for(let i = 0; i < mainImgs.length; i++) {
    mainTl.from(mainImgs[i], {
        opacity: 0,
        duration: 0.3,
    })
}

mainTl.from(mainText, {
    x: -100,
    opacity: 0,
    ease: 'power2',
    duration: 1,
})

gsap.registerPlugin(ScrollTrigger);

const sponsors = document.querySelector('.sponsors');

gsap.from(sponsors, {
    x: -500,
    opacity: 0,
    scrollTrigger: {
        trigger: mainText,
        start: 'top top',
        end: '+=400',
        scrub: 1,
    }
})

const aboutTextHeader = document.querySelector('.about-text_header');
const aboutTextDescription = document.querySelector('.about-text_description');

gsap.from([aboutTextHeader, aboutTextDescription], {
    x: -100,
    opacity: 0,
    scrollTrigger: {
        trigger: mainText,
        start: 'bottom top',
        end: '+=200',
    }
})

const aboutTextOptionsItem = gsap.utils.toArray('.about-text_options-item');

gsap.from([...aboutTextOptionsItem], {
    x: -200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: mainText,
        start: 'bottom top',
        end: '+=400',
    }
})

const headerButtons = document.querySelectorAll('.header-nav_buttons > a');
const headerNavMenu = document.querySelector('.header-nav_menu')

headerButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(!Number(headerNavMenu.style.opacity)) {
            gsap.to(headerNavMenu, {
                opacity: 1,
                duration: 0.2,
            })
        } else {
            gsap.to(headerNavMenu, {
                opacity: 0,
                duration: 0.2,
            })
        }
    })
})

window.addEventListener('scroll', (e) => {
    if(Number(headerNavMenu.style.opacity)) {
        gsap.to(headerNavMenu, {
            opacity: 0,
            duration: 0.2,
        })
    }
})

const headerNavMenuLinks = gsap.utils.toArray('.header-nav_links ul li');

gsap.registerPlugin(ScrollToPlugin);
const scrollToHome = () => {
    gsap.to(window, {
        scrollTo: '.main',
        duration: 1,
    })
}

headerNavLinks[0].addEventListener('click', scrollToHome);
headerNavMenuLinks[0].addEventListener('click', scrollToHome);

const scrollToAbout = () => {
    gsap.to(window, {
        scrollTo: '.about',
        duration: 1,
    })
}

headerNavLinks[1].addEventListener('click', scrollToAbout);
headerNavMenuLinks[1].addEventListener('click', scrollToAbout);

const scrollToPopular = () => {
    gsap.to(window, {
        scrollTo: '.popular',
        duration: 1,
    })
}

headerNavLinks[2].addEventListener('click', scrollToPopular);
headerNavMenuLinks[2].addEventListener('click', scrollToPopular);

const scrollToFurniture = () => {
    gsap.to(window, {
        scrollTo: '.furniture',
        duration: 1,
    })
}

headerNavLinks[3].addEventListener('click', scrollToFurniture);
headerNavMenuLinks[3].addEventListener('click', scrollToFurniture);

