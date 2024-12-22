let btn = document.getElementById("play_btn6");
let showvideo = document.getElementById("hide_video_6");
let close = document.getElementById("close6");
let cards = document.getElementById("white_orange_cards")

btn.addEventListener('click', function(){
    showvideo.classList.toggle("show_video_6")
    cards.classList.toggle("hide_white_orange_cards");
})
close.addEventListener('click', function(){
    showvideo.classList.remove("show_video_6");
    cards.classList.remove("hide_white_orange_cards");
})