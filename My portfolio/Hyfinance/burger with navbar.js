let btn = document.getElementById("burger");

btn.addEventListener("click", function(){
    let nav = document.getElementById("un_navlist");
    btn.classList.toggle("close")
    nav.classList.toggle("show");
});