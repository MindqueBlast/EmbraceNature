function checkScroll() {
    const scrollElements = document.querySelectorAll('.scroll-element');
    for (let i = scrollElements.length; i--;) {
        if (scrollElements[i].getBoundingClientRect().top < window.innerHeight) {
            scrollElements[i].classList.add('scrolled');
        } else {
            scrollElements[i].classList.remove('scrolled');
        }
    }
}
//check scroll on load
checkScroll();
//add event listener
document.addEventListener('scroll', checkScroll);
