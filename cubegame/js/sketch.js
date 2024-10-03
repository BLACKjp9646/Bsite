let px = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//横軸一覧
let py = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//縦軸一覧
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];//パネルごとに表記される数値
let movePanel = 0,
	mpx, mpy, chanP,
	xallow = 0, yallow = 0,
	sumx, sumy, sum,
	randColor=0,rand,difficult=8;
let ColorList =["red","orange","yellow","yellowgreen","aqua","blue","purple"]

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(5);
	background(255);
	textSize(100);//文字の大きさ
	//横軸の数値の代入
	px[1] = width / 2 - 300;
	px[2] = width / 2 - 100;
	px[3] = width / 2 + 100;
	px[4] = width / 2 - 300;
	px[5] = width / 2 - 100;
	px[6] = width / 2 + 100;
	px[7] = width / 2 - 300;
	px[8] = width / 2 - 100;
	px[9] = width / 2 + 100;
	//縦軸の数値の代入
	py[1] = height / 2 - 300;
	py[2] = height / 2 - 300;
	py[3] = height / 2 - 300;
	py[4] = height / 2 - 100;
	py[5] = height / 2 - 100;
	py[6] = height / 2 - 100;
	py[7] = height / 2 + 100;
	py[8] = height / 2 + 100;
	py[9] = height / 2 + 100;
	
	//配列の長さを代入
	sum = num.length;
//正直何やってるか謎、1～9までの値を重複なしで配列に格納する
	while (sum) {
		let j = floor(random() * sum);
		let t = num[--sum];
		num[sum] = num[j];
		num[j] = t;
	}
	num[floor(random(0,9))]=0;
	//パネルの枠部分の表示
	
	for(let n=1;n<10;n++){
		fill("white")
		if(num[n-1]==0){
		fill("gray")
		}
	rect(px[n], py[n], 200);
	}
	//パネルの数値の表示
	fill("black");
	for(let n=1;n<10;n++){
		if(num[n-1]!=0){
	text(num[n-1], px[n] + 75, py[n] + 135);
		}
	}
}

function draw() {
if(randColor>=1){
	rand=floor(random(0,7));
	for(let n=1;n<10;n++){
			fill("white")
		if(num[n-1]==0){
		fill("gray")
		}
		fill(ColorList[rand]);
	rect(px[n], py[n], 200);
	}
	//数値を表示
		fill("black");
		textSize(100);
	for(let n=1;n<10;n++){
			if(num[n-1]!=0){
	text(num[n-1], px[n] + 75, py[n] + 135);
		}
	}
}
	else{
		
	}
}

function mouseClicked() {

}

function mousePressed() {
	//マウスのボタンを押したとき処理される
	
	//クリックした瞬間のマウスの位置をmpx,mpyに代入
	mpx = mouseX;
	mpy = mouseY;
	textSize(100);
	//各パネルの枠内をクリックしたとき
	if (mouseX >= px[1] && mouseX <= px[1] + 200 && mouseY >= py[1] && mouseY <= py[1] + 200&&num[0]!=0){
		//赤くハイライトされるようにする
		fill("red");
		rect(px[1], py[1], 200);
		fill("black");
		text(num[0], px[1] + 75, py[1] + 135);
		//パネルに表示されている数値が格納された配列の位置を代入する
		chanP = 0;
	}
	if (mouseX >= px[2] && mouseX <= px[2] + 200 && mouseY >= py[2] && mouseY <= py[2] + 200&&num[1]!=0) {
		fill("red");
		rect(px[2], py[2], 200);
		fill("black");
		text(num[1], px[2] + 75, py[2] + 135);
		chanP = 1;
	}
	if (mouseX >= px[3] && mouseX <= px[3] + 200 && mouseY >= py[3] && mouseY <= py[3] + 200&&num[2]!=0) {
		fill("red");
		rect(px[3], py[3], 200);
		fill("black");
		text(num[2], px[3] + 75, py[3] + 135);
		chanP = 2;
	}
	if (mouseX >= px[4] && mouseX <= px[4] + 200 && mouseY >= py[4] && mouseY <= py[4] + 200&&num[3]!=0) {
		fill("red");
		rect(px[4], py[4], 200);
		fill("black");
		text(num[3], px[4] + 75, py[4] + 135);
		chanP = 3;
	}
	if (mouseX >= px[5] && mouseX <= px[5] + 200 && mouseY >= py[5] && mouseY <= py[5] + 200&&num[4]!=0) {
		fill("red");
		rect(px[5], py[5], 200);
		fill("black");
		text(num[4], px[5] + 75, py[5] + 135);
		chanP = 4;
	}
	if (mouseX >= px[6] && mouseX <= px[6] + 200 && mouseY >= py[6] && mouseY <= py[6] + 200&&num[5]!=0) {
		fill("red");
		rect(px[6], py[6], 200);
		fill("black");
		text(num[5], px[6] + 75, py[6] + 135);
		chanP = 5;
	}
	if (mouseX >= px[7] && mouseX <= px[7] + 200 && mouseY >= py[7] && mouseY <= py[7] + 200&&num[6]!=0) {
		fill("red");
		rect(px[7], py[7], 200);
		fill("black");
		text(num[6], px[7] + 75, py[7] + 135);
		chanP = 6;
	}
	if (mouseX >= px[8] && mouseX <= px[8] + 200 && mouseY >= py[8] && mouseY <= py[8] + 200&&num[7]!=0) {
		fill("red");
		rect(px[8], py[8], 200);
		fill("black");
		text(num[7], px[8] + 75, py[8] + 135);
		chanP = 7;
	}
	if (mouseX >= px[9] && mouseX <= px[9] + 200 && mouseY >= py[9] && mouseY <= py[9] + 200&&num[8]!=0) {
		fill("red");
		rect(px[9], py[9], 200);
		fill("black");
		text(num[8], px[9] + 75, py[9] + 135);
		chanP = 8;
	}
	if(mouseX >= 50&&mouseX<=350&&mouseY>=50&&mouseY<=150){
	if(difficult==8){
	difficult=7;
		fill("black");
		textSize(16);
		text("七か所揃ったら色が変化するようになりました",50,250)
	}
		else if(difficult==7){
			difficult=8
			fill("black");
		textSize(16);
		text("八か所揃ったら色が変化するようになりました",50,250)
		}
	}
}

function mouseReleased() {
	//マウスのボタンを離したとき
	background(255);
	if (mouseX >= mpx) {
		//最初クリックした位置から右に動かしたとき
		sumx = mouseX - mpx;//移動量をsumxに格納
		xallow = 0;
	} else if (mouseX < mpx) {
		//最初クリックした位置から左に動かしたとき
		sumx = mpx - mouseX;//移動量をsumxに格納
		xallow = 1;
	}
	if (mouseY >= mpy) {
		//最初クリックした位置から下に動かしたとき
		sumy = mouseY - mpy;//移動量をsumyに格納
		yallow = 0;
	} else {
		//最初クリックした位置から上に動かしたとき
		sumy = mpy - mouseY;//移動量をsumyに格納
		yallow = 1;
	}
	if (sumx > sumy) {//移動量が横軸の方が大きいとき
		if (xallow == 0) {//右に動かしているなら
			if (chanP != 2 && chanP != 5 && chanP != 8&&num[chanP+1]==0) {//右端が選択されていないときかつ移動先の配列の要素が0の時
				t = num[chanP]//一時的にtに格納
				num[chanP] = num[chanP + 1]//選んだ場所から一つ右の場所の値と入れ替える
				num[chanP + 1] = t//一時的に格納された値を一つ右の場所の値に入れる
			}
		}
		if (xallow == 1) {//左に動かしているなら
			if (chanP != 0 && chanP != 3 && chanP != 6&&num[chanP-1]==0) {//左端が選択されていないときかつ移動先の配列の要素が0の時
				t = num[chanP]
				num[chanP] = num[chanP - 1]
				num[chanP - 1] = t
			}
		}
	} else if (sumx < sumy) {//移動量が縦軸の方が大きいとき
		if (yallow == 0) {//下に動かしているなら
			if (chanP != 6 && chanP != 7 && chanP != 8&&num[chanP+3]==0) {//下端が選択されていないときかつ移動先の配列の要素が0の時
				t = num[chanP]
				num[chanP] = num[chanP + 3]
				num[chanP + 3] = t
			}
		}
		if (yallow == 1) {//上に動かしているなら
			if (chanP != 0 && chanP != 1 && chanP != 2&&num[chanP-3]==0) {//上端が選択されていないときかつ移動先の配列の要素が0の時
				t = num[chanP]
				num[chanP] = num[chanP - 3]
				num[chanP - 3] = t
			}
		}
	}
		let panelC=0;
			for(let n=0;n<9;n++){
			if(num[n]==n+1){
			panelC+=1;
			}
			}
	//パネルの枠を表示
		for(let n=1;n<10;n++){
			fill("white")
		if(num[n-1]==0){
		fill("gray")
		}
			rect(50,50,300,100);
			
			if (panelC>=difficult) {//もし数値が適切な位置なら
		//fill("red")//色をすべて赤にしておく
				randColor=1;
		}
			else{
			randColor=0;
			}
	rect(px[n], py[n], 200);
	}
	//数値を表示
		fill("black");
		textSize(100);
	for(let n=1;n<10;n++){
			if(num[n-1]!=0){
	text(num[n-1], px[n] + 75, py[n] + 135);
		}
	}
	textSize(50);
	text("難易度変更",60,120);
	//デバッグ用テキストを表示
		/*textSize(10);
		text(px[1],50,50);
		text(px[2],50,100);
		text(px[3],50,150);
		text(px[4],50,200);
		text(px[5],50,250);
		text(px[6],50,300);
		text(px[7],50,350);
		text(px[8],50,400);
		text(px[9],50,450);
		text(py[1],100,50);
		text(py[2],100,100);
		text(py[3],100,150);
		text(py[4],100,200);
		text(py[5],100,250);
		text(py[6],100,300);
		text(py[7],100,350);
		text(py[8],100,400);
		text(py[9],100,450);
		text(num[0],150,50);
		text(num[1],150,100);
		text(num[2],150,150);
		text(num[3],150,200);
		text(num[4],150,250);
		text(num[5],150,300);
		text(num[6],150,350);
		text(num[7],150,400);
		text(num[8],150,450);
		text("x",25,550);
		text(mpx,50,550);
		text(mouseX,100,550);
		text(xallow,150,550);
		text("y",25,600);
		text(mpy,50,600);
		text(mouseY,100,600);
		text(yallow,150,600);*/

	}