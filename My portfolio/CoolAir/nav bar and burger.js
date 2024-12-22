let btn = document.getElementById("burger");
let nav = document.getElementById("ul_nav");
btn.addEventListener("click", function (){
    btn.classList.toggle("close");
    nav.classList.toggle("show");
});