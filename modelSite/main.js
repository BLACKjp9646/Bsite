let nowform="";
$("#formchange_boss2").on('click', function () {
    if(nowform == "boss2_2.glb"){
        nowform = "boss2.glb"
    }
    else{
        nowform = "boss2_2.glb"
    }
    $("#model_view").attr('src', nowform)
})