let chance_num,chance_detail_num,chance_count,chance_detail_count;
let chance_result = 0,chance_detail_result=0;
let chance_result_temp=0
let chance_table_result = [];
let chance_table_detail_result = [["0"],["1"],["2"],["3"],["4"],["5"],[""]];

function kaijou(k){
    //引数kの階乗を出力する
    let kaijou = k
    let temp = BigInt(1)
    for(let m = 1;m<=kaijou;m++){temp=(BigInt(m)*temp)}
    return temp
}
/** 
 * @param {number} n 試行回数
 * @param {number} k 当てる回数
 * @param {number} p 当たる確率
 * @param {number} keta 表示桁数
 * @returns {number} nCkpkqnk(確率)を返す
 */
function nikoubunpu(n,k,p,keta){
let trycount= n;//試行回数
let hitcount = k;//当てる回数
let hitchance = p/100;//当たる確率(%を数値に変換している)
let misschance = 1-p/100;//外れる確率
let visr_num = keta//小数点以下表示桁数
let nCk,pk,qnk
let ans
nCk = parseFloat(kaijou(trycount)/(kaijou(trycount-hitcount)*kaijou(hitcount)))
pk = hitchance ** hitcount
qnk = misschance**(trycount-hitcount)
//console.log("nCk",nCk)
//console.log("pk",pk)
//console.log("qnk",qnk)
ans = parseInt((nCk * pk * qnk)*100*(10**visr_num))//nCkpkqnkの値が0.~になるので100かけている
ans/=(10**visr_num)
return ans
}

$("#chance_math").on('click', function(){
    chance_num = $("#chance_num").val()
    chance_count = $("#chance_count").val()
    //ここから確率計算
    chance_result = parseInt((1 - ((1-(chance_num/100))**chance_count))*1000)
    chance_result/=10

    chance_result_temp=0;
    for(let n=0;n<5;n++){
    chance_table_result[n]=nikoubunpu(chance_count,n,chance_num,1);
    chance_result_temp += chance_table_result[n]
    }
    chance_result_temp = 1000 - parseInt(chance_result_temp*10)
    chance_result_temp/=10
    console.log(chance_result_temp)
    chance_table_result[5]= chance_result_temp;
    console.log(chance_result)
    console.log(chance_table_result)
    //ここまで確率計算

    $("#chance_result h3").text('排出率'+chance_num+'%を'+chance_count+'回引いて当たる確率は')
    $("#chance_result h2").text(chance_result+'%')
    $("#chance_table #chance_table_result").children().remove();
    $("#chance_table #chance_table_result").append('<td>確率</td>');
    for(let n=0;n<6;n++){
        $("#chance_table #chance_table_result").append('<td>'+chance_table_result[n]+'%</td>');
    }
})

$("#chance_detail_math").on('click', function(){
    let detail_count_list = [10,20,50,100,200,300]//試行回数(加工後)
    let detail_hitnum_list = [0,1,2,3,4,5,6]//当てる回数
    chance_num = $("#chance_detail_num").val()//排出率
    let digit = $("#chance_detail_digit").val()//表示桁数
    detail_hitnum_list[6] = $("#chance_detail_hitcount").val()//ユーザー任意の当てる回数
    let bonus = $("#chance_detail_bonus").val()//回数ボーナス
    let bonus_temp
    detail_count_list[5] = parseInt($("#chance_detail_count").val())//ユーザー任意の試行回数
    //detail_hitnum_list[5] = $("#chance_detail_count").val()
    //ここから確率計算

    //試行回数(加工後)
    if(bonus>0){
    for(let n=0;n<5;n++){
        bonus_temp =detail_count_list[n]
        while(bonus_temp>=bonus){
            bonus_temp-=bonus
            detail_count_list[n]+=1
        }
    }
}
console.log(detail_count_list)
    chance_result_temp=0;
    for(let m=0;m<7;m++){
        chance_table_detail_result[m][0]=m +"枚";   
    for(let n=0;n<6;n++){
        //console.log("m",m,"n",n)
        //console.log("count",detail_count_list[m],"hitnum",detail_hitnum_list[n],"chance",chance_num)
    chance_table_detail_result[m][n+1]=nikoubunpu(detail_count_list[n],detail_hitnum_list[m],chance_num,digit);
    //chance_result_temp += chance_table_detail_result[m][n]
    }
}
    //chance_result_temp = 1000 - parseInt(chance_result_temp*10)
    //chance_result_temp/=10
    //console.log(chance_result_temp)
    //chance_table_result[5]= chance_result_temp;
    console.log(chance_table_detail_result)
    //ここまで確率計算

    $("#detail_count_table").children().remove();
    $("#detail_count_table").append('<td></td>')
    for(let m=0;m<6;m++){
        if(m==5){$("#detail_count_table").append('<td><input id="chance_detail_count" type="number" value='+detail_count_list[m]+' style="text-align: center; placeholder="詳細値4""></td>');}
        else{$("#detail_count_table").append('<td>'+detail_count_list[m]+'</td>');}
    }
    for(let m=1;m<8;m++){
        $("#detail_table_"+m).children().remove();
        if(m==7){$("#detail_table_"+m).append('<td><input id="chance_detail_hitcount" type="number" value='+detail_hitnum_list[m-1]+' style="text-align: center; placeholder="詳細値5""></td>');}
        else{$("#detail_table_"+m).append('<td>'+chance_table_detail_result[m-1][0]+'</td>');}
    for(let n=1;n<7;n++){
        $("#detail_table_"+m).append('<td>'+chance_table_detail_result[m-1][n]+'%</td>');
    }
}
})

$("#change_chance_num").change(()=>{
    $("#chance_num").val($("#change_chance_num").val())
})
$("#change_chance_count").change(()=>{
    $("#chance_count").val($("#change_chance_count").val())
})