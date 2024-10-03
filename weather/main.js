const dayList = ["日", "月", "火", "水", "木", "金", "土"];
const weatherCode = {
	100: ["晴れ"],
	101: ["晴れ時々曇り"],
	102: ["晴れ一時雨"],
	103: ["晴れ時々雨"],
	104: ["晴れ一時雪"],
	105: ["晴れ時々雪"],
	106: ["晴れ一時雨か雪"],
	107: ["晴れ時々雨か雪"],
	108: ["晴れ一時雨か雷雨"],
	110: ["晴れ後時々曇り"],
	111: ["晴れ後曇り"],
	112: ["晴れ後一時雨"],
	113: ["晴れ後時々雨"],
	114: ["晴れ後雨"],
	115: ["晴れ後一時雪"],
	116: ["晴れ後時々雪"],
	117: ["晴れ後雪"],
	118: ["晴れ後雨か雪"],
	119: ["晴れ後雨か雷雨"],
	120: ["晴れ朝夕一時雨"],
	121: ["晴れ朝の内一時雨"],
	122: ["晴れ夕方一時雨"],
	123: ["晴れ山沿い雷雨"],
	124: ["晴れ山沿い雪"],
	125: ["晴れ午後は雷雨"],
	126: ["晴れ昼頃から雨"],
	127: ["晴れ夕方から雨"],
	128: ["晴れ夜は雨"],
	130: ["朝の内霧後晴れ"],
	131: ["晴れ明け方霧"],
	132: ["晴れ朝夕曇り"],
	140: ["晴れ時々雨と雷"],
	160: ["晴れ一時雪か雨"],
	170: ["晴れ時々雪か雨"],
	181: ["晴れ後雪か雨"],
	200: ["曇り"],
	201: ["曇り時々晴れ"],
	202: ["曇り一時雨"],
	203: ["曇り時々雨"],
	204: ["曇り一時雪"],
	205: ["曇り時々雪"],
	206: ["曇り一時雨か雪"],
	207: ["曇り時々雨か雪"],
	208: ["曇り一時雨か雷雨"],
	209: ["霧"],
	210: ["曇り後時々晴れ"],
	211: ["曇り後晴れ"],
	212: ["曇り後一時雨"],
	213: ["曇り後時々雨"],
	214: ["曇り後雨"],
	215: ["曇り後一時雪"],
	216: ["曇り後時々雪"],
	217: ["曇り後雪"],
	218: ["曇り後雨か雪"],
	219: ["曇り後雨か雷雨"],
	220: ["曇り朝夕一時雨"],
	221: ["曇り朝の内一時雨"],
	222: ["曇り夕方一時雨"],
	223: ["曇り日中時々晴れ"],
	224: ["曇り昼頃から雨"],
	225: ["曇り夕方から雨"],
	226: ["曇り夜は雨"],
	228: ["曇り昼頃から雪"],
	229: ["曇り夕方から雪"],
	230: ["曇り夜は雪"],
	231: ["曇り海岸霧か霧雨"],
	240: ["曇り時々雨と雷"],
	250: ["曇り時々雪と雷"],
	260: ["曇り一時雪か雨"],
	270: ["曇り時々雪か雨"],
	281: ["曇り後雪か雨"],
	300: ["雨"],
	301: ["雨時々晴れ"],
	302: ["雨時々止む"],
	303: ["雨時々雪"],
	304: ["雨か雪"],
	306: ["大雨"],
	308: ["雨で暴風を伴う"],
	309: ["雨一時雪"],
	311: ["雨後晴れ"],
	313: ["雨後曇り"],
	314: ["雨後時々雪"],
	315: ["雨後雪"],
	316: ["雨か雪後晴れ"],
	317: ["雨か雪後曇り"],
	320: ["朝の内雨後晴れ"],
	321: ["朝の内雨後曇り"],
	322: ["雨朝晩一時雪"],
	323: ["雨昼頃から晴れ"],
	324: ["雨夕方から晴れ"],
	325: ["雨夜は晴れ"],
	326: ["雨夕方から雪"],
	327: ["雨夜は雪"],
	328: ["雨一時強く降る"],
	329: ["雨一時みぞれ"],
	340: ["雪か雨"],
	350: ["雨で雷を伴う"],
	361: ["雪か雨後晴れ"],
	371: ["雪か雨後曇り"],
	400: ["雪"],
	401: ["雪時々晴れ"],
	402: ["雪時々止む"],
	403: ["雪時々雨"],
	405: ["大雪"],
	406: ["風雪強い"],
	407: ["暴風雪"],
	409: ["雪一時雨"],
	411: ["雪後晴れ"],
	413: ["雪後曇り"],
	414: ["雪後雨"],
	420: ["朝の内雪後晴れ"],
	421: ["朝の内雪後曇り"],
	422: ["雪昼頃から雨"],
	423: ["雪夕方から雨"],
	425: ["雪一時強く降る"],
	426: ["雪後みぞれ"],
	427: ["雪一時みぞれ"],
	450: ["雪で雷を伴う"],
  };
const weather_area_name_list = {
	sibuya:"011000",
	uekami:"012000",
	tsunabashiri:"013000",
	kusiro:"014100",
	hidaka:"015000",
	isigari:"016000",
	watarijima:"017000",
	tugaru:"020000",
	nairiku:"030000",
	toubu:"040000",
	akita:"050000",
	yamagata:"060000",
	nakadoori:"070000",
	ibaraki:"080000",
	totigi:"090000",
	nanbu:"100000",
	saitama:"110000",
	tiba:"120000",
	tokyo:"130000",
	kanagawa:"140000",
	yamanasi:"190000",
	nagano:"200000",
	gifu:"210000",
	sizuoka:"220000",
	aiti:"230000",
	mie:"240000",
	niigata:"150000",
	toyama:"160000",
	isikawa:"170000",
	hukui:"180000",
	nanbu:"250000",
	kyoto:"260000",
	oosaka:"270000",
	koube:"280000",
	nara:"290000",
	wakayama:"300000",
	tottori:"310000",
	matue:"320000",
	okayama:"330000",
	hirosima:"340000",
	tokusima:"360000",
	kagawa:"370000",
	ehime:"380000",
	kouti:"390000",
	hukuoka:"400000",
	saga:"410000",
	nagasaki:"420000",
	kumamoto:"430000",
	ooita:"440000",
	miyazaki:"450000",
	kagosima:"460100",
	okinawa:"471000",
	oohigasi:"472000",
	miyakojima:"473000",
	yaeyama:"474000"
}
$(document).ready(()=>{
	
	  $("#weather_point").click(()=>{
				let url = "https://www.jma.go.jp/bosai/forecast/data/forecast/"+weather_area_name_list[$("#weather_list").val()]+".json";
		
		
	  const timeDefinesList = new Array();
	  const weatherCodeList = new Array();
	  const tempsMinList = new Array();
	  const tempsMaxList = new Array();
	  fetch(url)
	  .then(function (response) {
		return response.json();
	  })
	  .then(function (weather) {
		const isTodaysData = weather[0].timeSeries[2].timeDefines.length === 4;
		const weatherCodes = weather[0].timeSeries[0].areas[0].weatherCodes;
		const timeDefines = weather[0].timeSeries[0].timeDefines;
		const temps = weather[0].timeSeries[2].areas[0].temps;
		timeDefinesList.push(timeDefines[0], timeDefines[1]);
		weatherCodeList.push(weatherCodes[0], weatherCodes[1]);
		if (isTodaysData) {
		  tempsMinList.push(temps[0] === temps[1] ? "--" : temps[0], temps[2]);
		  tempsMaxList.push(temps[1], temps[3]);
		} else {
		  tempsMinList.push("--", temps[0]);
		  tempsMaxList.push("--", temps[1]);
		}
	
		const startCount =
		  weather[1].timeSeries[0].timeDefines.indexOf(timeDefines[1])+1;
		for (let i = startCount; i < startCount + 5; i++) {
		  weatherCodeList.push(weather[1].timeSeries[0].areas[0].weatherCodes[i]);
		  timeDefinesList.push(weather[1].timeSeries[0].timeDefines[i]);
		  tempsMinList.push(weather[1].timeSeries[1].areas[0].tempsMin[i]);
		  tempsMaxList.push(weather[1].timeSeries[1].areas[0].tempsMax[i]);
		}
	
		const date = document.getElementsByClassName("weather_date");
    const weather_prediction = document.getElementsByClassName("weather");
    const tempMin = document.getElementsByClassName("weather_mintemp");
    const tempMax = document.getElementsByClassName("weather_maxtemp");
	
		weatherCodeList.forEach(function (el, i) {
		  let dt = new Date(timeDefinesList[i]);
		  let weekdayCount = dt.getDay();
		  if (weekdayCount === 0) date[i].style.color = "red";
		  if (weekdayCount === 6) date[i].style.color = "blue";
		  var m = ("00" + (dt.getMonth() + 1)).slice(-2);
		  var d = ("00" + dt.getDate()).slice(-2);
		  date[i].textContent = " "+m+"/"+d+" ("+dayList[weekdayCount]+")";
		  var isNight = Number(i === 0 && !isTodaysData)
		  weather_prediction[i].textContent = weatherCode[el];
		  tempMin[i].textContent = tempsMinList[i] + "℃";
		  tempMax[i].textContent = tempsMaxList[i] + "℃";
		});
	  });	
	  console.log(timeDefinesList,weatherCodeList,tempsMinList,tempsMaxList)
	})
});