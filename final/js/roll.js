// 等待 DOM 完全加載後再執行 (讀完 HTML 後馬上觸發)
window.addEventListener('DOMContentLoaded', function() {

    // 選擇所有圖片
    const images = document.querySelectorAll('.box img');

    // 圖片開始樣式 從左滑入 淡入進場
    gsap.set(images, {
        x: '-300%', //從左邊滑入
        opacity: 0,
    });

    // 為每張圖片設置依序滾動觸發動畫效果，並確保滾動回到時同樣觸發
    images.forEach((img, index) => {
        gsap.to(img, {
            x: '0%', // 圖片回到原位
            opacity: 1, // 淡入後顯示圖片
            duration: 2, // 持續時間
            ease: 'power5.out', // 平滑效果
            
            scrollTrigger: {
                trigger: img, // 每張圖片會獨立觸發
                start: "center center", // 滑到圖片中央時會觸發
                end: "bottom center", //滑到圖片底部結束
                scrub: true, // 平滑滾動效果
            },
            delay: index * 2 // 每張圖片依序觸發
        });
    });
});
