import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Lenis from '@studio-freight/lenis';

window.addEventListener('load', () => {
  const showNavbarAnim = gsap.to('.navbar_wrapper', {
    yPercent: -100,
    paused: true,
    duration: 0.25,
  });

  ScrollTrigger.create({
    immediateRender: false,
    start: 'top top',
    end: 'max',
    onUpdate: (self) => {
      window.scrollY > 20 && self.direction === 1 ? showNavbarAnim.play() : showNavbarAnim.reverse();
    },
  });
});
