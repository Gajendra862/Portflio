let burger = document.getElementById("burger");
let navlist = document.getElementById("navlist");

burger.addEventListener('click', function(){
    burger.classList.toggle("close");
    navlist.classList.toggle("navlistshow")
})