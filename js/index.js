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
// 家电
{
    var lists=document.querySelectorAll(".jiadian");
    lists.forEach(function(ele){
        content(ele);
    });
    function content(context){
        var Btn=context.querySelectorAll(".youkuai a");
        var hua=context.querySelectorAll(".jiadian-box2");

        Btn.forEach(function (ele,index) {
            ele.onmouseover=function(){
                console.log(1);

                hua.forEach(function(ele){
                    ele.style.display="none";


                })

                hua[index].style.display="block";

            }

        })
    };
}

//内容
{
    var lists=document.querySelectorAll(".neironga");
    lists.forEach(function(ele){
        content(ele);
    });
    function content(context) {
        let inner=context.querySelector(".nr-box")
        let prev=context.querySelector(".nr-box-zuo");
        let next=context.querySelector(".nr-box-you");
        let items=context.querySelectorAll(".nr-box1");
        let pagers=context.querySelectorAll(".a1 .diandian li");
     //   console.log(pagers)
        let max=items.length;
        let n=0;
        next.onclick=function () {
            n++;
            if(n>=max){
                n=max;
                return;
            }
            inner.style.marginLeft=-n*296+"px";
            changePager(n);
        }
        prev.onclick=function () {
            n--;
            if(n<0){
                n=0;
                return;
            }
            inner.style.marginLeft=-n*296+"px";
            changePager(n);
        }
        pagers.forEach(function (ele,index) {
            ele.onclick=function () {
                n=index;
                changePager(index);
            };
        });

        function changePager(n) {
            for(let i=0;i<pagers.length;i++){
                pagers[i].classList.remove("active");
            }
            pagers[n].classList.add("active");
            inner.style.marginLeft=-n*296+"px";
        }
    }
}