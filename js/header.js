function sidebarfun() {
    var bar = document.getElementById("sbar")
    if (bar.style.display == "block") {
        bar.style.display = "none"
    } else {
        bar.style.display = "block"
    }
}

function loginOff() {
    var pg = document.getElementById("loginpg")
    pg.style.display = "none"
}

function loginOn() {
    var pg = document.getElementById("loginpg")
    pg.style.display = "flex"
}
