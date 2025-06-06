
// sticky navbar
const navbar = document.getElementById('navbar');
const navbarInner = document.getElementById('navbar-inner');
const stickyOffset = navbar.offsetTop;
let isSticky = false;
const buffer = 6; // pixels of hysteresis

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (!isSticky && scrollY >= stickyOffset + buffer) {
    isSticky = true;
    navbar.classList.add('sticky-active');
    navbarInner.classList.remove('p-3.5');
    navbarInner.classList.add('p-0');
  } else if (isSticky && scrollY <= stickyOffset - buffer) {
    isSticky = false;
    navbar.classList.remove('sticky-active');
    navbarInner.classList.remove('p-0');
    navbarInner.classList.add('p-3.5');
  }
});

// sliders 
document.addEventListener('DOMContentLoaded', function () {
    
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    
    let currentIndex = 0;
    const totalSlides = slides.length; 

    

    
    function showSlide(newIndex) {
      slides.forEach((slide, idx) => {
        if (idx === newIndex) {
          
          slide.classList.remove('opacity-0', 'z-10');
          slide.classList.add('opacity-100', 'z-20');
        } else {
          
          slide.classList.remove('opacity-100', 'z-20');
          slide.classList.add('opacity-0', 'z-10');
        }
      });
    }

    // 4. “Next” button handler
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides; // wrap around
      showSlide(currentIndex);
    });

    // 5. “Prev” button handler
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // wrap-around
      showSlide(currentIndex);
    });

    // 6. Initialize: show the first slide on page load
    showSlide(currentIndex);
  });

  