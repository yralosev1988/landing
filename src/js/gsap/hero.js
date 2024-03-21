import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis'
window.addEventListener("load", () => {
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

  let mm = gsap.matchMedia();

  mm.add("(min-width: 991px)", () => {
    const deviceUp = gsap.fromTo('.home-header_phone-wrap', {
      y: 368
    },{
      y: 0
    });

    ScrollTrigger.create({
      trigger: '.home-header_app',
      animation: deviceUp,
      end: 'center+=50% center',
      scrub: true
    });

    const deviceScale = gsap.to('.home-header_phone-wrap', {
      scaleX: 6, scaleY: 6
    });

    ScrollTrigger.create({
      immediateRender: false,
      trigger: '.home-header_app',
      start: 'center center',
      end: 'center+=2720 center',
      animation: deviceScale,
      markers: true,
      scrub: true
    });

    /*const fadeOutApp = gsap.to('.home-header_app', {
      opacity: 0
    });

    ScrollTrigger.create({
      immediateRender: false,
      trigger: '.home-header_app',
      start: "center center",
      end: 'center+=100% center',
      animation: fadeOutApp,
      scrub: true
    });*/

    const fadeOutContent = gsap.to('.home-header_content', {
      opacity: 0
    });

    ScrollTrigger.create({
      immediateRender: false,
      trigger: app,
      start: "center center",
      end: 'center+=50% center',
      animation: fadeOutContent,
      scrub: true
    });
  });

  const section = document.querySelector('#scrollable-section-1')
  const title = document.querySelector('.home-header_phone-wrap')
  const app = document.querySelector('.home-header_app')

  /*let tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "center center",
      end: '+=2720',
      /!* .home-header_scroll-spacing {
       height: 170 rem; (2720px)
      }*!/
      scrub: 1
    }
  })
  tl.to(
    title,
    {y: 0}
  ).to(title, {scaleX: 6, scaleY: 6})*/





  const scrollLineAnim = gsap.timeline({ repeat: -1});
  scrollLineAnim.from('.home-header_scroll-line', { duration: 1, repeat: 1, translateY: `${-4}rem`, opacity: 0, yoyo: true })
    .to(".home-header_scroll-line", { duration: 2, translateY: `${10}rem`, opacity: 1 }, "<")

  const blurAnim = gsap.timeline({ repeat: -1 });
  blurAnim.from('.home-header_frame', { filter: "blur(0px)", })
    .to(".home-header_frame", { filter: "blur(3px)", delay: 3, duration: 1.5})


  console.clear();
  /* The encoding is super important here to enable frame-by-frame scrubbing. */

// ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4
// ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output_960.mp4

  const video = document.querySelector("video");
  let src = video.currentSrc || video.src;
  console.log(video, src);

  /* Make sure the video is 'activated' on iOS */
  function once(el, event, fn, opts) {
    let onceFn = function (e) {
      el.removeEventListener(event, onceFn);
      fn.apply(this, arguments);
    };
    el.addEventListener(event, onceFn, opts);
    return onceFn;
  }

  once(document.documentElement, "touchstart", function (e) {
    video.play();
    video.pause();
  });

  /* ---------------------------------- */
  /* Scroll Control! */

  let tlVideo = gsap.timeline({
    defaults: { duration: 4 },
    scrollTrigger: {
      immediateRender: false,
      trigger: ".home-header_app",
      start: "center center",
      end: "center+=2720 center",
      scrub: true
    }
  });

  console.log('downloaded')
  tlVideo.fromTo(
    video,
    {
      currentTime: 0
    },
    {
      currentTime: video.duration || 1
    }
  );

  /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
  /*setTimeout(function () {
    if (window["fetch"]) {
      fetch(src)
        .then((response) => response.blob())
        .then((response) => {
          let blobURL = URL.createObjectURL(response);

          let t = video.currentTime;
          once(document.documentElement, "touchstart", function (e) {
            video.play();
            video.pause();
          });

          video.setAttribute("src", blobURL);
          video.currentTime = t + 0.01;
        });
    }
  }, 1000);*/

  /* ---------------------------------- */
  /*const videoAnim = gsap.to('.home-header_video video');

  ScrollTrigger.create({
    trigger: '#scrollable-section-1',
    start: "top top",
    /!* .home-header_scroll-spacing {
     height: 170 rem; (2720px)
    }*!/

    end: "bottom bottom",
    animation: videoAnim,
    scrub: true
  });*/
})







