window.addEventListener('resize', adjustImageSize);

function adjustImageSize() {
    const image = document.getElementById('centeredImage');
    const windowRatio = window.innerWidth / window.innerHeight;
    const imageRatio = image.naturalWidth / image.naturalHeight;

    if (windowRatio > imageRatio) {
        image.style.width = '100%';
        image.style.height = 'auto';
    } else {
        image.style.width = 'auto';
        image.style.height = '100%';
    }
}

window.onload = adjustImageSize;