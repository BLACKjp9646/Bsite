//ストレージの定義
const storage = localStorage;
let uiClick = 0;
let now_user="",now_pass="",now_count=100000;
$(document).ready(()=>{

/*Debug zero*/
$("#egg_datasave").click(()=>{
	if(uiClick==0){
	if(now_user != ""){
		let eggsave = {pass:now_pass,count: now_count};
		storage.setItem(now_user, JSON.stringify(eggsave));
		uiClick=1;
		xdialog.open({
			title: "保存成功！",
			body: "<p>データが"+now_user+"に保存されました！</p>",
			modal:false,
		style: "width : 60% ; height : 40%",
		buttons: {
			ok: {
				text:"OK",
				style:"background: blue"
			}
		},
		onok: (param)=>{
			uiClick=0;
		}
		})
	}
	else{
		uiClick=1;
	xdialog.open({
		title: "データ作成",
		body: `<div>Username<input id="egg_user" type="text" ></div>
		<div>Password<input id="egg_pass" type="text" ></div>`,
		modal:false,
		style: "width : 60% ; height : 40%",
		buttons: {
			ok: {
				text:"データ保存",
				style:"background: blue"
			},
			cancel:{
				text:"やっぱやめる",
				style:"background: red"
			}
		},
		onok: (param)=>{
			now_user=$("#egg_user").val();
			now_pass=$("#egg_pass").val();
			let eggsave = {pass: $("#egg_pass").val(),count: now_count};
			storage.setItem(now_user, JSON.stringify(eggsave));
			const data = JSON.parse(storage.getItem(now_user)); 
			console.log(data.pass);
    		console.log(data.count);
			uiClick=0;
		}
	})
			
}
	}
})
$("#egg_datadelete").click(()=>{
	if(uiClick==0){
	if(now_user!=""){
		uiClick=1;
		xdialog.open({
			title: "データ削除？",
			body: `<p>本当に現在のデータを削除しますか？元には戻りません</p>`,
			modal:false,
			style: "width : 60% ; height : 40%",
			buttons: {
				ok: {
					text:"削除",
					style:"background: red"
				},
				cancel:{
					text:"やっぱやめる",
					style:"background: blue"
				}
			},
			onok: (param)=>{
				storage.removeItem(now_user);
				now_user=""
				now_pass=""
				uiClick=0;
			},
			oncancel: (param)=>{
				uiClick=0;
			}
		})
	}
	}
	else{
		xdialog.open({
			title: "データがないぞ",
			body: `<p>保存されたデータが存在しない、あるいは消去済みです。</p>`,
			modal:false,
			style: "width : 60% ; height : 40%",
			buttons: {
				ok: {
					text:"OK",
					style:"background: blue"
				}
			},
			onok: (param)=>{
				uiClick=0;
			}
	})
	}
	
})
$("#egg_dataload").click(()=>{
	if(uiClick==0){
		uiClick=1;
	xdialog.open({
		title: "データ呼出",
		body: `<div>Username<input id="egg_user" type="text" ></div>
		<div>Password<input id="egg_pass" type="text" ></div>`,
		modal:false,
		style: "width : 60% ; height : 40%",
		buttons: {
			ok: {
				text:"OK",
				style:"background: blue"
			},
			cancel:{
				text:"やっぱやめる",
				style:"background: red"
			}
		},
		onok: (param)=>{
			now_user=$("#egg_user").val();
			now_pass=$("#egg_pass").val();
			console.log(storage.getItem(now_user));
			if(storage.getItem(now_user)!=null){
			const data = JSON.parse(storage.getItem(now_user));
			if(data.pass==$("#egg_pass").val()){
				console.log(data.pass);
    		console.log(data.count);
			now_count=data.count;
			$("#egg_counter").text(now_count);
			uiClick=0;
			}
			else{
				xdialog.open({
					title: "パスワードがちがう！",
					body: `<p>ユーザーネームかパスワードが違います。</p>`,
					modal:false,
					style: "width : 60% ; height : 40%",
					buttons: {
						ok: {
							text:"OK",
							style:"background: blue"
						}
					},
					onok: (param)=>{
						uiClick=0;
					}
					
			})
			}
			
		}
		else{
			xdialog.open({
				title: "なにかがちがう！",
				body: `<p>ユーザーネームかパスワードが違います。</p>`,
				modal:false,
				style: "width : 60% ; height : 40%",
				buttons: {
					ok: {
						text:"OK",
						style:"background: blue"
					}
				},
				onok: (param)=>{
					uiClick=0;
				}
		})
		}
	},
	oncancel: (param)=>{
		uiClick=0;
	}
	})
}
})
$("#egg").click(()=>{
if(now_count>0){
	now_count-=1;
	$("#egg_counter").text(now_count);
	if(now_count%100==0){
		$("#egg").addClass("animate__shakeX")
	}
	else{
		$("#egg").removeClass("animate__shakeX")
	}
}
else{
$("#egg").attr("src","./tomasu.png");
$("#egg_counter").text("またせたな");
}
})
})