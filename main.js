
  gsap.to(".img5", {
    opacity: 1,
    x: -150,
    scrollTrigger: {
      trigger: ".img5",
      start: "top bottom", // Adjusted start value
      end: "bootom top", // Adjusted end value
      scrub: true,
      onLeave: () => gsap.to(".img5", { opacity: 0 }),
    },
  });

gsap.to(".img6", {
    opacity: 1,
    x: 150,
    scrollTrigger: {
      trigger: ".img6",
      start: "top bottom", // Adjusted start value
      end: "bootom top", // Adjusted end value
      scrub: true,
      onLeave: () => gsap.to(".img6", { opacity: 0 }),
    },
  });


gsap.to(".img7", {
    opacity: 1,
    x: -150,
    scrollTrigger: {
      trigger: ".img7",
      start: "top bottom", // Adjusted start value
      end: "bootom top", // Adjusted end value
      scrub: true,
      onLeave: () => gsap.to(".img7", { opacity: 0 }),
    },
  });


gsap.to(".img8", {
    opacity: 1,
    x: 150,
    scrollTrigger: {
      trigger: ".img8",
      start: "top bottom", // Adjusted start value
      end: "bootom top", // Adjusted end value
      scrub: true,
      onLeave: () => gsap.to(".img8", { opacity: 0 }),
    },
  });


gsap.to(".img9", {
    opacity: 1,
    x: -150,
    scrollTrigger: {
      trigger: ".img9",
      start: "top bottom", // Adjusted start value
      end: "bootom top", // Adjusted end value
      scrub: true,
      onLeave: () => gsap.to(".img9", { opacity: 0 }),
    },
  });


gsap.to(".img10", {
    opacity: 1,
    x: 150,
    scrollTrigger: {
      trigger: ".img10",
      start: "top bottom", // Adjusted start value
      end: "bootom top", // Adjusted end value
      scrub: true,
      onLeave: () => gsap.to(".img10", { opacity: 0 }),
    },
  });

document.querySelector('.menu-btn').addEventListener('click', function () {
  document.body.classList.toggle('menu-open');
});
