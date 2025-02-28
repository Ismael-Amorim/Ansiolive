let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtubePlayer');
}

document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('videoOverlay');

    overlay.addEventListener('click', function () {
        if (player) {
            let state = player.getPlayerState();
            if (state === YT.PlayerState.PLAYING) {
                player.pauseVideo();
            } else {
                player.playVideo();
            }
        }
    });
});

//Faq
document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(question => {
        question.addEventListener("click", function () {
            const answer = this.nextElementSibling;
            const icon = this.querySelector(".faq-icon");

            if (answer.style.display === "block") {
                answer.style.display = "none";
                icon.textContent = "+";
            } else {
                answer.style.display = "block";
                icon.textContent = "-";
            }
        });
    });
});

