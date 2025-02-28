let btn = document.getElementById('burger');

btn.addEventListener('click', function(){
    let ul = document.getElementById('ulnav');
    let sing = document.getElementById('singin');
    btn.classList.toggle('close');
    ul.classList.toggle('show');
    sing.classList.toggle('down');
});
