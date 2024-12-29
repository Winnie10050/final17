// 通用輪播功能
function setupCarousel(containerSelector, imageSelector, intervalTime, pauseOnHover = true, buttonSelector = null) {
    const containers = document.querySelectorAll(containerSelector);

    containers.forEach(container => {
        const images = container.querySelectorAll(imageSelector);
        let currentIndex = 0;
        let interval;

        // 顯示指定圖片
        function showImage(index) {
            images.forEach((img, i) => {
                img.style.display = i === index ? 'block' : 'none';
            });
        }

        // 自動切換到下一張圖片
        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        // 啟動輪播
        function startCarousel() {
            interval = setInterval(nextImage, intervalTime);
        }

        // 暫停輪播（懸停時）
        if (pauseOnHover) {
            container.addEventListener('mouseenter', () => clearInterval(interval));
            container.addEventListener('mouseleave', startCarousel);
        }

        // 綁定按鈕（如果有）
        if (buttonSelector) {
            const button = container.querySelector(buttonSelector);
            if (button) {
                button.addEventListener('click', () => {
                    console.log(`Navigating from ${containerSelector}`);
                    // 此處可添加跳轉邏輯或其他功能
                });
            }
        }

        // 初始化
        showImage(currentIndex);
        startCarousel();
    });
}

// 設定主要商品的輪播功能（7 秒，無暫停，包含購物按鈕）
setupCarousel('.product-display', '.carousel-image', 7000, false, '.shop-now');

// 設定類別的輪播功能（5 秒，有暫停，包含購物按鈕）
setupCarousel('.category', '.category-image', 5000, true, '.shop-now');
