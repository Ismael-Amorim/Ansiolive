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
