//particle.js
particlesJS.load("particles-js", "assets/particles.json", () => console.log("particle.js config succesfully loaded"))

//links
document.addEventListener("contextmenu", event => event.preventDefault());
document.getElementById("github").addEventListener("click", () => window.location.href = "https://github.com/DxxxxY")
document.getElementById("youtube").addEventListener("click", () => window.location.href = "https://www.youtube.com/channel/UCXLcxUX7GicuOisj8wZ8p2Q")
document.getElementById("discord").addEventListener("click", () => alert("dxxxxy#0776"))
document.getElementById("website").addEventListener("click", () => window.location.href = "https://dreamysoft.net")

//img automation
document.querySelectorAll("img").forEach(e => {
    e.src = `assets/logos/${e.id}.png`
    e.alt = e.id
    e.addEventListener("mouseover", () => e.style.filter = "invert(1)")
    e.addEventListener("mouseout", () => e.style.filter = "invert(0)")
})