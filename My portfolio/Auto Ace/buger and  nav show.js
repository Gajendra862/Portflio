let burger = document.getElementById('burger');

burger.addEventListener('click', function(){
    let nav = document.getElementById('ul_menubar');
    burger.classList.toggle('close');
    nav.classList.toggle('show');
});


