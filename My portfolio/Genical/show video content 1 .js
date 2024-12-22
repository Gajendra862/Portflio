let videobtn = document.getElementById("video_btn5");
let video = document.getElementById("video");
videobtn.addEventListener("click", function() {
    document.getElementById("video").style.display="block";
    document.getElementById("big_img").style.display="none";
    document.getElementById("video1").style.display="none";
    document.getElementById("video1").classList.toggle("showvideo");
});
        
video.addEventListener("click", function() {
    document.getElementById("video").style.display="none";
    document.getElementById("big_img").style.display="block";
    document.getElementById("video1").style.display="block";
});