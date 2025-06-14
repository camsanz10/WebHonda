const track = document.querySelector(".carousel-track");
const images = document.querySelectorAll(".carousel-img");
const totalImages = images.length;

let currentIndex = 0;

function updateCarousel() {
  images.forEach((img, i) => {
    img.classList.remove("active");
  });

  images[currentIndex].classList.add("active");

  const offset = currentIndex * (100 / 3); 
  track.style.transition = "transform 0.8s ease-in-out";
  track.style.transform = `translateX(-${offset}%)`;
}

function moveCarousel() {
  currentIndex = (currentIndex + 1) % totalImages; 
  updateCarousel();
}

setInterval(moveCarousel, 3000);

function playRoar() {
  const audio = document.getElementById("engine-audio");
  audio.currentTime = 0;
  audio.play();
}

  let prevScroll = window.scrollY;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > prevScroll) {
      navbar.style.top = "-100px";
    } else {
      navbar.style.top = "0";
    }

    prevScroll = currentScroll;
  });

document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-up");

  const appearOnScroll = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  fadeElements.forEach((el) => {
    appearOnScroll.observe(el);
  });

  const soundButton = document.querySelector(".btn-sound");
  if (soundButton) {
    soundButton.addEventListener("click", () => {
      const audio = new Audio("./audio/nsx-roar.mp3"); 
      audio.play();
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const carImg = document.querySelector(".car-img");

  setTimeout(() => {
    carImg.style.transform = "translateX(0)";
    carImg.style.opacity = "1";
  }, 100); 
});

document.addEventListener("DOMContentLoaded", () => {
  const hondaSide = document.querySelector(".honda-side");
  const nsxSide = document.querySelector(".nsx-side");

  hondaSide.classList.add("hidden");
  nsxSide.classList.add("hidden");

  requestAnimationFrame(() => {
    hondaSide.classList.remove("hidden");
    nsxSide.classList.remove("hidden");
    hondaSide.style.opacity = "1";
    nsxSide.style.opacity = "1";
  });
});

function animateOnScroll(selector) {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.3 });

  elements.forEach(el => {
    el.classList.add('hidden'); 
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  animateOnScroll('.car-img2');
  animateOnScroll('.car-bg');
});

document.addEventListener("DOMContentLoaded", () => {
  const redefineSection = document.querySelector('.redefine-container');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        redefineSection.classList.add('animate-in');
        observer.unobserve(redefineSection);
      }
    });
  }, { threshold: 0.3 });

  if (redefineSection) {
    observer.observe(redefineSection);
  }
});

const bg2 = document.querySelector('.car-bg2');
const car3 = document.querySelector('.car-img3');

if (bg2) {
  const bgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        bg2.classList.add('animate-in');
      }
    });
  }, { threshold: 0.5 });

  bgObserver.observe(bg2);
}

if (car3) {
  const carObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        car3.classList.add('animate-in');
      }
    });
  }, { threshold: 0.5 });

  carObserver.observe(car3);
}

function revealInfoBlocksOnScroll() {
  const blocks = document.querySelectorAll('.info-block');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.3
  });

  blocks.forEach(block => observer.observe(block));
}

document.addEventListener('DOMContentLoaded', revealInfoBlocksOnScroll);

document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.roar-section');
  if (!section) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3, 
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('roar-animate');
        observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  observer.observe(section);
});

document.addEventListener('DOMContentLoaded', () => {
  const footerContent = document.querySelector('.footer-content');
  if (!footerContent) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        footerContent.classList.add('footer-visible');
        obs.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.2 
  });

  observer.observe(footerContent);
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("music-toggle");
  const bgMusic = document.getElementById("bg-music");

  if (!toggleBtn || !bgMusic) return;

  bgMusic.volume = 0.4;

  toggleBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
      toggleBtn.textContent = "🔊 Music";
    } else {
      bgMusic.pause();
      toggleBtn.textContent = "🔇 Music";
    }
  });
});
