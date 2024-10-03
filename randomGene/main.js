let randhead=1,randdata=0;
let rand=0;
let random_result_text="null"
let log_data = []
let log_detail_data = []
let data_count = 0
let judge = true;


$(".btn-primary").on('click', function(){
    let date = new Date()
    random_result_text = ""
    randdata = $(this).attr("id")
    if(randdata == "user_input"){
        randhead = $("#user_input_1").val()
        randdata = $("#user_input_2").val()
    }
    else{
        //idを乱数を作る個数と範囲に分ける
        randhead = randdata[0]
        randdata = randdata.substring(1);
    }
    //乱数を指定数生成する
for(let n = 0;n<randhead;n++){
    random_result_text+=Math.floor(Math.random()*randdata+1);
    random_result_text+=" "
}
if(randhead==1&&randdata==100&&judge==true){
    //idが1100(1D100)の時かつ判定をする時にクリファンの表示
if(random_result_text >= 96){
    random_result_text += " ファンブル！"
}
else if(random_result_text <= 5){
    random_result_text += " クリティカル！"
}
}
$(this).parent().find($("h3")).text(random_result_text)
//詳細ログと簡易ログを配列に格納する
log_detail_data[data_count] = date.getMonth() + "/" + date.getDate()+ " " + date.getHours() + "時" + date.getMinutes() + "分" + date.getSeconds() + "秒 "
log_detail_data[data_count] +=(random_result_text+'(' + randhead + 'D' + randdata + ')')
log_data[data_count] = random_result_text+'('+randhead+'D'+ randdata + ')'
//ログの数が20を超えたら最初のログから消していく
if(data_count >= 20){
    log_data.shift()
    log_detail_data.shift()
    data_count=20
}
else{data_count+=1}
console.log("簡易ログ",log_data,"詳細ログ",log_detail_data)
log_update()
})

$("#log_detail").click(()=>{
    log_update()
})

$("#random_judge").click(()=>{
    judge = $("#random_judge input").prop('checked')
})

//ログを更新する関数
function log_update(){
    $('#random_log').children().remove();
    if($("#log_detail input").prop('checked')){
        //詳細にチェックがついているとき
        for(let n = 0;n<data_count;n++){
            $("#random_log").append('<li>'+ log_detail_data[n] +'</li>')
        }
    }
    else{
        //詳細のチェックが外れているとき
        for(let n = 0;n<data_count;n++){
            $("#random_log").append('<li>'+ log_data[n] +'</li>')
        }
    }
}