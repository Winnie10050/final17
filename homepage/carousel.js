function setupCarousel(containerSelector, imageSelector, intervalTime, pauseOnHover = true, buttonSelector = null) {
    const containers = document.querySelectorAll(containerSelector);

    containers.forEach(container => {
        const images = container.querySelectorAll(imageSelector);
        let currentIndex = 0;
        let interval;

        function showImage(index) {
            images.forEach((img, i) => {
                img.style.display = i === index ? 'block' : 'none';
            });
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        function startCarousel() {
            interval = setInterval(nextImage, intervalTime);
        }

        if (pauseOnHover) {
            container.addEventListener('mouseenter', () => clearInterval(interval));
            container.addEventListener('mouseleave', startCarousel);
        }

        if (buttonSelector) {
            const button = container.querySelector(buttonSelector);
            if (button) {
                button.addEventListener('click', () => {
                    console.log(`Navigating from ${containerSelector}`);
                });
            }
        }

        showImage(currentIndex);
        startCarousel();
    });
}

setupCarousel('.product-display', '.carousel-image', 7000, false, '.shop-now');

setupCarousel('.category', '.category-image', 5000, true, '.shop-now');
