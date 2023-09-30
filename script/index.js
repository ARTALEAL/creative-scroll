gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

console.log(ScrollTrigger.isTouch);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true,
  });

  gsap.fromTo(
    '.hero-section',
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'center',
        end: '900',
        scrub: true,
      },
    }
  );

  let itemsLeft = gsap.utils.toArray('.gallery__left-side .gallery__item');

  itemsLeft.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: -100, y: -200 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scrollTrigger: {
          trigger: item,
          start: '-850',
          end: '-100',
          scrub: true,
        },
      }
    );
  });

  let itemsRight = gsap.utils.toArray('.gallery__right-side .gallery__item');

  itemsRight.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: 100, y: 300 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scrollTrigger: {
          trigger: item,
          start: '-850',
          end: '-100',
          scrub: true,
        },
      }
    );
  });
}
