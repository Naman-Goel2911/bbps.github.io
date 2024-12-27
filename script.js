const iframe = document.getElementById('tour-frame');
const fullscreenButton = document.querySelector('.fullscreen');
const minimizeButton = document.querySelector('.minimize');

function enterFullscreen(frameId) {
    const iframe = document.getElementById(frameId);
    if (iframe && iframe.requestFullscreen) {
        iframe.requestFullscreen().catch((err) => {
            console.error("Fullscreen request failed:", err);
        });
    } else if (iframe && iframe.mozRequestFullScreen) { /* Firefox */
        iframe.mozRequestFullScreen();
    } else if (iframe && iframe.webkitRequestFullscreen) { /* Chrome, Safari, Opera */
        iframe.webkitRequestFullscreen();
    } else if (iframe && iframe.msRequestFullscreen) { /* IE/Edge */
        iframe.msRequestFullscreen();
    }
}

