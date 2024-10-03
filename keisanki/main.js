console.log("JS");
$(document).ready(()=>{
	console.log("Ready!!");
    $('input:radio[name="zeiritu"]').val(["1.1"]);
	$("#btn").click(()=>{
        let zei = 1.1;
        let sum = $("#kingaku_number").val();
        zei = $('input:radio[name="zeiritu"]:checked').val();
        if(zei==9646){
            zei =1+ ($("#zeiritu_number").val()*0.01);
        }
		$("#result").text(parseInt(sum*zei)+"円(内税金"+parseInt(sum*(zei-1))+"円)");    
	})
    $("#ni_btn").click(()=>{
        let nisin = $("#ni_number").val();
        let ni_num ="(２進数)";
        let cnt=0
        let ni_num2 =1
        $("#ni_result_2").text("");
        while (nisin !== 0) {
            if(nisin % 2==0){
                ni_num="0"+ni_num;
                nisin=parseInt(nisin-nisin/2)
                parseInt(nisin);
            }
            else{
                ni_num="1"+ni_num;
                nisin=parseInt(nisin-nisin/2)
            }
            cnt+=1;
            if(cnt>=4){
                cnt=0;
                ni_num=" "+ni_num;
            }
            $("#ni_result_2").prepend(ni_num2+" ");
            ni_num2*=2
        }
        console.log(nisin,ni_num);
		$("#ni_result").text(ni_num);
	})
});
