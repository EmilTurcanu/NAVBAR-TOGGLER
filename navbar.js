const items = [
    "BRAND",
    "Animi",
    "Esse",
    "Quasi",
    "Vitae",
    "Placeat",
    "Quas",
    "Officiis",
    "Vel",
]
const TOTAL = 9
const BTN_WIDTH = 40
let dropOpen = false
let eWidth = 0
function adapt() {
    for(let n=TOTAL; n>=1; n--) {
        estimateWidth(n)
        if (eWidth <= innerWidth) {
            showItems(n)
            break
        }
    }
}
function estimateWidth(n) {
    let text = ``
    let pad = 0
    for (let i = 0; i < n; i++) {
        text += items[i]
        pad += 2 * 10 
    }
    eWidth = 11.5 * text.length + pad + BTN_WIDTH
}
function showItems(n) {
    const maxItems = Math.min(n, 9)
    navbar.innerHTML = ``
    for (let i=0; i < maxItems; i++) {
        navbar.innerHTML += `<a href="">${items[i]}</a>`
    }
    let remaining = TOTAL - maxItems
    if (remaining > 0) {
        navbar.innerHTML += `<button id="button" onclick="showRemainingItems(${remaining})"><span id="number">${remaining}</span>☰</button>`
    }
}
function showRemainingItems(n) {
    if(dropOpen) {
        navbarDrop.innerHTML = ``
        dropOpen = false
    } else {
        for (let i = TOTAL - n; i < TOTAL; i++) {
            navbarDrop.innerHTML += `<a href="">${items[i]}</a>`
        }
        dropOpen = true
    }
}
