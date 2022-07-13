//prevent right click
document.addEventListener("contextmenu", event => event.preventDefault());

//bg canvas
VANTA.WAVES({
    el: ".bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x3a3ab3,
    waveSpeed: 0.50,
    zoom: 0.65
})

//links
document.getElementById("github").addEventListener("click", () => window.location.href = "https://github.com/DxxxxY")
document.getElementById("youtube").addEventListener("click", () => window.location.href = "https://www.youtube.com/channel/UCXLcxUX7GicuOisj8wZ8p2Q")
document.getElementById("discord").addEventListener("click", () => {
    navigator.clipboard.writeText("dxxxxy#0776")
    alert("Copied to clipboard")
})

//img automation
document.querySelectorAll("img").forEach(e => {
    e.src = `assets/logos/${e.id}.png`
    e.alt = e.id
    e.addEventListener("mouseover", () => e.style.filter = "invert(0)")
    e.addEventListener("mouseout", () => e.style.filter = "invert(1)")
})