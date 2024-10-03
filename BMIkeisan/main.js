$(document).ready(()=>{
	$("#btn").click(()=>{
        let BMI = 0;
        let taijuu = $("#taijuu").val();
        let sintyou = $("#sintyou").val()/100;
        let nulltext="";
        if(taijuu!=0&&sintyou!=0){
            nulltext="";
        BMI =parseInt(((taijuu/(sintyou*sintyou))*10))/10;
		$("#result").text("BMIは"+BMI);    
        }
        else{
            if(taijuu==0){
                nulltext+="体重,"
            }
            if(sintyou==0){
                nulltext+="身長,"
            }
            nulltext=nulltext.substr( 0, nulltext.length -1 );
            $("#result").text(nulltext+"に数値を入力してください");    
        }
	})
});
