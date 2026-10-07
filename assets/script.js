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

//github stats
const createLine = (html, cls = "subtitle anim") => {
    const p = document.createElement("p")
    p.className = cls
    p.innerHTML = html
    return p
}

document.querySelectorAll("[data-github]").forEach(async column => {
    const path = column.dataset.github
    const name = path.split("/")[1]
    const link = `<a href="https://github.com/${name}" target="_blank">${name}</a>`
    let lines

    try {
        const res = await fetch(`https://api.github.com/${path}/repos?per_page=100`)
        if (!res.ok) throw new Error(res.status)

        const repos = (await res.json()).filter(r => !r.fork && r.name !== ".github")
        const stars = repos.reduce((sum, r) => sum + r.stargazers_count, 0)
        const forks = repos.reduce((sum, r) => sum + r.forks_count, 0)
        const top = repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6)

        lines = [
            createLine(`${link} - ${stars} stars, ${forks} forks`),
            document.createElement("br"),
            ...top.map(r => createLine(`<a href="${r.html_url}" target="_blank">${r.name.toLowerCase()}</a> - ${r.stargazers_count} stars, ${r.forks_count} forks`))
        ]
    } catch {
        lines = [createLine(`${link} - stats unavailable`)]
    }

    column.append(...lines)

    //animate if the section is already in view
    if (column.closest(".fp-section.active")) {
        column.querySelectorAll(".anim").forEach((el, i) => {
            reset(el)
            requestAnimationFrame(() => animate(el, i))
        })
    }
})

//fullpage
new fullpage("#fullpage", {
    navigation: true,
    navigationPosition: "left",
    licenseKey: "",
    navigationTooltips: [
        "Home",
        "Open-source Projects",
        "Experience",
        "Education",
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

