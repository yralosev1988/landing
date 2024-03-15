import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis'

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

const section = document.querySelector('#scrollable-section-1')
const title = document.querySelector('.home-header_phone-wrap')
const app = document.querySelector('.home-header_app')

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: section,
    start: "top top",
    /* .home-header_scroll-spacing {
     height: 170 rem; (2720px)
    }*/
    end: "bottom+=2720 bottom",
    scrub: 1
  }
})
tl.to(
  title,
  {y: 0}
).to(title, {scaleX: 6, scaleY: 6})

const showAnim3 = gsap.to('.home-header_app', {
  opacity: 0
});

ScrollTrigger.create({
  trigger: app,
  start: "top+=1054 top",
  /* .home-header_scroll-spacing {
   height: 170 rem; (2720px)
  }*/

  end: "bottom+=1800 bottom",
  animation: showAnim3,
  scrub: 0.5
});
const showAnim4 = gsap.to('.home-header_content', {
  opacity: 0
});

ScrollTrigger.create({
  trigger: app,
  start: "center+=560 top",
  /* .home-header_scroll-spacing {
   height: 170 rem; (2720px)
  }*/
  markers: true,
  end: "bottom+=1500 bottom",
  animation: showAnim4,
  scrub: 0.5
});

ScrollTrigger.create({
  trigger: app,
  start: "center+=560 top",
  /* .home-header_scroll-spacing {
   height: 170 rem; (2720px)
  }*/
  markers: true,
  end: "bottom+=1500 bottom",
  animation: showAnim4,
  scrub: 0.5
});






