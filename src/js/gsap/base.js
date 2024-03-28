import { gsap } from 'gsap';
// import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';

gsap.registerPlugin(CSSRulePlugin);
gsap.registerPlugin(ScrollTrigger);

// const lenis = new Lenis({
//   lerp: 0,
//   easing: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
// });

// // lenis.on('scroll', (e) => {
// //   console.log(e);
// // });

// lenis.on('scroll', ScrollTrigger.update);

// gsap.ticker.add((time) => {
//   lenis.raf(time * 1000);
// });

// gsap.ticker.lagSmoothing(0);

// export default lenis;
