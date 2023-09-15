// gsap.from(".header", {duration:1, y:"-100%", ease:"bounce" });
// gsap.from("ul li", {duration:1, opacity:0, delay: 1, stagger:0.5});
// gsap.from(".right", { duration:1, delay:2, x:"-100vw", ease:"power2.in" })
// gsap.from(".left", { duration:1, delay:2.5, x:"-100%", });
// gsap.from(".footer", { duration:1, delay:3, y:"-100vw", ease:"elastic"});
// gsap.fromTo("button", { duration: 1, opacity:0, rotation:720, scale:0 }, {delay: 4, duration:1, opacity:1, scale:1, rotation:0 });

const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
    .from(".header", { y: "-100%", ease: "bounce" })
    .from("ul li", { opacity:0, stagger:0.5 } )
    .from(".right", { x:"-100vw", ease:"power2.in" })
    .from(".left", { x:"-100%", }, "< 0.5")
    .from(".footer", { y:"-100vw", ease:"elastic"})
    .fromTo("button", { opacity:0, rotation:720, scale:0 }, { opacity:1, scale:1, rotation:0 });


    const button = document.querySelector("button");

    button.addEventListener("click", () => {
        // for 3X faster
        timeline.timeScale(3)

        // For reverse
        timeline.reverse();
    })
