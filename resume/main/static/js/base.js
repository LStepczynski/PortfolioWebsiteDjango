let menuState = false
const about = document.getElementById("about")
const projects = document.getElementById("projects")
const resume = document.getElementById("resume")
const homeBtn = document.getElementById("homeBtn")
const slidingBar = document.getElementById("slidingBar")
const fadeins = Array.from(document.getElementsByClassName('fadein'))

function menuAnimation() {
    if (menuState) {
        about.style.opacity = '1'
        projects.style.opacity = '1'
        resume.style.opacity = '1'
        slidingBar.style.opacity = '1'
    } else {
        about.style.opacity = '0'
        projects.style.opacity = '0'
        resume.style.opacity = '0'
        slidingBar.style.opacity = '0'
    }
    menuState = !menuState
}

homeBtn.addEventListener('click', menuAnimation)
window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        about.style.opacity = '1'
        projects.style.opacity = '1'
        resume.style.opacity = '1'
        slidingBar.style.opacity = '0'
    } else {
        slidingBar.style.opacity = '1'
        about.style.opacity = '1'
        projects.style.opacity = '1'
        resume.style.opacity = '1'
    }
})

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  };
  
  const intersectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // The element is visible in the viewport
        const elementTransition = entry.target.style.transition; // Corrected property name
        entry.target.style.transition = 'opacity 1s, transform .7s';
        entry.target.style.opacity = '1'; // Make the element visible
        entry.target.style.transform = 'translateY(0)'
        observer.unobserve(entry.target);
        setTimeout(()=>{entry.target.style.transition = elementTransition;}, 1000)
      }
    });
  };
  
  const observer = new IntersectionObserver(intersectionCallback, options);
  
  fadeins.forEach((fadein) => {
    observer.observe(fadein);
  });