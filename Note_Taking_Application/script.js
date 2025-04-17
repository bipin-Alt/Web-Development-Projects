// Scroll-triggered visibility animation
function revealStats() {
    const stats = document.querySelectorAll('.stats');
    const triggerBottom = window.innerHeight * 0.85;
  
    stats.forEach(stat => {
      const statTop = stat.getBoundingClientRect().top;
      if (statTop < triggerBottom) {
        stat.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', revealStats);
  window.addEventListener('load', revealStats);
  
  // Animated percentage counters
  function animateCounters() {
    const counters = document.querySelectorAll('.number');
    const speed = 200;
  
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
  
      const updateCount = () => {
        const increment = target / speed;
        if (count < target) {
          count += increment;
          counter.innerText = `${Math.ceil(count)}%`;
          setTimeout(updateCount, 15);
        } else {
          counter.innerText = `${target}%`;
        }
      };
  
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          updateCount();
          observer.unobserve(counter);
        }
      }, { threshold: 1 });
  
      observer.observe(counter);
    });
  }
  
  window.addEventListener('load', animateCounters);
  
  // Mobile nav toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navButtons = document.querySelector('.nav-buttons');
  
  if (menuToggle && navButtons) {
    menuToggle.addEventListener('click', () => {
      navButtons.classList.toggle('active');
    });
  }
  