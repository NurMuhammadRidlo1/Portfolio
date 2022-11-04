//Todo: Animasi pada navbar
const burger = document.querySelector(".hamburger");
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  if (burger.classList.contains("active")) {
    gsap.to(".links", { x: "100%", opacity: 1 });
    gsap.to(".hamburger span", { background: "white" });
  } else {
    gsap.to(".links", { x: "0%", opacity: 1 });
    gsap.to(".hamburger span", { background: "black" });
    gsap.fromTo(
      ".links a",
      { opacity: 0, y: 0 },
      { opacity: 1, y: 20, delay: 0.4, stagger: 0.25 }
    );
    gsap.set("body", { overflow: "hidden" });
  }
});

// Scrool animation
function smoothScroll(target, duration) {
  target = document.querySelector(target);
  let targetPosition = target.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }
  function ease(t, b, c, d) {
    return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
  }
  requestAnimationFrame(animation);
}

let buttonSection1 = document.querySelector(".button");
buttonSection1.addEventListener("click", function () {
  smoothScroll(".work-section", 1000);
});
