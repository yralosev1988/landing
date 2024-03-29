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
    }, 'transition-down').to('.grid-second', {
      y: 0,
    }, 'transition-down').to('.grid-third', {
      y: 0,
    }, 'transition-down').to('.grid-first_top', {
      height: '60%',
    }, 'change-height').to('.grid-first_bottom', {
      height: '40%', display: 'flex'
    }, 'change-height').to('.grid-first', {
      gap: '40px'
    }, 'change-height').to('.grid-first_bottom', {
      y: 0
    }, 'change-height').to('.grid-third_bottom', {
      height: '60%',
    }, 'change-height').to('.grid-third_top', {
      height: '40%', display: 'flex'
    }, 'change-height').to('.grid-third', {
      gap: '40px'
    }, 'change-height').to('.grid-third_top', {
      y: 0
    }, 'change-height').to('.grid-first', {
      x: '-500px'
    }, 'translate-x').to('.grid-second', {
      x: '-500px'
    }, 'translate-x').to('.grid-first', {
      width: 0
    }, 'translate-x').to('.grid-second', {
      width: 0
    }, 'translate-x').to('.grid-first', {
      marginRight: 0
    }, 'translate-x').to('.grid-second', {
      marginRight: 0
    }, 'translate-x').to('.grid-third', {
       width: '100%'
    }, 'translate-x');
  });
});
