var btn = document.getElementById("btn6");

btn.addEventListener("click", function(){
    var video =  document.getElementById("video6");

    video.classList.toggle("video6show");
});

var close = document.getElementById("close");

close.addEventListener("click", function(){
    var hide = document.getElementById("video6");

    hide.classList.remove("video6show");
});