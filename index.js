emptyExp = "Vidd az egeret a választható ABC fölé, vagy kattints rá, hogy több információt tudj meg róla"

englishExp = ["Angol",": A teljes angol ABC"]
englishAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

englishSimplifiedExp = ["Angol egyszerűsített",": Az angol ABC W, X, Y nélkül"]
englishSimplified = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Z"]

magyarExp = ["Magyar",": A teljes magyar ABC, minden ékezetes és kettős/hármas betűt különvéve"]
magyarABC = ["A", "Á", "B","C", "Cs","D", "Dz", "Dzs", "E", "É", "F", "G", "Gy", "H", "I", "Í", "J", "K", "L", "Ly", "M", "N", "Ny", "O", "Ó", "Ö", "Ő", "P", "Q", "R", "S", "Sz", "T", "Ty", "U", "Ú", "Ü", "Ű", "V", "W", "X", "Y", "Z", "Zs"]

magyarEgybevontExp = ["Magyar egybevont",": A magyar ABC az X és Y nélkül, az ékezetes magánhangzókat egybevonva (A/Á), a kettős/hármas betűk és a W egybevonva a kezdő betűjükkel (D/DZ/DZS). Az U és Ü valamint az O és Ö külön betűként vannak értelmezve."]
magyarEgybevont = ["A/Á", "B", "C/Cs", "D/Dz/Dzs", "E/É", "F", "G/Gy", "H", "I/Í", "J", "K", "L/Ly", "M", "N/Ny", "O/Ó", "Ö/Ő", "P", "Q", "R", "S/Sz", "T/Ty", "U/Ú", "Ü/Ű", "V/W", "Z/Zs"]

custom = []
customExp = ["Egyéni",": Csinálj egyedi ABC-t a meglévők módosításával, vagy a semmiből"]

current = []

selected = false

function pickAlphabet(ABC,exp) {
    current = ABC
    document.getElementById("info").innerHTML = exp[0]+exp[1]
    document.getElementById("beginBtn").innerHTML = "Kezdés: "+exp[0]
    selected = true
};

function begin() {
current.sort(function(){return 0.5 - Math.random()})
document.getElementById("showBackground").style.display = "block"
next()
};

function hoverInfo(exp) {
    if (selected == false) {
   document.getElementById("info").innerHTML = exp[0]+exp[1]
    }
};

function hoverEnd() {
    if (selected == false) {
    document.getElementById("info").innerHTML = emptyExp
    }
};

function createCustom() {
    custom = JSON.parse(document.getElementById("customInput").value)

    document.getElementById("showcase").innerHTML = custom
};

currentLetter = -1

function next() {
    if (currentLetter+1 < current.length) {
    currentLetter ++
    document.getElementById("letter").innerHTML = current[currentLetter]
}

else {
    document.getElementById("letter").innerHTML = "Végig értél az összes betűn"
    document.getElementById("nextLetter").style.display = "none"
    document.getElementById("reload").style.display = "block"
}
};

function customToggle(cond) {
    if (cond == 1) {
    document.getElementById("customBackground").style.display = "block"
    }
    else {        
    document.getElementById("customBackground").style.display = "none"
    }
    };

function customStart() {
    customToggle()
    current = JSON.parse(document.getElementById("customInput").value)
    begin()
};
