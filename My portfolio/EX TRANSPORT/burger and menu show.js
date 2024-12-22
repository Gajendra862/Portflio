let burger = document.getElementById('burger');

burger.addEventListener('click', function(){
    burger.classList.toggle('close');
    let nav = document.getElementById('navlist');
    nav.classList.toggle('show');
});