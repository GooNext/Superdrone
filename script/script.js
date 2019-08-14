let play = document.querySelector(".fa-play");
let circle = document.querySelector(".circle");
let video = document.getElementsByTagName("video")[0];
let record = document.querySelector(".record");


circle.addEventListener('click', function () {
    if (video.paused) {
        record.classList.remove("fa-play");
        record.classList.add("fa-stop");
        video.play();
    } else {
        video.pause();
        record.classList.remove("fa-stop");
        record.classList.add("fa-play");
    }
}, false);

circle.addEventListener("mouseout", function () {
    circle.style.opacity = "1";
});
circle.addEventListener("mouseleave", function () {
    circle.style.opacity = "0.5";
});
