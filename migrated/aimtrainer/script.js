function hide(id) {
    document.getElementById(id).style.display = "none"
    return
}

function show(id) {
    document.getElementById(id).style.display = "block"
    return
}

function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min))
}

document.getElementById("log1").addEventListener("focusout", () => {
    if (!document.getElementById("log1").value) return
    document.getElementById("log1").style.transition = "ease 0.25s"
    document.getElementById("log1").style.borderColor = "#73AD21"
})

document.getElementById("log2").addEventListener("focusout", () => {
    if (!document.getElementById("log2").value) return
    document.getElementById("log2").style.transition = "ease 0.25s"
    document.getElementById("log2").style.borderColor = "#73AD21"
})

function login() {
    if (!document.getElementById("log1").value) {
        document.getElementById("log1").style.transition = "ease 0.25s"
        document.getElementById("log1").style.borderColor = "red"
    }
    if (!document.getElementById("log2").value) {
        document.getElementById("log2").style.transition = "ease 0.25s"
        document.getElementById("log2").style.borderColor = "red"
    }
    if (!document.getElementById("log1").value || !document.getElementById("log2").value) return
    hide("login")
    show("modes")
}

function express() {
    hide("modes")
    show("express")
    show("stats")

    var progress = 0,
        generated = 0,
        hits = 0
    setTimeout(() => {
        clearInterval(popup)
        clearInterval(progressBar)
        clearInterval(updateStats)
    }, 48000)
    var updateStats = setInterval(() => {
        document.getElementById("hits").innerHTML = `${hits} / ${generated}`
        document.getElementById("accuracy").innerHTML = `${hits / generated * 100}%`
    }, 100)
    var popup = setInterval(() => {
        var newdiv = document.createElement("div")
        newdiv.id = "hitme"
        document.getElementById("express").appendChild(newdiv)
        newdiv.style.position = "absolute"
        newdiv.style.left = generateRandomInteger(0, 90) + "vw"
        newdiv.style.top = generateRandomInteger(0, 75) + "vh"
        newdiv.style.cursor = "pointer"
        generated++
        newdiv.addEventListener("click", () => {
            hits++
            var shockwave = document.createElement("div")
            shockwave.id = "shockwave"
            document.getElementById("express").appendChild(shockwave)
            shockwave.style.position = "absolute"
            shockwave.style.left = newdiv.style.left
            shockwave.style.top = newdiv.style.top
            shockwave.style.animation = "pulse-bomb 1s 0s ease infinite"
            newdiv.remove()
            setTimeout(() => {
                shockwave.remove()
            }, 1000)
        })
        setTimeout(() => {
            newdiv.style.opacity = "0"
            newdiv.style.transition = "ease 0.5s"
            newdiv.style.backgroundColor = "red"
            setTimeout(() => {
                newdiv.style.display = "none"
            }, 500)
        }, 1000)
    }, 500)
    var progressBar = setInterval(() => {
        progress += 0.10
        document.getElementById("progressbar").style.width = progress + "vw"
    }, 50)
}

function custom() {
    // Implement Custom
}
