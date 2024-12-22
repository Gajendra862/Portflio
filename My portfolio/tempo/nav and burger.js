let btn = document.getElementById("burger")
let nav = document.getElementById("col-1")

btn.addEventListener("click", function(){
    btn.classList.toggle("close");
    nav.classList.toggle("show");
});