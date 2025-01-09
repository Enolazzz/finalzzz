document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);
  
    // 要把此段滾動視差運用到作品集container的元素col
    const container = document.querySelector(".container");
    const elements = container.querySelectorAll(".col");
  
    //找到每個col 設定滾動視差(elem=元素)
    elements.forEach(function (elem) {
      hide(elem); //滾動前先隱藏col元素
  
      //建立滾動視差
      ScrollTrigger.create({
        trigger: elem,//滾動觸發在col元素
        start: "top bottom",//col在開頭就觸發滾動視差
        end: "bottom top",//col的尾端 在離開網頁視窗的開頭結束
        onEnter: function () {
          animateFrom(elem);//進入work頁面就產生效果
        },
        onEnterBack: function () {
          animateFrom(elem, -1);//視差滾動產生效果
        },
        onLeave: function () {
          hide(elem);//關閉頁面
        },
      });
    });
  });

  //元素方向
  function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
      y = direction * 100,  //初始y
      delay = 0;

   // 設定滾動視差滾動時的位移方向
    if (elem.classList.contains("fromLeft")) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains("fromRight")) {
      x = 100;
      y = 0;
    }

    //元素初始的位置跟透明度
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
  
    gsap.fromTo(
      elem,
      { x: x, y: y, autoAlpha: 0 },
      {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1, //滾動後的透明度
        ease: "expo",//緩動
        overwrite: "auto",
        delay: delay,
      }
    );
  }
  
  function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });//隱藏col狀態
  }
  