let btn = document.getElementById("btn3");
 btn.addEventListener('click', function(){
    let card = document.querySelectorAll("#hcard");
        card.forEach(hcard => {
            hcard.classList.toggle('show_card');
        });
    });