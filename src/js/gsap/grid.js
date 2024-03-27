import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {CSSRulePlugin} from "gsap/CSSRulePlugin";
import Lenis from '@studio-freight/lenis'

window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(CSSRulePlugin)
  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

  let mm = gsap.matchMedia();

  mm.add("(min-width: 991px)", () => {


    let tl = gsap.timeline({
      scrollTrigger: {
        immediateRender: false,
        trigger: '.section_home-grid',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      }
    })


    tl.to('.grid-first', {
      y: 0
    })

  });

})
