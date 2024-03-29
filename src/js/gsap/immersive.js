import { gsap } from 'gsap';
 import { CSSRulePlugin } from 'gsap/CSSRulePlugin';

window.addEventListener('load', () => {
  const mm = gsap.matchMedia();

  mm.add('(min-width: 991px)', () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        immediateRender: false,
        trigger: '.section_home-immersive',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

     const rule = CSSRulePlugin.getRule('.home-immersive_sticky::before');

    tl.to('.section-tag', {
      opacity: 0, height: 0, marginBottom: 0,
    }).to('.section-tag', {
      display: 'block',
      /* display: 'none' */
    }).to(rule, { cssRule: { opacity: 0 } }).to('.home-immersive_video', {
       display: 'block',
     }, 'scene1')
      .to('.home-immersive_head .section-title', {
        className: 'section-title active',
      }, 'scene1')
      .to('.section-title', {
        scaleX: 5, scaleY: 5, opacity: 0,
      }).to('.home-immersive_frame', {
       borderWidth: 10,
     });
  });
});
