// content 4 show video
let playbtn4 = document.getElementById('play-button');
let video4 = document.getElementById('video1');
let bg4 = document.getElementById('background');
let close4 = document.getElementById('closebtn');
playbtn4.addEventListener('click', () =>{
    video4.classList.toggle('showvideo');
    video4.currentTime = 0;
    playbtn4.classList.toggle('hideplaybtn')
    bg4.classList.toggle('darkbgm')
    close4.classList.toggle('showclosebtn');
})
close4.addEventListener('click', () => {
    video4.classList.remove('showvideo')
    playbtn4.classList.remove('hideplaybtn')
    bg4.classList.remove('darkbgm')
    close4.classList.remove('showclosebtn');
});
// content 6 show video
let playbtn6 = document.getElementById('playbtn6');
let video6 = document.getElementById('video2');
let bg6 = document.getElementById('col-8');
let close6 = document.getElementById('close6');
let solve6 = document.getElementById('solve');
playbtn6.addEventListener('click', () =>{
    video6.classList.toggle('showvideo2');
    video6.currentTime = 0;
    playbtn6.classList.toggle('hidebtn6');
    close6.classList.toggle('showclose6');
    bg6.classList.toggle('bg6dark');
    solve6.classList.toggle('solvehide');
});
close6.addEventListener('click',() => {
    video6.classList.remove('showvideo2');
    playbtn6.classList.remove('hidebtn6');
    close6.classList.remove('showclose6');
    bg6.classList.remove('bg6dark');
    solve6.classList.remove('solvehide');
});