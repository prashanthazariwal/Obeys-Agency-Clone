function loaderAnimation() {
  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.2,
  });
  tl.from("#line-part1 ,#line-part2", {
    opacity: 0,
    delay: 0.2,
    onStart: function () {
      const h4 = document.querySelector("#line-part1 h4");
      let grow = 0;
      setInterval(() => {
        if (grow < 100) {
          h4.innerHTML = grow++;
        } else {
          h4.innerHTML = 100;
        }
      }, 30);
    },
  });
  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 2.8,
  });
  tl.from("#page1", {
    y: 1200,
    opacity: 0,
    duration: 0.4,
  });
  tl.to("#loader", {
    display: "none",
  });
}
loaderAnimation()