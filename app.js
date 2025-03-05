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

//Pop up
const nomesBrasileiros = [
    "Enzo Gabriel", "Valentina", "João Miguel", "Maria Eduarda", "Pedro Henrique",
    "Ana Luiza", "Miguel", "Larissa", "Arthur", "Sophia",
    "Davi Lucca", "Alice", "Heitor", "Laura", "Bernardo",
    "Manuela", "Théo", "Júlia", "Gabriel", "Helena",
    "Lorenzo", "Isadora", "Cauã", "Mariana", "Benício",
    "Lorena", "Gustavo", "Lívia", "Samuel", "Giovanna",
    "Felipe", "Maria Clara", "João Pedro", "Heloísa", "Isaac",
    "Maria Luiza", "Henrique", "Beatriz", "Murilo", "Lara",
    "Pietro", "Antonella", "Lucca", "Thiago",
    "Bianca", "Eduardo", "Cecília", "Bryan", "Rafaela"
];

function nomeAleatorio() {
    return nomesBrasileiros[Math.floor(Math.random() * nomesBrasileiros.length)];
}

function mostrarPopup() {
    const popup = $(`
        <div class="popup-compra">
          <img src="img/produto.webp" class="popup-img">
          <div class="popup-texto">
            <span class="popup-nome">${nomeAleatorio()}</span>
            <span class="popup-produto">Acabou de adquirir o ANSIOLIVE</span>
          </div>
        </div>
      `);

    $("body").append(popup);
    setTimeout(() => {
        popup.addClass("popup-visivel");
    }, 100);

    setTimeout(() => {
        popup.removeClass("popup-visivel");
        setTimeout(() => popup.remove(), 500);
    }, 5000);
}

setInterval(mostrarPopup, 20000);