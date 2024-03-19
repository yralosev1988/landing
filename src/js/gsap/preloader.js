import {gsap} from "gsap";
import Lenis from "@studio-freight/lenis";
import {ScrollTrigger} from "gsap/ScrollTrigger";
window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

  gsap.to('.loader_lottie', {
    rotation: 360,
    duration: 1.5,
    ease: 'none',
    repeat: -1,
  })
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

