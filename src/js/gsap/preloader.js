import {gsap} from "gsap";

gsap.to('.loader_lottie', {
  rotation: 360,
  duration: 1.5,
  ease: 'none',
  repeat: -1,
})

window.addEventListener("load", () => {
  const loaderWrapper = document.querySelector(".loader")
  if (loaderWrapper) {
    const tl = gsap.timeline({duration: 0.5});
    tl.set(document.body, {overflow: "hidden", position: 'fixed'})
      .set(document.body, {overflow: "auto", position: ''})
    loaderWrapper.style.transition = "opacity 0.5s ease";
    loaderWrapper.style.opacity = "0";
    setTimeout(function () {
      loaderWrapper.style.display = "none";
    }, 500);
  }
})

