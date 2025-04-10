// Scroll Animations

window.sr = ScrollReveal({
  reset: true,
});

sr.reveal(".general-animation", {
  origin: "bottom",
  distance: "-50px",
  interval: 100,
  duration: 2000,
});
sr.reveal(".general2-animation", {
  origin: "top",
  distance: "-100px",
});

// Hero Animation
sr.reveal(".right-animation", {
  origin: "right",
  distance: "-100px",
  duration: 3000,
});

sr.reveal(".left-animation", {
  origin: "left",
  distance: "-200px",
  duration: 3000,
});

// Productos
sr.reveal(".products-card-animation .card-animation", {
  origin: "top",
  distance: "50px",
  duration: 3000,
});

// Galery
sr.reveal(".galery-animation .galery-img-animation", {
  origin: "top",
  distance: "100px",
  scale: "0.85",
  interval: 200,
});

// Testimonials
sr.reveal(".testimonials-card-animation .testimonials-card-animation", {
  origin: "top",
  distance: "100px",
  interval: 500,
});

sr.reveal(".testimonials-animation .testimonilas-img-rotate-animation", {
  origin: "top",
  distance: "100px",
  delay: 200,
  rotate: {
    x: 1,
    y: 180,
  },
});
