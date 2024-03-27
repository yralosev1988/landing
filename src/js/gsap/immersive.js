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
        trigger: '.section_home-immersive',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      }
    })

    let rule = CSSRulePlugin.getRule(".home-immersive_sticky::before");

    tl.to('.section-tag', {
      opacity: 0, height: 0, marginBottom: 0
    }).to('.section-tag', {
      display: "block"
      /*display: 'none'*/
    }).to(rule, {cssRule: {opacity: 0}
    }).to('.home-immersive_video', {
      display: 'block',
    }, "scene1")
      .to('.home-immersive_head .section-title', {
        className:"section-title active"
    }, "scene1")
      .to('.section-title', {
        scaleX: 5, scaleY: 5, opacity: 0
      })
      .to('.immersive-frame', {
        borderWidth: 10
      })

  });

})
