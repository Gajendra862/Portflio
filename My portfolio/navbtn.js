let button = document.getElementById('burger')
button.addEventListener('click', () =>{
    let nav = document.getElementById('nav');
    button.classList.toggle('close')
    nav.classList.toggle('show');
});