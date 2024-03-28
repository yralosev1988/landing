import { gsap } from 'gsap';

window.addEventListener('load', () => {
  const mm = gsap.matchMedia();

  mm.add('(min-width: 991px)', () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        immediateRender: false,
        trigger: '.section_home-grid',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    tl.to('.grid-first', {
      y: 0,
    });
  });
});
