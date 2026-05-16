//prevent right click
document.addEventListener("contextmenu", event => event.preventDefault());

//on load
document.addEventListener("DOMContentLoaded", (e) => {

    let i = 0
    document.querySelectorAll(".anim").forEach((el) => {
        el.style.transform = "translateY(-100vh)"
        el.style.opacity = "0"

        setTimeout(() => {
            el.style.transition = "transform 1s cubic-bezier(0,1,0,1), opacity 1s ease-in-out"
            el.style.transform = "translateY(0)"
            el.style.opacity = "1"
        }, 500 * i)
        i++
    })
});

//bg canvas
particlesJS.load("particles", "assets/particles.json", () => console.log("particles loaded"));

//img automation
document.querySelectorAll("img").forEach(e => {
    e.src = `assets/logos/${e.id}.png`
    e.alt = e.id
    e.addEventListener("mouseover", () => e.style.filter = "invert(0)")
    e.addEventListener("mouseout", () => e.style.filter = "invert(1)")
})

new fullpage("#fullpage", {
    anchors: [
        "home",
        "footer"
    ],
    navigation: true,
    navigationPosition: "left",
    navigationTooltips: [
        "Home",
        "Footer"
    ],
    slidesNavigation: true,
    scrollingSpeed: "1000",
    fitToSectionDelay: "600",
    scrollOverflow: false,
    controlArrows: true,
    lazyLoading: true,
    rtl: false
});