// 等待 DOM 完全加載後執行
window.addEventListener('DOMContentLoaded', function() {
    // 選擇所有的作品集圖片
    const images = document.querySelectorAll('.box img');

    // 為每張圖片設置初始樣式（圖片從左側滑入）
    gsap.set(images, {
        x: '-300%',
        opacity: 0,
    });

    // 為每張圖片設置依序滾動觸發動畫效果，並確保滾動回到時同樣觸發
    images.forEach((img, index) => {
        gsap.to(img, {
            x: '0%', // 圖片滑入至原位
            opacity: 1, // 顯示圖片
            duration: 3, // 動畫持續時間
            ease: 'power5.out', // 平滑過渡
            
            scrollTrigger: {
                trigger: img, // 每張獨立觸發動畫
                start:"top center",
                eend: "bottom 60%", // 圖片底部到螢幕 60% 高度時結束
                scrub: true, // 平滑滾動動畫效果
            },
            delay: index * 0.6, // 每張圖片延遲依序觸發
        });
    });
});