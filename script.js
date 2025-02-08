function locomotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
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
  tl.from("#nav",{
    opacity : 0
  })
  tl.from("#hero1",{
    opacity:0
  })
  tl.from(".hero h2",{
    y : 100,
    stagger : 0.25
  })
}
function mouseCorserAnimation(){
  document.addEventListener("mousemove", function(dets){
    
    gsap.to("#crsr" ,{
      left : dets.x,
      top: dets.y
    })
  })
  
  Shery.makeMagnet("#navPart2 a");
}
function sheryAnimation(){
  Shery.imageEffect(".imageContainer",{
    style:5,
    config : {"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.5932134734841199},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4.42,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.4,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.61,"range":[0,10]},"metaball":{"value":0.35,"range":[0,2]},"discard_threshold":{"value":0.49,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.31,"range":[0,2]},"noise_scale":{"value":16.03,"range":[0,100]}},
    gooey: true
  }) 


  
}
function flagAnimation (){
  document.addEventListener("mousemove", function(dets){
    gsap.to("#flag",{
      x: dets.x,
      y:dets.y
    })
  })
  
  document.querySelector("#hero3").addEventListener("mouseenter",function(){
    gsap.to("#flag",{
      opacity :1
    })
  })
  document.querySelector("#hero3").addEventListener("mouseleave",function(){
    gsap.to("#flag",{
      opacity :0
    })
  })
}
loaderAnimation()
mouseCorserAnimation()
locomotiveAnimation()
sheryAnimation()
flagAnimation()

