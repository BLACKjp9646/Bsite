let img_num_1,img_num_2,img_num_3,img_num_4,img_num_5,img_num_6,nowimg_1;
let tabA_text = "<h2 id='sub_title'>アビリティ</h2>"+`<br>`+"赤い背景のひし形の枠組のスキルはアビリティです。"+`<br>`;
tabA_text+="スキルツリーで取得後、条件を満たすと使えるようになります。"+`<br>`;
tabA_text+="・装備中のスキルスロットに装備されている"+`<br>`
tabA_text+="・スキルのクールタイムが終わっている"+`<br>`
tabA_text+="・武器を装備していて攻撃などをしていない時"+`<br>`
let tabB_text = "<h2 id='sub_title'>チャージアビリティ(CA)</h2>"+`<br>`+"紫の背景のひし形の枠組のスキルはチャージアビリティです。"+`<br>`;
tabB_text+="どのスキルも強力な反面、攻撃によって溜まっていく左上の専用のゲージを消費します。"+`<br>`;
tabB_text+="スキルツリーで取得後、条件を満たすと使えるようになります。"+`<br>`
tabB_text+="・装備中のスキルスロットに装備されている"+`<br>`
tabB_text+="・アビリティ使用に必要なゲージが溜まっている"+`<br>`
tabB_text+="・武器を装備していて攻撃などをしていない時"+`<br>`
let tabC_text ="<h2 id='sub_title'>ハーフパッシブ(H.P)</h2>"+`<br>`+"丸い枠組のスキルはハーフパッシブです。"+`<br>`;
tabC_text +="スキルツリーで取得後、スキルスロットに装備することで効果を発揮します。"+`<br>`
tabC_text +="ただし、ハーフパッシブを装備したスキルスロットを装備しないと効果を発揮しません。"+`<br>`
let tabD_text ="<h2 id='sub_title'>フルパッシブ(F.P)</h2>"+`<br>`+"四角い枠組のスキルはフルパッシブです。"+`<br>`;
tabD_text +="スキルツリーで取得後、基本的に無条件で効果を発揮します。"+`<br>`
$(document).ready(()=>{
    img_num_1 = "game_img_2.png";//差し替える画像1つ目
    img_num_2 = "game_img_3.png";//差し替える画像2つ目
    img_num_3 = "game_img_4.png";//差し替える画像3つ目
    img_num_4 = "game_img_5.png";//差し替える画像4つ目
    img_num_5 = "game_img_6.png";//差し替える画像5つ目
    img_num_6 = "game_img_7.png";//差し替える画像6つ目
    nowimg_1 = img_num_1;//現在の画像情報
    setTimeout(imgChange,10000);//1500ms待ってから指定関数呼び出し
    $("#tab_a").addClass("imgitem_active");// クラスを設定
    $("#expo_text").html(tabA_text);
   // Click
	$(".imgitem").click((e)=>{

		// タブの切り替え
		$(".imgitem").removeClass("imgitem_active");// クラスを削除
		$(e.target).addClass("imgitem_active");// クラスを設定

		// IDを取得
		const id = $(e.target).attr("id");
		console.log(id);

		if(id == "tab_a"){
			$("#expo_text").html(tabA_text);
		}

		if(id == "tab_b"){
			$("#expo_text").html(tabB_text);
		}

		if(id == "tab_c"){
			$("#expo_text").html(tabC_text);
		}
        if(id == "tab_d"){
			$("#expo_text").html(tabD_text);
		}
	}); 
});

function imgChange(){//画像を変更する関数
    
    if(nowimg_1===img_num_1){//画像情報によって処理を変更
        nowimg_1 = img_num_2;//2つ目の画像の情報を入れる
    }
    else if(nowimg_1===img_num_2){
        nowimg_1 = img_num_3;//3つ目の画像の情報
    }
    else if(nowimg_1===img_num_3){
        nowimg_1 = img_num_4;//4つ目の画像の情報
    }
    else if(nowimg_1===img_num_4){
        nowimg_1 = img_num_5;//5つ目の画像の情報
    }
    else if(nowimg_1===img_num_5){
        nowimg_1 = img_num_6;//6つ目の画像の情報
    }
    else if(nowimg_1===img_num_6){
        nowimg_1 = img_num_1;//1つ目の画像の情報
    }
    console.log(nowimg_1);
    $("#img_1").attr("src",'./images/'+nowimg_1);//画像の差し替え
    $("#img_1").fadeTo(1000,1);//0秒かけて透過値を1にする(画像再表示)
    setTimeout(DelayTime,1500);//1500ms待ってから指定関数呼び出し
    
} 
function DelayTime(){
    setTimeout(DelayFadeout,7500);//7500ms待ってから指定関数呼び出し
    setTimeout(imgChange,10000);//1500ms待ってから指定関数呼び出し
    
}
function DelayFadeout(){
    $("#img_1").fadeTo(1500,0);//0秒かけて透過値を1にする(画像再表示)
}