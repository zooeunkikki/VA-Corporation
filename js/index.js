//새로고침시 상단으로 이동
history.scrollRestoration = "manual"

//사이트 전체길이
let maxScrollValue = document.body.offsetHeight - window.innerHeight;
const scrollPer = (pageYOffset / maxScrollValue) * 100;
// header scroll event
let Hd = document.querySelector('.logobox');
let logoColor = document.querySelector('.logobox>h2>a')
let spanColor = document.querySelectorAll('.buger span');
let Buger = document.querySelector('.buger');

//scroll 실행
function scrollFun() {
    window.addEventListener('scroll', function (e) {
        //console.log(e)
        let maxScrollValue = document.body.offsetHeight - window.innerHeight;
        const scrollPer = (pageYOffset / maxScrollValue) * 100;
        // console.log(maxScrollValue)
        // console.log(scrollPer) -> 현재 스크롤값

        ifFun(scrollPer)
        MainScroll()
    });
};

//IF문 담는 곳
function ifFun(scrollPer) {


    //BG 색상 변경
    if (scrollPer >= 1) {
        Hd.classList.add('bg');
        logoColor.classList.remove('aColor');

    } else {
        Hd.classList.remove('bg');
        logoColor.classList.add('aColor');
    }

    spanColor.forEach(function (span, k) {
        if (scrollPer >= 1) {
            spanColor[k].classList.remove('spanColor');
        } else {
            spanColor[k].classList.add('spanColor');
        }
    });

};

//클릭시 네비 열리기
function clickFun() {
    let menuBox = document.querySelector('.menubox');
    let Buger = document.querySelector('.buger');
    let Ani;
    Ani = setTimeout(function () {
        Buger.addEventListener('click', function () {
            // console.log(100);
            Hd.classList.remove('bg');
            if (!Buger.classList.contains('active')) {
                spanColor.forEach(function (s, k) {
                    spanColor[k].classList.remove('spanColor');
                });
                document.documentElement.style = 'overflow:hidden';
                menuBox.classList.remove('out');

            } else {
                document.documentElement.style = 'overflow:auto';
                menuBox.classList.add('out');
            }

            menuBox.classList.add('open');

            Buger.classList.toggle('active');
            logoColor.classList.remove('aColor');
            TxtAni();
        });
    }, 300);
};

//네비 애니메이션
function TxtAni() {
    //txt-ani
    let menuBox = document.querySelector('.menubox');
    let svgBg1 = document.querySelector('.svg-bg svg path');
    let bugerTxt1 = document.querySelectorAll('.menubox ul li h2');
    let bugerTxt2 = document.querySelectorAll('.h2-sub p');
    let bugerTxt3 = document.querySelectorAll('.hd-contact p');
    let bugerTxt4 = document.querySelectorAll('.hd-contact a');

    if (Buger.classList.contains('active')) {
        svgBg1.classList.remove('out');

        //remove
        bugerTxt1.forEach(function (b, i) {
            bugerTxt1[i].classList.remove('out');
        });
        bugerTxt2.forEach(function (b, i) {
            bugerTxt2[i].classList.remove('out');
        });
        bugerTxt3.forEach(function (b, i) {
            bugerTxt3[i].classList.remove('out');
        });
        bugerTxt4.forEach(function (b, i) {
            bugerTxt4[i].classList.remove('out');
        });


    } else {
        svgBg1.classList.add('out');

        bugerTxt1.forEach(function (b, i) {
            bugerTxt1[i].classList.add('out');
        });
        bugerTxt2.forEach(function (b, i) {
            bugerTxt2[i].classList.add('out');
        });
        bugerTxt3.forEach(function (b, i) {
            bugerTxt3[i].classList.add('out');
        });
        bugerTxt4.forEach(function (b, i) {
            bugerTxt4[i].classList.add('out');
        });
    }

    svgBg1.classList.add('active');

    //txt-ani
    bugerTxt1.forEach(function (b, i) {
        bugerTxt1[i].classList.add('active');
    });
    bugerTxt2.forEach(function (b, i) {
        bugerTxt2[i].classList.add('active');
    });
    bugerTxt3.forEach(function (b, i) {
        bugerTxt3[i].classList.add('active');
    });
    bugerTxt4.forEach(function (b, i) {
        bugerTxt4[i].classList.add('active');
    });

};

//txt 나누기
function MainTxtSplit(s1,s2,t1,t2) {
    function movebox1() {
        let moveBoxh = document.querySelector(s1);
        const txtH2 = moveBoxh.textContent.split(" ");
        let txtBox1 = [];

        txtH2.forEach(function (h2, k) {
            txtBox1 += `<span>${h2}</span>`;
        });
        
        moveBoxh.innerHTML = txtBox1;

        let txt = 0;
        let elSpan = document.querySelectorAll(s2);
        
        txtBox1 = `<div>`;
        elSpan.forEach(function (span, k) {
            txt += span.offsetWidth + 6;

            if(txt > window.innerWidth*0.9){
                // console.log('</div>')
                txtBox1 += `</div><div>`; 
                txt = span.offsetWidth + 6;   
            }   
            // console.log(span.textContent)
            txtBox1 += `<span>${span.textContent}</span>`;
        });
        moveBoxh.innerHTML = txtBox1;
    }

    function movebox2(){
        let moveBoxp = document.querySelector(t1);
        const txtP = moveBoxp.textContent.split(" ");
        // console.log(txtP)
        let txtPbox = [];

        txtP.forEach(function (span, k) {
            txtPbox += `<span>${span}</span>`;
        });
        moveBoxp.innerHTML = txtPbox;
        // console.log(txtPbox)

        let txt = 0;
        let elSpan = document.querySelectorAll(t2);

        txtPbox = `<div>`;
        elSpan.forEach(function(span,k){
            txt += span.offsetWidth;

            if(txt > window.innerWidth*0.9){
                txtPbox +=`</div><div>`;
                txt = span.offsetWidth;
            }
            // console.log(span.textContent)
            txtPbox += `<span>${span.textContent}</span>`;

        });
        moveBoxp.innerHTML = txtPbox;



        moveBoxp.innerHTML = txtPbox;

    }

    function exp(){
        let exph2 = document.querySelector('.exp hgroup h2');
        const txth2 = exph2.textContent.split(" ");

        let txtBox = [];

        txth2.forEach(function(h2,k) {
            txtBox += `<span>${h2}</span>`;
        });

        exph2.innerHTML = txtBox;

        let txt = 0;
        let elSpan = document.querySelectorAll('.exp hgroup h2 span');

        txtBox = `<div>`;
        elSpan.forEach(function(span,k) {
            txt += span.offsetWidth + 6;

            if(txt > window.innerWidth*0.9){
                txtBox +=`</div><div>`;
                txt = span.offsetWidth +6;

            }

            txtBox +=`<span>${span.textContent}</span>`;
        })
        exph2.innerHTML = txtBox;

    }

    function port(){
        let exph2 = document.querySelector('.port h2');
        const txth2 = exph2.textContent.split(" ");

        let txtBox = [];

        txth2.forEach(function(h2,k) {
            txtBox += `<span>${h2}</span>`;
        });

        exph2.innerHTML = txtBox;

        let txt = 0;
        let elSpan = document.querySelectorAll('.port h2 span');

        txtBox = `<div>`;
        elSpan.forEach(function(span,k) {
            txt += span.offsetWidth + 6;

            if(txt > window.innerWidth*0.9){
                txtBox +=`</div><div>`;
                txt = span.offsetWidth +6;

            }

            txtBox +=`<span>${span.textContent}</span>`;
        })
        exph2.innerHTML = txtBox;

    }

    function banner(){
        let ban = document.querySelector(' .ban-btn hgroup h2');
        const txth2 = ban.textContent.split(" ");

        let txtBox = [];

        txth2.forEach(function(h2,k) {
            txtBox +=`<span>${h2}</span>`;
        })
        ban.innerHTML = txtBox;

        let elSpan = document.querySelectorAll('.ban-btn hgroup h2 span');
        
        let txt = 0;
        txtBox = `<div>`;
        elSpan.forEach(function(span,k) {
            txt = span.offsetWidth + 6;

            if(txt > window.innerWidth){
                txtBox +=`</div><div>`;
                txt = span.offsetWidth +6;
            }
            txtBox +=`<span>${span.textContent}</span>`;
        })
        ban.innerHTML = txtBox;


    }

    function banner2(){
        let ban = document.querySelector('.ban-02 .ban-btn hgroup h2');
        const txth2 = ban.textContent.split(" ");

        let txtBox = [];

        txth2.forEach(function(h2,k) {
            txtBox +=`<span>${h2}</span>`;
        })
        ban.innerHTML = txtBox;

        let elSpan = document.querySelectorAll('.ban-02 .ban-btn hgroup h2 span');
        
        let txt = 0;
        txtBox = `<div>`;
        elSpan.forEach(function(span,k) {
            txt = span.offsetWidth + 6;

            if(txt > window.innerWidth){
                txtBox +=`</div><div>`;
                txt = span.offsetWidth +6;
            }
            txtBox +=`<span>${span.textContent}</span>`;
        })
        ban.innerHTML = txtBox;


    }




    movebox1();
    movebox2();
    exp();
    port();
    banner();
    banner2();
};

//main txt animation
function MainScroll(h4,div1,div2){
    let WinH;
    winH = window.innerHeight;


    //소제목
    function txt1() {
        let txt1;
        let el = '';
        window.addEventListener('scroll',function(){
        txt1 = document.querySelectorAll(h4);

        txt1.forEach(function(v,k){
            el = txt1[k].offsetTop;


        if (el - winH <= pageYOffset) {
            txt1[k].classList.add('ani');
        }

    });
    })
    }

    //move1
    function txt2() {
        let txt2;
        let el = '';
        window.addEventListener('scroll',function(){
        txt2 = document.querySelectorAll(div1);

        span = document.querySelectorAll(div2);

        txt2.forEach(function (v, k) {
            el = txt2[k].offsetTop;

            if (el - winH <= pageYOffset) {
                txt2[k].classList.add('ani2');
                // txt2[k].style = `animation-delay: 0.${k}s;`;
            }
        });
        
        span.forEach(function(v,k){
            v.classList.add('open');
        });
    })
    }


    function txt3() {
        let txt3;
        let el = '';

        window.addEventListener('scroll', function () {
            txt3 = document.querySelectorAll('.movebox2 p div');
            span = document.querySelectorAll('.movebox2 p div span');


            txt3.forEach(function (v, k) {
                el = txt3[k].offsetTop;
                // console.log(txt3[k])
                
                if (el - winH <= pageYOffset) {
                    txt3[k].classList.add('ani3');
                    // txt3[k].style = `animation-delay: 0.${k}s;`;
                }
                // console.log(el - winH <= maxScrollValue)
            });

            span.forEach(function(v,k){
                v.classList.add('open');
            });
        })
    }

    function img(){
        let img;
        let el = '';

        window.addEventListener('scroll',function(){
            img = document.querySelectorAll('main section ul li');
            imgP = document.querySelectorAll('main section ul li .pimgbox');
            imgDiv = document.querySelectorAll('main section ul div');
            
            img.forEach(function(v,k){
                el = img[k].offsetTop;

                if(el - winH <= pageYOffset){
                    img[k].classList.add('over');
                }
            });

            imgP.forEach(function(v,k){
                imgP[k].classList.add('overp');
                imgP[k].style = `animation-delay: 0.${k}s;`;
            });

            imgDiv.forEach(function(v,k){
                imgDiv[k].classList.add('overdiv');
                imgDiv[k].style = `animation-delay: 0.${k}s;`;
            })
        });
    }

    function h2() {
        let txt2;
        let el = '';
        window.addEventListener('scroll',function(){
        txt2 = document.querySelectorAll('main h2 div');

        span = document.querySelectorAll('main  h2 div span');

        txt2.forEach(function (v, k) {
            el = txt2[k].offsetTop;

            if (el - winH <= pageYOffset) {
                txt2[k].classList.add('ani2');
                // txt2[k].style = `animation-delay: 0.${k}s;`;
            }
        });
        
        span.forEach(function(v,k){
            v.classList.add('open');
        });
    })
    }
    
    
    txt1();
    txt2();
    txt3();
    img();
    h2();
};



//함수 실행
function init() {
    scrollFun();
    ifFun();
    clickFun();
    MainTxtSplit('.movebox1 h2','.movebox1 h2 span','.movebox2 p','.movebox2 p span');
    MainScroll('main h4' ,'.movebox1 h2 div','.movebox1 h2 div span','main h2 div', 'main h2 div span');
}
window.addEventListener('load', init);


// 스크롤이벤트 발생 막는거
 // menuBox.addEventListener('scroll',function(){
    //     event.preventDefault();
    //     event.stopImmediatePropagation();
    //     event.stopPropagation();
    // });