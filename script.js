const iframe = document.getElementById('tour-frame');
const fullscreenButton = document.querySelector('.fullscreen');

// Loader functionality
document.addEventListener('DOMContentLoaded', () => {
    // Hide loader when all iframes are loaded
    const iframes = document.querySelectorAll('iframe');
    let loadedIframes = 0;

    function hideLoader() {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }

    function checkAllIframesLoaded() {
        loadedIframes++;
        if (loadedIframes === iframes.length) {
            hideLoader();
        }
    }

    // Add load event listener to each iframe
    iframes.forEach(iframe => {
        iframe.addEventListener('load', checkAllIframesLoaded);
    });

    // Fallback to hide loader after 10 seconds in case some iframes fail to load
    setTimeout(hideLoader, 10000);
});

// Fullscreen functionality
function enterFullscreen(frameId) {
    const iframe = document.getElementById(frameId);
    if (iframe) {
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen().catch(err => {
                console.error("Fullscreen request failed:", err);
            });
        } else if (iframe.mozRequestFullScreen) {
            iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullscreen) {
            iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) {
            iframe.msRequestFullscreen();
        }
    }
}


