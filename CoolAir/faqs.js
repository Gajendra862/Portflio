let qnas = document.querySelectorAll(".faq");
let arrows = document.querySelectorAll("#faq_arrow")
qnas.forEach(faq => {
    faq.addEventListener("click", function() {
        faq.classList.toggle("present");
    });
});