import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis'
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
  const showNavbarAnim = gsap.from('.navbar_wrapper', {
    yPercent: -100,
    paused: true,
    duration: 0.2
  }).progress(1);

  ScrollTrigger.create({
    start: "top top",
    end: "max",
    onUpdate: (self) => {
      self.direction === -1 ? showNavbarAnim.play() : showNavbarAnim.reverse()
    }
  });
})




