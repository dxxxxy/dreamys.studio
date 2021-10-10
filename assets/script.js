particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

document.addEventListener('contextmenu', event => event.preventDefault());

document.getElementById("github").addEventListener("click", e => {
    window.location.href = "https://github.com/DxxxxY"
})

document.getElementById("youtube").addEventListener("click", e => {
    window.location.href = "https://www.youtube.com/channel/UCXLcxUX7GicuOisj8wZ8p2Q"
})

document.getElementById("discord").addEventListener("click", e => {
    alert("dxxxxy#5818")
})

document.getElementById("website").addEventListener("click", e => {
    window.location.href = "https://dreamysoft.net"
})