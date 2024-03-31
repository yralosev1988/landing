import { gsap } from 'gsap';
import throttle from 'lodash/throttle';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo';

window.addEventListener('load', () => {
  const mm = gsap.matchMedia();

  mm.add('(min-width: 991px)', () => {
    const videoContainer = document.querySelector('.home-header_video');

    // eslint-disable-next-line no-new
    const video = new ScrollyVideo({
      scrollyVideoContainer: videoContainer,
      src: videoContainer.dataset.src,
      trackScroll: false,
    });

    const videoWrapperEl = document.querySelector('.home-header_phone-wrap');

    const tl = gsap.timeline({
      scrollTrigger: {
        immediateRender: false,
        trigger: '.home-header_scroll-spacing',
        start: () => `start-=${videoWrapperEl.offsetHeight + window.innerHeight / 2} center`,
        end: () => 'bottom bottom',
        scrub: true,
      },
    });

    const scaleX = window.innerWidth / videoWrapperEl.offsetWidth;
    const scaleY = window.innerHeight / videoWrapperEl.offsetHeight;

    const animationVars = {
      currentTime: 0,
    };

    const updateVideo = throttle((time) => {
      video.setTargetTimePercent(time);
    }, 100 / 3);

    video.video.addEventListener('loadedmetadata', () => {
      tl.fromTo(
        animationVars,
        {
          currentTime: 0,
        },
        {
          currentTime: video.video.duration,
          ease: 'none',
          onUpdate: () => {
            updateVideo(animationVars.currentTime / video.video.duration);
          },
        },
        'video-centered',
      );
    });

    tl.addLabel('video-centered')
      .fromTo(
        '.home-header_phone-wrap',
        {
          scale: 1,
        },
        {
          scale: (scaleX > scaleY ? scaleX : scaleY) * 1.05,
          ease: 'power1.in',
          duration: 0.4,
        },
        'video-centered',
      )
      .to(
        '.home-header_texts',
        {
          opacity: 0,
          duration: 0.25,
        },
        'video-centered+=0.02',
      )
      .to(
        '.home-header_border',
        {
          scale: 1,
          duration: 0.1,
        },
      );

    // const section = document.querySelector('#scrollable-section-1');
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

    // const scrollLineAnim = gsap.timeline({ repeat: -1 });
    // scrollLineAnim
    //   .from('.home-header_scroll-line', {
    //     duration: 1, repeat: 1, translateY: `${-4}rem`, opacity: 0, yoyo: true,
    //   })
    //   .to('.home-header_scroll-line', { duration: 2, translateY: `${10}rem`, opacity: 1 }, '<');

    // const blurAnim = gsap.timeline({ repeat: -1 });
    // blurAnim
    //   .from('.home-header_frame', { filter: 'blur(0px)' })
    //   .to('.home-header_frame', { filter: 'blur(3px)', delay: 3, duration: 1.5 });

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
