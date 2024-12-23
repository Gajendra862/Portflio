let btn = document.getElementById("burger")
btn.addEventListener("click", function() {
    btn.classList.toggle("close")
    let show = document.getElementById("nav");
    show.classList.toggle("show");
});

