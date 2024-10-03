
//$(".div_click").click((e)=>{
    //$(e.target).text($(e.target).attr("class"))
//})
$(".ul_click").click((e)=>{
    $(e.target).text($(e.target).attr("class"))
})
$(".div_click div,.div_click p").on('click', function(){//liを忘れないように
    $(this).text($(this).attr("class"));
    //クリックした要素のテキストをクラス名に変える。
})