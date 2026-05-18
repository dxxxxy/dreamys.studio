//prevent right click
document.addEventListener("contextmenu", event => event.preventDefault())

//img automation
document.querySelectorAll("img").forEach(e => {
    e.src = `assets/logos/${e.id}.png`
    e.alt = e.id
    e.addEventListener("mouseover", () => e.style.filter = "invert(0)")
    e.addEventListener("mouseout", () => e.style.filter = "invert(1)")
})

//particles
particlesJS.load("particles", "assets/particles.json", () => console.log("particles loaded"))

//helpers
const animate = (el, i) => {
    setTimeout(() => {
        el.style.transition = "transform 1s cubic-bezier(0,1,0,1), opacity 1s ease-in-out"
        el.style.transform = "translateY(0)"
        el.style.opacity = "1"
    }, 250 * i)
}

const reset = (el) => {
    el.style.transition = "none"
    el.style.transform = "translateY(-100vh)"
    el.style.opacity = "0"
}

//fullpage
new fullpage("#fullpage", {
    navigation: true,
    navigationPosition: "left",
    licenseKey: "",
    navigationTooltips: [
        "Home",
        "Subdomain Navigation",
    ],
    slidesNavigation: true,
    scrollingSpeed: "750",
    scrollOverflow: false,
    controlArrows: true,
    rtl: false,

    afterRender: () => {
        let i = 0

        //perform first animation
        document.querySelectorAll(".fp-section.active .anim").forEach(el => {
            reset(el)
            animate(el, i)
            i++
        })
    },

    onLeave: (origin, destination, direction) => {
        //prepare for next animation
        destination.item.querySelectorAll(".anim").forEach(el => reset(el))
    },

    afterLoad: (origin, destination, direction) => {
        let i = 0

        //perform next animation
        destination.item.querySelectorAll(".anim").forEach(el => {
            animate(el, i)

            i++
        })
    }
})

