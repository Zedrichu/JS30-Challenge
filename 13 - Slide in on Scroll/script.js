function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    console.log(e)
    sliderImages.forEach( image => {
        // Halfway through the image
        // window.scrollY - scroll level at top of the page
        const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;

        // Bottom of the image
        const imageBottom = image.offsetTop + image.height;
        // image.offsetTop - how far is the top of the image from the top of the page
        const isHalfShown = slideInAt > image.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    })
}

window.addEventListener('scroll', debounce(checkSlide, 10));