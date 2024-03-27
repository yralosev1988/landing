import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

window.addEventListener('load', () => {
  const mm = gsap.matchMedia();

  mm.add('(min-width: 991px)', () => {
    const video = document.querySelector('video');
    // video.currentTime = 3.833333
    // let src = video.currentSrc || video.src;

    /* Make sure the video is 'activated' on iOS */
    function once(el, event, fn, opts) {
      const onceFn = function () {
        el.removeEventListener(event, onceFn);
        // eslint-disable-next-line prefer-rest-params
        fn.apply(this, arguments);
      };
      el.addEventListener(event, onceFn, opts);
      return onceFn;
    }

    once(document.documentElement, 'touchstart', function (e) {
      video.play();
      video.pause();
    });

    const videoBox = video.getBoundingClientRect();

    const tl = gsap.timeline({
      scrollTrigger: {
        immediateRender: false,
        trigger: '.home-header_scroll-spacing',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    const animationVars = {
      time: 0,
    };

    tl.to('.home-header_phone-wrap', {
      y: window.innerHeight / 2 - (videoBox.top + videoBox.height / 2),
    })
      .addLabel('video-centered')
      .fromTo(
        animationVars,
        {
          currentTime: 0,
        },
        {
          currentTime: video.duration || 1,
          onUpdate: () => {
            video.currentTime = animationVars.time;
          },
        },
        'video-centered',
      )
      .fromTo(
        '.home-header_phone-wrap',
        {
          scale: 0.25,
        },
        {
          scale: 1,
        },
        'video-centered',
      )
      .to('.home-header_app', {
        opacity: 0,
      })
      .to('.home-header_border', {
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        duration: 0.1,
      });

    // const section = document.querySelector('#scrollable-section-1');
    // const title = document.querySelector('.home-header_phone-wrap');
    const app = document.querySelector('.home-header_app');

    const fadeOutContent = gsap.to('.home-header_content', {
      opacity: 0,
    });

    ScrollTrigger.create({
      immediateRender: false,
      trigger: app,
      start: 'center center',
      end: 'center+=50% center',
      animation: fadeOutContent,
      scrub: true,
    });

    const scrollLineAnim = gsap.timeline({ repeat: -1 });
    scrollLineAnim
      .from('.home-header_scroll-line', {
        duration: 1, repeat: 1, translateY: `${-4}rem`, opacity: 0, yoyo: true,
      })
      .to('.home-header_scroll-line', { duration: 2, translateY: `${10}rem`, opacity: 1 }, '<');

    const blurAnim = gsap.timeline({ repeat: -1 });
    blurAnim
      .from('.home-header_frame', { filter: 'blur(0px)' })
      .to('.home-header_frame', { filter: 'blur(3px)', delay: 3, duration: 1.5 });

    /* The encoding is super important here to enable frame-by-frame scrubbing. */

    // ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4
    // ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output_960.mp4

    /* ---------------------------------- */
    /* Scroll Control! */

    // let tlVideo = gsap.timeline({
    //   /*defaults: { duration: 4 },*/
    //   scrollTrigger: {
    //     immediateRender: false,
    //     trigger: '.home-header_scroll-spacing',
    //     start: 'top center',
    //     end: 'bottom center',
    //     scrub: true,
    //   },
    // });

    // tlVideo.fromTo(
    //   video,
    //   {
    //     currentTime: 0,
    //   },
    //   {
    //     currentTime: video.duration || 1,
    //   }
    // );

    /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
    /* setTimeout(function () {
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
    }, 1000); */

    /* ---------------------------------- */
    /* const videoAnim = gsap.to('.home-header_video video');

    ScrollTrigger.create({
      trigger: '#scrollable-section-1',
      start: "top top",
      /!* .home-header_scroll-spacing {
       height: 170 rem; (2720px)
      }*!/

      end: "bottom bottom",
      animation: videoAnim,
      scrub: true
    }); */
  });
});
