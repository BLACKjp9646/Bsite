let btn = document.querySelector("button");
let omikuji=0;
let omikujiList=[``,``,``,``,``];
omikujiList[0]=`　―――
　|　　|
　|　　|
　|大凶|
　|　　|
　|　　|
　|　　|
　―――`
omikujiList[1]=`　―――
　|　　|
　|　　|
　|凶　|
　|　　|
　|　　|
　|　　|
　―――`
omikujiList[2]=`　―――
　|　　|
　|　　|
　|吉　|
　|　　|
　|　　|
　|　　|
　―――`
omikujiList[3]=`　―――
　|　　|
　|　　|
　|中吉|
　|　　|
　|　　|
　|　　|
　―――`
omikujiList[4]=`　―――
　|　　|
　|　　|
　|大吉|
　|　　|
　|　　|
　|　　|
　―――`
let newElement = document.querySelector("#omikuji");//タグを取得
btn.addEventListener("click",img1)//ボタンがクリックされたとき順番にAAを出力する
function wait(){
    omikuji=Math.floor(Math.random()*5);//0~4までの値をランダムに取得
    newElement.innerText=omikujiList[omikuji];//ランダムにでた値の配列をpタグの中に出力
}
function img1(){
    newElement.innerText=`――――――
    ＼　　＼　　＼
    　＼　　＼　　＼
    　　＼　　＼　　＼
    　　　＼　　＼　　＼
    　　　　＼　　＼　　＼
    　　　　　＼　　＼　　＼
    　　　　　　＼　　＼　　＼
    　　　　　　　――――――`
    setTimeout(img2,1000)
}
function img2(){
    newElement.innerText=`  　　　　　　――――――
    　　　　　　／　　／　　／
    　　　　　／　　／　　／
    　　　　／　　／　　／
    　　　／　　／　　／
    　　／　　／　　／
    　／　　／　　／
    ／　　／　　／
    ――――――`
    setTimeout(img3,1000)
}
function img3(){
    newElement.innerText=`―――――
    |　　|　　|
    |　　|　　|
    |　　|　　|
    |　　|　　|
    |　　|　　|
    |　　|　　|
    |　　|　　|
    |　　|　　|
    ―――――`
    setTimeout(img4,1000)
}
function img4(){
    newElement.innerText=`―――――
    |　　|　　|
    |　　|　　|
    |　　|　　|
    |　　|　　|
    |　　|　　|
    |　　|　　|
    |　　|　　|
    |　　|　　|
    ―――――
    　|　　|
    　|　　|
    　|　　|
    　―――`
    setTimeout(wait,1000)
}