function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
locoScroll();

// @ ============================ headerAnimation ============================ //
function navbarAnimation() {
  gsap.to("#logo img", {
  // Create a MediaQueryList object
    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: "#heroSection",
      scroller: "main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });
  gsap.to("nav #links", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#heroSection",
      scroller: "main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });
}

Shery.makeMagnet("nav #icons" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
navbarAnimation()

// @ ============================ headingAnimation ============================ //
function headingAnimation() {
    let tl = gsap.timeline();
    tl.from("#heroSection>h1",{
        y:100,
        opacity: 0,
        delay: 0.5,
        duration: .8,
        stagger: 0.3
    }),
    tl.from("#heroSection #imgContainer",{
        y: 100,
        opacity: 0,
        duration: .8,
    })
}
headingAnimation()
// @ ============================ cursor ============================ //
function cursor() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      x: dets.x,
      y: dets.y,
    });
  });

  document.querySelectorAll(".child").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(1)",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  });
}
cursor();