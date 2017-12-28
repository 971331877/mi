{


    let items=document.querySelectorAll('.img-box li');
    let dian=document.querySelectorAll(".btn-box li");
    let bannerer=document.querySelector(".banner");
    let you=document.querySelector(".banright");
    let zuo=document.querySelector(".ban-left");
    // console.log(items);
    // console.log(dian);
    dian.forEach(function (ele,index) {
        ele.onclick=function () {
            for(let i=0;i<items.length;i++){
                dian[i].classList.remove("active");
                items[i].classList.remove("active");
            }
            this.classList.add("active");
            items[index].classList.add("active");
            n =index;
        };
    });
    //
    let n=0
    function bannerFn(dir="r") {
       if(dir==="r"){
        n++;
       }else if (dir==="l"){
           n--;
        }
        if(n===items.length){
            n=0;
        }
        if(n===-1){
           n=items.length-1;
        }
        for(let i=0;i<items.length;i++){
            dian[i].classList.remove("active");
            items[i].classList.remove("active");
        }
        dian[n].classList.add("active");
        items[n].classList.add("active");
    }
    let st=setInterval(bannerFn,3000);
    bannerer.onmouseover=function () {
        clearInterval(st);
    }
    bannerer.onmouseout=function () {
      st=setInterval(bannerFn,3000);
    }
    let flag=true;

// 轮播图箭头效果
    you.onclick=function () {
        if(flag){
        flag=false;
        bannerFn();
        }
    }
    zuo.onclick=function () {
        if(flag) {
            flag=false;
            bannerFn("l");
        }
    }
    items.forEach(function (ele,index) {
        ele.addEventListener("transitionend",
            function(){
                    flag=true;
        })
    })
}
// addEventListener（）添加事件的方法
{
    // 明星单品箭头
    let you=document.querySelector(".fuhao");
    let zuo=document.querySelector(".fuhao1");
    let he=document.querySelector(".bot")
    you.onclick=function () {
        this.classList.remove("active");
        zuo.classList.add("active");
        he.style.transform="translateX(-1226px)"
    }
    zuo.onclick=function () {
        this.classList.remove("active");
        you.classList.add("active");
        he.style.transform="translateX(0px)"
    }
    //明星产品来回轮播
 let n=0;
function startFn() {
    n++;
    if(n%2===0){
        you.onclick();
    }else {
        zuo.onclick();
    }
}
    let st=setInterval(startFn,2000)
    he.onmouseover=function () {
        clearInterval(st)
    }
    he.onmouseout=function () {
        st=setInterval(startFn,2000);
    }
}