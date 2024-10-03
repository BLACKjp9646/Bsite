let goalMat_num;
let Mat_data = {
"data":[
    {"Name":"defalt","Color":"#000000","recipi_num":0}
    ]
}
let Recipi_data  = {
"data":[
    {"goal_mat_name":"Mat1","goal_mat_num":1,"Mat1_name":"a","Mat1_num":1,"Mat2_name":"b","Mat2_num":1,"Mat3_name":"c","Mat3_num":1,"Mat4_name":"d","Mat4_num":1,"Mat5_name":"e","Mat5_num":1}
    ]
}

$("#shape_math_button").on('click', function(){

})


$("#shape_type").change(()=>{
})


$("#add_mat_button").on('click', function () {
    document.querySelector('#add_Mat_Dialog').showModal();
});
$("#add_recipi_button").on('click', function () {
    document.querySelector('#add_recipi_Dialog').showModal();
});
  //「OK」ボタンがクリックされたらダイアログを閉じる
$("#close_button").on('click', function () {
    document.querySelector('#add_Mat_Dialog').close();
});
$("#close_recipi_button").on('click', function () {
    document.querySelector('#add_recipi_Dialog').close();
});