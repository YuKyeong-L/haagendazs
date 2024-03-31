const bubbleItems = document.querySelectorAll(".bubble__wrap .bubble");

bubbleItems.forEach(bubble => {
    gsap.to(bubble,{
        scale:1,
        opacity:1,
        scrollTrigger:{
            trigger:bubble,
            start:"80% 80%",
            end:"100% 100%",
            scrub:1,
        },
    });
});

gsap.to(".best-menu__box.box-1",{
    y:-300,
    opacity:1,
    scrollTrigger:{
        trigger:".best-menu__box.box-1",
        start:"0% 100%", //앞: 트리거기준 시작, 뒤: 윈도우 창 기준 시작
        end:"100% 100%",
        scrub:1,
    },
});
gsap.to(".best-menu__box.box-2",{
    y:-300,
    opacity:1,
    scrollTrigger:{
        trigger:".best-menu__box.box-2",
        start:"0% 100%",
        end:"100% 100%",
        scrub:1,
    },
});
gsap.to(".best-menu__box.box-3",{
    y:-300,
    opacity:1,
    scrollTrigger:{
        trigger:".best-menu__box.box-3",
        start:"0% 100%",
        end:"100% 100%",
        scrub:1,
    },
});

const valueItems = document.querySelectorAll(".value-item__wrap");

valueItems.forEach(valueItem => {
    gsap.to(valueItem,{
        scrollTrigger:{
            trigger:valueItem,
            start:"top top",
            pin:true,
            pinSpacing:false,
        },
    });
});

gsap.to(".ingredient__list",{
    xPercent:-50,
    ease:"none",
    scrollTrigger:{
        trigger:".ingredient__section",
        start:"0% 0%",
        end:"+=150%",
        pin:".ingredient__section",
        scrub:1,
        // markers: true,
    },
});