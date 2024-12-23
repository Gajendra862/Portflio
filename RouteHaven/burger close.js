let burger = document.getElementById("burger");
let ul = document.getElementById("ul");

burger.addEventListener("click" , ()=>{
    // let burger1 = document.getElementById("burger");
    burger.classList.toggle("close")
    ul.classList.toggle("none")
})