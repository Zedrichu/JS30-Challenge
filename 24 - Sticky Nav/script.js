const nav = document.querySelector('#main');
const topNav = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= topNav) {
        // Fix the navigation
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        // Unfix the navbar
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}


window.addEventListener('scroll', fixNav);