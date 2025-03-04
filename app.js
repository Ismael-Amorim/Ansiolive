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

//Depoimentos
let depoimentoPlayers = {};

function onYouTubeIframeAPIReady() {
    for (let i = 1; i <= 7; i++) {
        depoimentoPlayers[`video${i}`] = new YT.Player(`video-0${i}`);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    for (let i = 1; i <= 7; i++) {
        const overlay = document.getElementById(`overlay-0${i}`);

        overlay.addEventListener('click', function () {
            let player = depoimentoPlayers[`video${i}`];
            if (player) {
                let state = player.getPlayerState();
                if (state === YT.PlayerState.PLAYING) {
                    player.pauseVideo();
                } else {
                    player.playVideo();
                }
            }
        });
    }
});

