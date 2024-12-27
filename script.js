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

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.opacity = '0'; // Fade out the loader
        setTimeout(() => {
            loader.style.display = 'none'; // Remove loader completely

            // Adjust iframe dimensions to enforce aspect ratio
            const iframes = document.querySelectorAll('.image-container iframe');
            iframes.forEach((iframe) => {
                iframe.style.width = '100%';
                iframe.style.maxWidth = '800px';
                iframe.style.height = 'auto';
            });
        }, 100);
    }
});



