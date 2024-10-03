console.log("JS");
$(document).ready(()=>{
	console.log("Ready!!");
	$("#btn").click(()=>{
        let gasorin = 0;
        let gas = $("#gasorin_kingaku").val();
        let kyori = $("#soukou_kyori").val();
        let nenpi = $("#kuruma_nenpi").val();
        let nulltext="";
        if(gas!=0&&kyori!=0&&nenpi!=0){
            nulltext="";
        gasorin = gas*kyori/nenpi;
		$("#result").text("ガソリン代は"+parseInt(gasorin)+"円");    
        }
        else{
            
            if(gas==0){
                nulltext+="ガソリン価格,"
            }
            if(kyori==0){
                nulltext+="走行距離,"
            }
            if(nenpi==0){
                nulltext+="燃費,"
            }
            nulltext=nulltext.substr( 0, nulltext.length -1 );
            console.log(gas,nenpi,kyori,nulltext);
            $("#result").text(nulltext+"に数値を入力してください");    
        }
	})
});
