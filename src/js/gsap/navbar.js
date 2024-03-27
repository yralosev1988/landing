import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Lenis from '@studio-freight/lenis';

window.addEventListener('load', () => {
  const showNavbarAnim = gsap.from('.navbar_wrapper', {
    yPercent: -100,
    paused: true,
    duration: 0.2,
  }).progress(1);

  ScrollTrigger.create({
    start: 'top top',
    end: 'max',
    onUpdate: (self) => {
      self.direction === -1 ? showNavbarAnim.play() : showNavbarAnim.reverse();
    },
  });
});
