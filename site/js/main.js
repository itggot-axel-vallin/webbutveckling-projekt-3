function showHamburger(event){
    let menu = document.querySelector("nav")
    menu.classList.toggle("navhidden")

    let fadeLayer = document.querySelector(".fade-layer")
    fadeLayer.classList.toggle("visible")
}

function showCategories(event){
    let menu = document.querySelector(".categorieshidden")
    menu.classList.toggle("categoriesshow")
}
