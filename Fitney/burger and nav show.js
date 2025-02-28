let btn = document.getElementById('burger');

btn.addEventListener('click', function(){
    btn.classList.toggle('close');
    let nav = document.getElementById('navlist');
    nav.classList.toggle('show');
});