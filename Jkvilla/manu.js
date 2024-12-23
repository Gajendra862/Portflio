document.getElementById("burger").addEventListener("click", function(){

    var close = document.getElementById("burger");
    close.classList.toggle("close");
    var show = document.getElementById("menu");
    show.classList.toggle("show");

});