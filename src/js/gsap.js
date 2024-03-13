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
  { y: 0 }
)
  .to(title, { scaleX: 6, scaleY: 6 })
/* navigation show-hide GSAP  */
const showAnim = gsap.from('.navbar_wrapper', {
  yPercent: -100,
  paused: true,
  duration: 0.2
}).progress(1);

ScrollTrigger.create({
  start: "top top",
  end: "max",
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse()
  }
});
/* navigation show-hide GSAP  */
const showAnim3 = gsap.to('.home-header_app', {
  opacity: 0
});

ScrollTrigger.create({
  trigger: app,
  start: "top+=1054 top",
  /* .home-header_scroll-spacing {
   height: 170 rem; (2720px)
  }*/
  markers: true,
  end: "bottom+=1800 bottom",
  animation: showAnim3,
  scrub: 0.5
});

document.addEventListener('click', ()=>{
  console.log(window.pageYOffset + app.getBoundingClientRect().top)
})

