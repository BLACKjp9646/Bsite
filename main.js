let Displaytab=1;
let Displaytab_2=0;
let tab_length = 3 + 1;//タブの長さ
let Displaylength = 12;//表示件数
let Filterlength = 6;//フィルターの種類数
let id,Sortid;
let categorise = ["math","model","game","fightdebug","image","other"];
let Sortval = 1;

function htmlReload(tabnum,tabnum_2,active){
	let data = "SiteLinkData.json";
	let arrNum=1;
	let FirstarrNum = 0;
	let ForifNum = 0;
	Displaytab = tabnum;
	Displaytab_2 = tabnum_2;
	fetch(data)
		.then(function (response) {
		  return response.json();
		})
		.then(function (Datalist) {
		let filterdata =[];
		for(let n in Datalist.SiteData[0].all){
			for(let m = 0;m<Filterlength;m++){
				if(Datalist.SiteData[0].all[n].Category == categorise[m]){
					filterdata.push(Datalist.SiteData[0].all[n]);
				}
			}
		}
		let recomenddata =[];
		for(let n in Datalist.SiteData[0].recommend){
			for(let m = 0;m<Filterlength;m++){
				if(Datalist.SiteData[0].recommend[n].Category == categorise[m]){
					recomenddata.push(Datalist.SiteData[0].recommend[n]);
				}
			}
		}
		console.log("filter",filterdata);
		console.log("recomend",recomenddata);

		  if(tabnum==1){
			
				
			if(Sortval == 1){
				if(filterdata.length > Displaylength){
					FirstarrNum = filterdata.length-1;
					ForifNum = filterdata.length- Displaylength - 1//要素数-1-表示件数
				}
					else{
						FirstarrNum = filterdata.length-1
						ForifNum = -1
					}
					console.log("初期値",FirstarrNum)
			console.log("For",ForifNum,"要素数",filterdata.length-1);
				for(arrNum = FirstarrNum;arrNum>ForifNum;arrNum--){
				let title = filterdata[arrNum].Title
				let url = filterdata[arrNum].link
				let category = filterdata[arrNum].Category
				let image = filterdata[arrNum].image
				let date = filterdata[arrNum].Date
  			$("#nav_contents").append('<div id="col" class="col col-sm-6 col-md-4"><a href="'+url+'" id="nav_linkcont"><time>'+date+'作成</time><img class="img-fluid" src='+image+'><span id="'+category+'_list">'+category+'</span><p>'+title+'</p></a><div>')
		  	}
			}
			else if(Sortval == 2){//古い順
				if(filterdata.length > Displaylength){
					ForifNum = Displaylength;
				}
					else{
						ForifNum = filterdata.length//要素数-1
					}
					console.log("初期値",FirstarrNum)
			console.log("For",ForifNum,"要素数",filterdata.length-1);
				for(arrNum = 0;arrNum<ForifNum;arrNum++){
					let title = filterdata[arrNum].Title
  				let url = filterdata[arrNum].link
  				let category = filterdata[arrNum].Category
  				let image = filterdata[arrNum].image
  				let date = filterdata[arrNum].Date
					$("#nav_contents").append('<div id="col" class="col col-sm-6 col-md-4"><a href="'+url+'" id="nav_linkcont"><time>'+date+'作成</time><img class="img-fluid" src='+image+' width="300px"><span id="'+category+'_list">'+category+'</span><p>'+title+'</p></a><div>')
					}
			}
	  	}
		//オススメタブ表示
		else if(tabnum==2){
			if(Sortval == 1){
				if(recomenddata.length > Displaylength){
					FirstarrNum = recomenddata.length-1;
					ForifNum = recomenddata.length- Displaylength - 1//要素数-1-表示件数
				}
					else{
						FirstarrNum = recomenddata.length-1
						ForifNum = -1
					}
					console.log("初期値",FirstarrNum)
			console.log("For",ForifNum,"要素数",recomenddata.length-1);
				for(arrNum = FirstarrNum;arrNum>ForifNum;arrNum--){
				let title = recomenddata[arrNum].Title
				let url = recomenddata[arrNum].link
				let category = recomenddata[arrNum].Category
				let image = recomenddata[arrNum].image
				let date = recomenddata[arrNum].Date
  			$("#nav_contents").append('<div id="col" class="col col-sm-6 col-md-4"><a href="'+url+'" id="nav_linkcont"><time>'+date+'作成</time><img class="img-fluid" src='+image+'><span id="'+category+'_list">'+category+'</span><p>'+title+'</p></a><div>')
		  	}
			}
			else if(Sortval == 2){//古い順
				if(recomenddata.length > Displaylength){
					ForifNum = Displaylength;
				}
					else{
						ForifNum = recomenddata.length//要素数-1
					}
					console.log("初期値",FirstarrNum)
			console.log("For",ForifNum,"要素数",recomenddata.length-1);
				for(arrNum = 0;arrNum<ForifNum;arrNum++){
					let title = recomenddata[arrNum].Title
  				let url = recomenddata[arrNum].link
  				let category = recomenddata[arrNum].Category
  				let image = recomenddata[arrNum].image
  				let date = recomenddata[arrNum].Date
					$("#nav_contents").append('<div id="col" class="col col-sm-6 col-md-4"><a href="'+url+'" id="nav_linkcont"><time>'+date+'作成</time><img class="img-fluid" src='+image+' width="300px"><span id="'+category+'_list">'+category+'</span><p>'+title+'</p></a><div>')
					}
			}
		}
		//全てタブ表示
	  	else if(tabnum==3){
			if(active == true){//デフォルト
			$(".nav_tab_contents_2").append('<div class="nav_tab_2 nav_tab_active col row-cols-auto" id="tab_1">1</div>');
			for(let n=2;n<tab_length;n++){//タブの長さは変数で可変
				$(".nav_tab_contents_2").append('<div class="nav_tab_2 col row-cols-auto" id="tab_'+n+'">'+n+'</div>');
			}
		}
		else{//全ての第二タブクリック時
			
			for(let n=1;n<tab_length;n++){//タブの長さは変数で可変
				if(tabnum_2 == n){
					$(".nav_tab_contents_2").append('<div class="nav_tab_2 nav_tab_active col row-cols-auto" id="tab_'+n+'">'+n+'</div>');
				}
				else{
					$(".nav_tab_contents_2").append('<div class="nav_tab_2 col row-cols-auto" id="tab_'+n+'">'+n+'</div>');
				}
			}
		}
		if(Sortval == 1){
			if(((tabnum_2)*Displaylength)>filterdata.length){
				//表示件数以下のタブの設定
				FirstarrNum = filterdata.length-1- ((tabnum_2-1)*Displaylength);
				ForifNum = -1;
			}
			else{
				//表示件数以上のタブの設定
				FirstarrNum = filterdata.length-1 -((tabnum_2-1)*Displaylength)
				ForifNum = filterdata.length- ((tabnum_2)*Displaylength) - 1//要素数-1-表示件数
			}
			console.log("初期値",FirstarrNum)
			console.log("For",ForifNum,"要素数",filterdata.length-1);
			
			//初期値 = データの要素数-1+(表示タブ-1 x Displaylength) ;　初期値（表示タブ*Displaylengthの数）から-Displaylengthの数表示し終わったら　;　1減らし続ける
		  	for(arrNum = FirstarrNum;arrNum>ForifNum;arrNum--){
  				let title = filterdata[arrNum].Title
  				let url = filterdata[arrNum].link
  				let category = filterdata[arrNum].Category
  				let image = filterdata[arrNum].image
  				let date = filterdata[arrNum].Date
  				$("#nav_contents").append('<div id="col" class="col col-sm-6 col-md-4"><a href="'+url+'" id="nav_linkcont"><time>'+date+'作成</time><img src='+image+' width="300px"><span id="'+category+'_list">'+category+'</span><p>'+title+'</p></a><div>')
		  	}
		}
		else if(Sortval == 2){
			if(filterdata.length > Displaylength){
				ForifNum = tabnum_2 * Displaylength;//表示タブx表示数
			}
				else{
					ForifNum = filterdata.length
				}
				console.log("初期値",FirstarrNum)
				console.log("For",ForifNum,"要素数",filterdata.length-1);
			for(arrNum = (tabnum_2-1) * Displaylength;arrNum<ForifNum;arrNum++){
				let title = filterdata[arrNum].Title
			  let url = filterdata[arrNum].link
			  let category = filterdata[arrNum].Category
			  let image = filterdata[arrNum].image
			  let date = filterdata[arrNum].Date
				$("#nav_contents").append('<div id="col" class="col col-sm-6 col-md-4"><a href="'+url+'" id="nav_linkcont"><time>'+date+'作成</time><img class="img-fluid" src='+image+' width="300px"><span id="'+category+'_list">'+category+'</span><p>'+title+'</p></a><div>')
				}
		}
	  	}
		console.log(arrNum)
  	})
}

//初回読み込み時
let Age,Year,Mouth;
let date = new Date()
Year = date.getFullYear();
Mouth = date.getMonth() + 1;
Age = (Year - 2004)+ (Math.round(((Mouth/12)-1)*10) /10);
console.log(Age)
$("#age_text").text("年齢:"+Age+"歳")
htmlReload(1);


//aタグのReturnFalse設定↓ここから
$(".a_cant_return").click((e)=>{
	return false;
})
//ここまで
//フィルター関連↓ここから
$("#Filter_CheckButton").click((e)=>{
for(let n = 0;n<Filterlength;n++){
	if($('#checkbox_'+n).is(':checked')==true){
		categorise[n]=$('#checkbox_'+n).val()
	}
	else{
		categorise[n]="";
	}
}
$(".nav_tab_contents_2").children().remove();
$("#nav_contents").children().remove();
htmlReload(Displaytab,1);
console.log(categorise);
})
$("#checkbox_all").change((e)=>{
		for(let n = 0;n<Filterlength;n++){
		$('#checkbox_'+n).prop("checked",$("#checkbox_all").is(":checked"));
		}	
})
//フィルター関連↑ここまで

//ソート関連↓ここから
$(".SortFilter li").on('click', function(){//li要素はonクリック
	//idを取得
	Sortval = $(this).index()+1;
	console.log("SortID",$(this).attr("id"));
	if(Sortval != 0){
		$(".nav_tab_contents_2").children().remove();
		$("#nav_contents").children().remove();
		htmlReload(Displaytab,1);
	}
})
//ソート関連↑ここまで

//タブ関連↓ここから
$(".nav_tab_contents_2").click((e)=>{
	//idを取得
id = $(e.target).attr("id");
tabnum_2 = id[id.length-1];
console.log(id,tabnum_2);
$(".nav_tab_contents_2").children().remove();
$("#nav_contents").children().remove();
		htmlReload(3,tabnum_2,false);
})

$(".nav_tab_1").click((e)=>{

	// タブの切り替え
	$(".nav_tab_1").removeClass("nav_tab_active");// クラスを削除
	$(e.target).addClass("nav_tab_active");// クラスを設定
	// IDを取得
	id = $(e.target).attr("id");
	console.log(id);

	if(id == "tab_a"){
		$(".nav_tab_contents_2").children().remove();
		$("#nav_contents").children().remove();
		htmlReload(1);
	}

	if(id == "tab_b"){
		$(".nav_tab_contents_2").children().remove();
		$("#nav_contents").children().remove();
		htmlReload(2);
	}

	if(id == "tab_c"){
		$(".nav_tab_contents_2").children().remove();
		$("#nav_contents").children().remove();
		htmlReload(3,1);
	}
}); 
//タブ関連↑ここまで



	  