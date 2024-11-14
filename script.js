const menu = document.querySelector (".menu");
const close =document.querySelector(".close");
const nav = document.querySelector("nav")
const right = document.querySelector(".right")

menu.addEventListener("click" , () => {
    menu.style.display = "none"
    close.style.display ="initial"
    nav.style.height = "100%";
    nav.style.flex ="flex"
    nav.style.flexDirection ="column"

    right.style.display ="flex"


})
close.addEventListener("click" , () => {
    menu.style.display = "initial"
    close.style.display ="none"
    nav.style.height = "initial"
})