/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuToggle.classList.toggle("active");
  });

  nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.classList.remove("active");
    });

  });

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        revealObserver.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach(element => {
  revealObserver.observe(element);
});


/* =========================================================
   HERO TYPING EFFECT
========================================================= */

const heroTitle = document.querySelector(".hero h1");

if (heroTitle) {

  const originalHTML = heroTitle.innerHTML;

  heroTitle.style.opacity = "0";

  setTimeout(() => {

    heroTitle.style.opacity = "1";

    heroTitle.classList.add("typing-ready");

  }, 400);

}


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const header = document.getElementById("header");

function updateHeader() {

  if (!header) return;

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

}

window.addEventListener("scroll", updateHeader);

updateHeader();


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a");

function updateActiveNav() {

  let currentSection = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {

      currentSection = section.getAttribute("id");

    }

  });


  navLinks.forEach(link => {

    link.classList.remove("active");

    const href = link.getAttribute("href");

    if (href === `#${currentSection}`) {
      link.classList.add("active");
    }

  });

}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function (event) {

    const targetID = this.getAttribute("href");

    if (targetID === "#") return;

    const target = document.querySelector(targetID);

    if (!target) return;

    event.preventDefault();

    const headerHeight = header
      ? header.offsetHeight
      : 0;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });

  });

});


/* =========================================================
   IMAGE LIGHTBOX
========================================================= */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

const clickableImages = document.querySelectorAll(
  ".gallery-item img, .brand-visual img"
);


clickableImages.forEach(image => {

  image.addEventListener("click", () => {

    if (!lightbox || !lightboxImage) return;

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

  });

});


function closeLightbox() {

  if (!lightbox) return;

  lightbox.classList.remove("active");

  document.body.style.overflow = "";

}


if (lightboxClose) {

  lightboxClose.addEventListener(
    "click",
    closeLightbox
  );

}


if (lightbox) {

  lightbox.addEventListener("click", event => {

    if (event.target === lightbox) {
      closeLightbox();
    }

  });

}


/* =========================================================
   ESCAPE KEY FOR LIGHTBOX
========================================================= */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    closeLightbox();

  }

});


/* =========================================================
   HERO PARALLAX
========================================================= */

const heroBackground =
  document.querySelector(".hero-background");


window.addEventListener("scroll", () => {

  if (!heroBackground) return;

  const scrollPosition = window.scrollY;

  if (scrollPosition < window.innerHeight) {

    heroBackground.style.transform =
      `translateY(${scrollPosition * 0.15}px)`;

  }

});


/* =========================================================
   PROFILE 3D MOVEMENT
========================================================= */

const profileFrame =
  document.querySelector(".profile-frame");


if (
  profileFrame &&
  window.matchMedia("(min-width: 1001px)").matches
) {

  profileFrame.addEventListener("mousemove", event => {

    const rect =
      profileFrame.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX =
      ((y - centerY) / centerY) * -5;

    const rotateY =
      ((x - centerX) / centerX) * 5;

    profileFrame.style.transform =
      `perspective(700px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       scale(1.02)`;

  });


  profileFrame.addEventListener("mouseleave", () => {

    profileFrame.style.transform = "";

  });

}


/* =========================================================
   CARD HOVER EFFECT
========================================================= */

const cards = document.querySelectorAll(
  ".skill-card, .experience-card"
);


cards.forEach(card => {

  card.addEventListener("mousemove", event => {

    if (window.innerWidth < 1000) return;

    const rect = card.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX =
      ((y - centerY) / centerY) * -2;

    const rotateY =
      ((x - centerX) / centerX) * 2;

    card.style.transform =
      `perspective(800px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       translateY(-5px)`;

  });


  card.addEventListener("mouseleave", () => {

    card.style.transform = "";

  });

});


/* =========================================================
   PAGE LOAD
========================================================= */

window.addEventListener("load", () => {

  document.body.classList.remove("loading");

  document.body.classList.add("loaded");

});


/* =========================================================
   PREVENT VIDEO FROM AUTOPLAYING
========================================================= */

const videos = document.querySelectorAll("video");

videos.forEach(video => {

  video.removeAttribute("autoplay");

});


/* =========================================================
   CONSOLE
========================================================= */

console.log(
  "Michael Musahari Portfolio loaded successfully."
);

console.log(
  "Facebook:",
  "https://www.facebook.com/papercuts.bespokestationery"
);