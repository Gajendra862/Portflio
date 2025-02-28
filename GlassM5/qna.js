const faqs = document.querySelectorAll(".text");

        faqs.forEach(text => {
            text.addEventListener("click", function() {
                text.classList.toggle("present");
            });
        });