var boximg1 = document.getElementById("imgbox1");
var boximg2 = document.getElementById("imgbox2");
var boximg3 = document.getElementById("imgbox3");

boximg1.addEventListener("click", function(){
    var show1 = document.getElementById("imgbox1");
    var hide2 = document.getElementById("imgbox2");
    var hide3 = document.getElementById("imgbox3");

    show1.classList.add("showimgbox");
    hide2.classList.remove("showimgbox");
    show1.style.transform = "translate(925px)";
    hide2.style.transform = " translateX(925px)";
    hide3.style.transform = " translateX(1850px)";
});

boximg2.addEventListener("click", function(){
    var show2 = document.getElementById("imgbox2");
    var hide1 = document.getElementById("imgbox1");
    var hide3 = document.getElementById("imgbox3");

    show2.classList.add("showimgbox");
    show2.style.transform ="translateX(0px)";
    hide1.classList.remove("showimgbox");
    hide3.classList.remove("showimgbox");
    hide1.style.transform = "translateX(0)";
    hide3.style.transform = "translateX(0px)";
});

boximg3.addEventListener("click", function(){
    var show3 = document.getElementById("imgbox3");
    var hide1 = document.getElementById("imgbox1");
    var hide2 = document.getElementById("imgbox2");

    show3.classList.add("showimgbox");
    show3.style.transform = "translateX(-925px)";
    hide2.style.transform ="translateX(-925px)";
    hide2.classList.remove("showimgbox");
    hide1.style.transform = "translateX(-1850px)";

});