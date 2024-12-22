let videobox = document.getElementById("head_video_box");
let close = document.getElementById("head_close");
let btn = document.getElementById("play_video1");
let headcards = document.getElementById("head_cards");

btn.addEventListener('click', function(){
    videobox.classList.toggle("head_video_box_show");
    headcards.style.display = "none";
});
close.addEventListener('click', function(){
    videobox.classList.remove("head_video_box_show");
    headcards.style.display = "flex";
})