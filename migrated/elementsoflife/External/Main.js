var fireRadio = document.getElementById("fireRadio")
var waterRadio = document.getElementById("waterRadio")
var leafRadio = document.getElementById("leafRadio")

var fireGif = document.getElementById("fireGif")
var waterGif = document.getElementById("waterGif")
var leafGif = document.getElementById("leafGif")

var fireGif2 = document.getElementById("fireGif2")
var waterGif2 = document.getElementById("waterGif2")
var leafGif2 = document.getElementById("leafGif2")

var humanChoice

fireGif.style.display = "none"
waterGif.style.display = "none"
leafGif.style.display = "none"

fireGif2.style.display = "none"
waterGif2.style.display = "none"
leafGif2.style.display = "none"

var humanText = document.getElementById("humanText")
var robotText = document.getElementById("robotText")

var humanLifeHTML = document.getElementById("humanLife")
var robotLifeHTML = document.getElementById("robotLife")

var humanLife = 3
var robotLife = 3

humanLifeHTML.innerHTML = humanLife
robotLifeHTML.innerHTML = robotLife

var mainArea = document.getElementById("mainArea")
var fightButton = document.getElementById("fight")

var correct = new Audio();
correct.src = "Resources/Correct.mp3";
var wrong = new Audio();
wrong.src = "Resources/Wrong.mp3";
var warning = new Audio();
warning.src = "Resources/Warning.mp3";

function showElementSlide() {
    document.getElementById("mainChoice").className = "mainChoiceSlide"
    if (fireRadio.checked == true) { //If choice is Fire
        humanText.innerHTML = " "
        robotText.innerHTML = " "
        fireGif.style.display = "block"
        waterGif.style.display = "none"
        leafGif.style.display = "none"
        fireGif2.style.display = "none"
        waterGif2.style.display = "none"
        leafGif2.style.display = "none"
        humanChoice = 1
    }
    if (waterRadio.checked == true) { //If choice is Water
        humanText.innerHTML = " "
        robotText.innerHTML = " "
        waterGif.style.display = "block"
        fireGif.style.display = "none"
        leafGif.style.display = "none"
        fireGif2.style.display = "none"
        waterGif2.style.display = "none"
        leafGif2.style.display = "none"
        humanChoice = 2
    }
    if (leafRadio.checked == true) { //If choice is Leaf
        humanText.innerHTML = " "
        robotText.innerHTML = " "
        leafGif.style.display = "block"
        fireGif.style.display = "none"
        waterGif.style.display = "none"
        fireGif2.style.display = "none"
        waterGif2.style.display = "none"
        leafGif2.style.display = "none"
        humanChoice = 3
    }
}
var rev = "fwd"

//Copied from a site I forgot
function titlebar(val) {
    var msg = "Elements of Life"
    var res = " "
    var speed = 50
    var pos = val
    msg = "   🔥💧🍂|-" + msg + "-|🍂💧🔥"
    var le = msg.length
    if (rev == "fwd") {
        if (pos < le) {
            pos = pos + 0.5
            scroll = msg.substr(0, pos)
            document.title = scroll
            timer = window.setTimeout("titlebar(" + pos + ")", speed)
        } else {
            rev = "bwd"
            timer = window.setTimeout("titlebar(" + pos + ")", speed)
        }
    } else {
        if (pos > 0) {
            pos = pos - 0.5
            var ale = le - pos
            scrol = msg.substr(ale, le)
            document.title = scrol
            timer = window.setTimeout("titlebar(" + pos + ")", speed)
        } else {
            rev = "fwd"
            timer = window.setTimeout("titlebar(" + pos + ")", speed)
            titlebar(4)
        }
    }
}
titlebar(4)

function fight() {
    if (fireRadio.checked == false && waterRadio.checked == false && leafRadio.checked == false) {
        humanText.innerHTML = "Please choose an element!"
        warning.play()
        return
    }
    fightButton.style.display = "none"
    setTimeout(function fightButtonVisible() {
        fightButton.style.display = "block"
        fireGif2.style.display = "none"
        waterGif2.style.display = "none"
        leafGif2.style.display = "none"
        robotText.innerHTML = " "
        humanText.innerHTML = " "
    }, 5000)
    var robotChoice = Math.ceil(Math.random() * 3)
    console.clear()
    switch (humanChoice) { //Human's Chosen Element
        case 1:
            console.log("The human has chosen Fire 🔥!")
            break
        case 2:
            console.log("The human has chosen Water 💧!")
            break
        case 3:
            console.log("The human has chosen Leaf 🍂!")
            break
        default:
            break
    }
    switch (robotChoice) { //Robot's Chosen Element
        case 1:
            console.log("The robot has chosen Fire 🔥!")
            setTimeout(function a() {
                robotText.innerHTML = "The robot has chosen Fire 🔥!"
                fireGif2.style.display = "block"
                waterGif2.style.display = "none"
                leafGif2.style.display = "none"
            }, 1000)
            break
        case 2:
            console.log("The robot has chosen Water 💧!")
            setTimeout(function b() {
                robotText.innerHTML = "The robot has chosen Water 💧!"
                waterGif2.style.display = "block"
                fireGif2.style.display = "none"
                leafGif2.style.display = "none"
            }, 1000)
            break
        case 3:
            console.log("The robot has chosen Leaf 🍂!")
            setTimeout(function c() {
                robotText.innerHTML = "The robot has chosen Leaf 🍂!"
                leafGif2.style.display = "block"
                fireGif2.style.display = "none"
                waterGif2.style.display = "none"
            }, 1000)
            break
        default:
            break
    }
    //Some cool shortcuts
    var cTie = "It's a tie!"
    var cWin = "You have won!"
    var cLost = "You have lost!"
    switch (true) { //Fight between human and robot
        case humanChoice == 1 && robotChoice == 1: //Fire Fire
            console.log(cTie)
            setTimeout(function d() { humanText.innerHTML = cTie }, 1000)
            break
        case humanChoice == 1 && robotChoice == 2: //Fire Water
            console.log(cLost)
            setTimeout(function e() {
                humanText.innerHTML = cLost
                humanLife = humanLife - 1
                humanLifeHTML.innerHTML = humanLife
                robotLifeHTML.innerHTML = robotLife
                wrong.play()
                if (humanLife == 0) {
                    mainArea.style.display = "none"
                    document.body.style.backgroundImage = "url('Resources/You Lose.gif')"
                }
                if (robotLife == 0) {
                    mainArea.style.display = "none"
                    document.body.style.backgroundImage = "url('Resources/You Win.gif')"
                }
            }, 1000)
            break
        case humanChoice == 1 && robotChoice == 3: //Fire Leaf
            console.log(cWin)
            setTimeout(function f() {
                humanText.innerHTML = cWin
                robotLife = robotLife - 1
                humanLifeHTML.innerHTML = humanLife
                robotLifeHTML.innerHTML = robotLife
                correct.play()
                if (humanLife == 0) {
                    mainArea.style.display = "none"
                    document.body.style.backgroundImage = "url('Resources/You Lose.gif')"
                }
                if (robotLife == 0) {
                    mainArea.style.display = "none"
                    document.body.style.backgroundImage = "url('Resources/You Win.gif')"
                }
            }, 1000)
            break
        case humanChoice == 2 && robotChoice == 1: //Water Fire
            console.log(cWin)
            setTimeout(function g() {
                humanText.innerHTML = cWin
                robotLife = robotLife - 1
                humanLifeHTML.innerHTML = humanLife
                robotLifeHTML.innerHTML = robotLife
                correct.play()
                if (humanLife == 0) {
                    mainArea.style.display = "none"
                    document.body.style.backgroundImage = "url('Resources/You Lose.gif')"
                }
                if (robotLife == 0) {
                    mainArea.style.display = "none"
                    document.body.style.backgroundImage = "url('Resources/You Win.gif')"
                }
            }, 1000)
            break
        case humanChoice == 2 && robotChoice == 2: //Water Water
            console.log(cTie)
            setTimeout(function h() { humanText.innerHTML = cTie }, 1000)
            break
        case humanChoice == 2 && robotChoice == 3: //Water Leaf
            console.log(cLost)
            setTimeout(function i() {
                humanText.innerHTML = cLost
                humanLife = humanLife - 1
                humanLifeHTML.innerHTML = humanLife
                robotLifeHTML.innerHTML = robotLife
                wrong.play()
                if (humanLife == 0) {
                    mainArea.style.display = "none"
                    document.body.style.backgroundImage = "url('Resources/You Lose.gif')"
                }
                if (robotLife == 0) {
                    mainArea.style.display = "none"
                    document.body.style.backgroundImage = "url('Resources/You Win.gif')"
                }
            }, 1000)
            break
        case humanChoice == 3 && robotChoice == 1: //Leaf Fire
            console.log(cLost)
            setTimeout(function j() {
                humanText.innerHTML = cLost
                humanLife = humanLife - 1
                humanLifeHTML.innerHTML = humanLife
                robotLifeHTML.innerHTML = robotLife
                wrong.play()
                if (humanLife == 0) {
                    mainArea.style.display = "none"
                    document.body.style.backgroundImage = "url('Resources/You Lose.gif')"
                }
                if (robotLife == 0) {
                    mainArea.style.display = "none"
                    document.body.style.backgroundImage = "url('Resources/You Win.gif')"
                }
            }, 1000)
            break
        case humanChoice == 3 && robotChoice == 2: //Leaf Water
            console.log(cWin)
            setTimeout(function k() {
                humanText.innerHTML = cWin
                robotLife = robotLife - 1
                humanLifeHTML.innerHTML = humanLife
                robotLifeHTML.innerHTML = robotLife
                correct.play()
                if (humanLife == 0) {
                    mainArea.style.display = "none"
                    document.body.style.backgroundImage = "url('Resources/You Lose.gif')"
                }
                if (robotLife == 0) {
                    mainArea.style.display = "none"
                    document.body.style.backgroundImage = "url('Resources/You Win.gif')"
                }
            }, 1000)
            break
        case humanChoice == 3 && robotChoice == 3: //Leaf Leaf
            console.log(cTie)
            setTimeout(function l() { humanText.innerHTML = cTie }, 1000)
            break
        default:
            break
    }
}