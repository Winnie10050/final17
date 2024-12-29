document.addEventListener("DOMContentLoaded", () => {
    const hotItemsContainer = document.getElementById('hotItems');

    // 生成所有 36 張商品圖片
    const productImages = Array.from({ length: 36 }, (_, i) => `../images/product${i + 1}.jpg`);

    productImages.forEach((image, index) => {
        const hotItem = document.createElement('div');
        hotItem.classList.add('hot-item');
        hotItem.innerHTML = `
            <img src="${image}" alt="熱銷商品${index + 1}">
            <h3>熱銷商品${index + 1}</h3>
        `;
        hotItemsContainer.appendChild(hotItem);
    });

    // 自動滾動效果
    let scrollAmount = 0;
    function autoScroll() {
        scrollAmount += 1;
        if (scrollAmount >= hotItemsContainer.scrollWidth) {
            scrollAmount = 0; // 從頭開始滾動
        }
        hotItemsContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
    setInterval(autoScroll, 50); // 每 50 毫秒滾動一次
});
