let btn2 = document.getElementById("show_all_cards");    

btn2.addEventListener("click", function(){
    let show = document.querySelectorAll("#hidecard");
    show.forEach(hidecard => {
        hidecard.classList.toggle("show_card");
    });
});