
let expo_txt = "";
let expo_imgsrc = "";
let ability_datalist
$(document).ready(()=>{
    function expo_DataLoad(data_str){
        console.log(data_str)
        let data = "ability_expotxt.json";
        fetch(data)
            .then(function (response) {
              return response.json();
            })
            .then(function (Datalist) {
                ability_datalist = Datalist[data_str];
                console.log(ability_datalist)
                $("#ability_expo").text(Datalist[data_str]["text"])
                $("#ability_img").attr("src",Datalist[data_str]["img"])
            })
        
    }
    function ability_expo(expo_val){
        expo_DataLoad(expo_val);
        
    }
        
        //アビリティ選択を変更した際の処理
        $('#select_ability').change(function() {
            ability_expo($('#select_ability').val());
        })

})



