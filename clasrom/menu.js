document.getElementById('burger').addEventListener("click", function(){
    var close = document.getElementById('burger');
    close.classList.toggle("close");
    var show = document.getElementById('navlist');
    show.classList.toggle("show");
})