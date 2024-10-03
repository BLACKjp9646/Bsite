var marker_1,marker_2;
let select=0,Question_now=0;
let x=35,behindx=0;
let y=136,behindy=0;
let mapsize=11;
let q1,q2,a1,a2;
let latx=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let laty=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
for(let i=0;i<20;i++){
latx[i]=44-(i*0.5)
laty[i]=145-(i*0.5)
}
console.log(latx,laty)
let map;
const ATTRIBUTION = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
const ACCESS_TOKEN = "アクセストークン";

$(document).ready(()=>{
	
	$("#mondai_map").click(()=>{
		if(Question_now==0){
		if(behindx!=0 && behindy!=0 &&x!=0 && y!=0){
			Question_now=1;
		xdialog.open({
			title: "北？南？",
			body: "<p>前回よりも",
			modal:false,
			style: "width : 60% ; height : 40%",
			buttons: {
				ok: {
					text:"北",
					style:"background: blue"
				},
				cancel:{
					text:"南",
					style:"background: red"
				}
			},
			onok: (param)=>{//北選択
				q1=1;
				xdialog.open({
					title: "西？東？",
					body: "<p>前回よりも",
					modal:false,
					style: "width : 60% ; height : 40%",
					buttons: {
						ok: {
							text:"東",
							style:"background: blue"
						},
						cancel:{
							text:"西",
							style:"background: red"
						}
					}	,
					onok: (param)=>{//北→東選択
							q2=1
							if(behindx<=x){
									a1 = "正解！"
							}
								else{
									a1 = "不正解"
								}
							if(behindy<=y){
								a2="正解！"
							}
							else{
								a2="不正解"
							}
							console.log(a1,a2);
							xdialog.open({
								title: "",
								body: "<p>問１"+a1+"<p>問２"+a2,
								modal:false,
								style: "width : 60% ; height : 40%",
								buttons: {
									ok: {
										text:"確認",
										style:"background: blue"
									}
								},
								onok:( (param)=>{
									marker_1 = L.marker([x, y]).addTo(map);
								marker_2 = L.marker([behindx, behindy]).addTo(map);
									mapsize=6;
									map.setZoom(mapsize);
									Question_now=0;
								})
							})
						},
						oncancel: (param)=>{//北→西選択
							q2=2
							if(behindx<=x){
									a1="正解！"
							}
							else{
								a1="不正解"
							}
							if(behindy>y){
								a2="正解！"
							}
							else{
								a2="不正解"
							}
							console.log(a1,a2);
							xdialog.open({
								title: "",
								body: "<p>問１"+a1+"<p>問２"+a2,
								modal:false,
								style: "width : 60% ; height : 40%",
								buttons: {
									ok: {
										text:"確認",
										style:"background: blue"
									}
								},
								onok:( (param)=>{
									marker_1 = L.marker([x, y]).addTo(map);
								marker_2 = L.marker([behindx, behindy]).addTo(map);
									mapsize=6;
									map.setZoom(mapsize);
									Question_now=0;
								})
							})
						}
				})
			},
			oncancel: (param)=>{//南選択
				q1=2;
				xdialog.open({
					title: "西？東？",
					body: "<p>前回よりも",
					modal:false,
					style: "width : 60% ; height : 40%",
					buttons: {
						ok: {
							text:"東",
							style:"background: blue"
						},
						cancel:{
							text:"西",
							style:"background: red"
						}
					},
					onok: (param)=>{//南→東選択
						q2=1
						if(behindx>=x){
								a1="正解！"
						}
						else{
								a1="不正解"
						}
						if(behindy<=y){
							a2="正解！"
						}
						else{
							a2="不正解"
						}
						console.log(a1,a2);
						xdialog.open({
							title: "",
							body: "<p>問１"+a1+"<p>問２"+a2,
							modal:false,
							style: "width : 60% ; height : 40%",
							buttons: {
								ok: {
									text:"確認",
									style:"background: blue"
								}
								
							},
							onok:( (param)=>{
								marker_1 = L.marker([x, y]).addTo(map);
								marker_2 = L.marker([behindx, behindy]).addTo(map);
								mapsize=6;
								map.setZoom(mapsize);
								Question_now=0;
							})
						})
					},
					oncancel: (param)=>{//南→西選択
						q2=2
						if(behindx>=x){
							a1="正解！"
					}
					else{
							a1="不正解"
					}
						if(behindy>y){
							a2="正解！"
						}
						else{
							a2="不正解"
						}
						console.log(a1,a2);
						xdialog.open({
							title: "",
							body: "<p>問１"+a1+"<p>問２"+a2,
							modal:false,
							style: "width : 60% ; height : 40%",
							buttons: {
								ok: {
									text:"確認",
									style:"background: blue"
								}
							},
							onok:( (param)=>{
								marker_1 = L.marker([x, y]).addTo(map);
								marker_2 = L.marker([behindx, behindy]).addTo(map);
								mapsize=6;
								map.setZoom(mapsize);
								Question_now = 0;
							})
						})
					}
				})
			}
		});
	}
	else{
		xdialog.open({
			title: "注意",
			body: "<p>NEXTマップあるいは一個前のマップをクリックしてから再度問題をクリックしてください",
			modal:false,
			style: "width : 60% ; height : 40%",
			buttons: {
				ok: {
					text:"確認",
					style:"background: blue"
				}
			}
			})
	}
		console.log(behindx,x,behindy,y);
}
	});
	
	$("#Nextmap").click(()=>{
		if(Question_now==0){
			
		let lat_x,lng_y;
		let rand= Math.floor(Math.random()*20);
		lat_x = (Math.random(latx[rand-1]-latx[rand])+latx[rand])
		lng_y = (Math.random(laty[rand-1]-laty[rand])+laty[rand])
		behindx=x;
		behindy=y;
		x=lat_x;
		y=lng_y;
		console.log(x,y)
	map.panTo([x,y]);
	if(mapsize!=10){mapsize=11;map.setZoom(mapsize);}
	marker_1.remove();
			marker_2.remove();
		}
})
$("#Hintmap").click(()=>{
	if(Question_now==0){
	if(mapsize>=11){mapsize-=1}
	console.log(mapsize);
	map.setZoom(mapsize);
	}
})
$("#behind_back").click(()=>{
	if(Question_now==0){
if(behindx == 0&&behindy == 0){
	let rand= Math.floor(Math.random()*20);
	lat_x = (Math.random(latx[rand-1]-latx[rand])+latx[rand])
	lng_y = (Math.random(laty[rand-1]-laty[rand])+laty[rand])
	behindx= lat_x 
	behindy= lng_y 

}

console.log(behindx,behindy)
	map.panTo([behindx,behindy]);
}
})
$("#now_map").click(()=>{
	if(Question_now==0){
	map.panTo([x,y]);
	}
})
	// Leaflet

	
// Leaflet x Axios
const option = {"responseType":"blob"};//オプション
	// Leaflet
console.log(x,y)
let center = [x,y];
map = L.map("mapid", {
	attributionControl:false,
	zoomControl:false,
	boxZoom:false,
	zoomDelta:false,
	doubleClickZoom:false,
	keyboard:false,
	scrollWheelZoom:false,
	dragging: false// ここでドラッグ不能に!!
}).setView(center,mapsize);
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
	attribution: ATTRIBUTION,// 著作権表記
	accessToken: ACCESS_TOKEN,// アクセストークン
	id: "mapbox/streets-v11",// マップの種類
	
}).addTo(map);


})