        var play1 = document.getElementById("play1");
        var play2 = document.getElementById("play2");
        var play3 = document.getElementById("play3");

        play1.addEventListener("click", function(){
            var show1 = document.getElementById("video1");
            var show2 = document.getElementById("video2");
            var show3 = document.getElementById("video3");
            var play1 = document.getElementById("play1");
            var play2 = document.getElementById("play2");
            var play3 = document.getElementById("play3");
            show1.classList.toggle("show");
            show2.classList.remove("show");
            show3.classList.remove("show");
            play1.style.display="none";
            play2.style.display="block";
            play3.style.display="block";

        });
        play2.addEventListener("click", function(){
            var show1 = document.getElementById("video1");
            var show2 = document.getElementById("video2");
            var show3 = document.getElementById("video3");
            var play1 = document.getElementById("play1");
            var play2 = document.getElementById("play2");
            var play3 = document.getElementById("play3");
            show1.classList.remove("show");
            show2.classList.toggle("show");
            show3.classList.remove("show");
            play1.style.display="block";
            play2.style.display="none";
            play3.style.display="block";

        });
        play3.addEventListener("click", function(){
            var show1 = document.getElementById("video1");
            var show2 = document.getElementById("video2");
            var show3 = document.getElementById("video3");
            var play1 = document.getElementById("play1");
            var play2 = document.getElementById("play2");
            var play3 = document.getElementById("play3");
            show1.classList.remove("show");
            show2.classList.remove("show");
            show3.classList.toggle("show");
            play1.style.display="block";
            play2.style.display="block";
            play3.style.display="none";

        });


        var video1 = document.getElementById("video1");
        var video2 = document.getElementById("video2");
        var video3 = document.getElementById("video3");
        
        video1.addEventListener("click", function(){
            var video1 = document.getElementById("video1");
            var play = document.getElementById("play1");
            video1.classList.remove("show");
            play.style.display="block";
        });
        video2.addEventListener("click", function(){
            var video2 = document.getElementById("video2");
            var play = document.getElementById("play2");
            video2.classList.remove("show");
            play.style.display="block";
        });
        video3.addEventListener("click", function(){
            var video3 = document.getElementById("video3");
            var play = document.getElementById("play3");
            video3.classList.remove("show");
            play.style.display="block";
        });