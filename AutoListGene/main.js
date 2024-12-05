let list_txt = "";
let program_type = "c";
let list_length = 1;
let list_floor = 1;
let list_element = {
    1:{1:0,2:0},
    2:{1:0,2:0},
};

let element_type_list = {
    "c":{"list_length":4,1:"int",2:"string",3:"float",4:"bool",11:"整数(int)",12:"文字列(string)",13:"数値(float)",14:"真偽(bool)"},
    "js":{"list_length":2,1:"let",11:"値変動可(let)",2:"const",12:"値固定(const)"}
}
let user_element_click=false
//C#の記述
function list_generate_C(list_type,list_name){
    console.log("C言語生成開始")
    let temptype_name="int"
    if(list_type == "int"){temptype_name="int"}
    else if(list_type == "string"){temptype_name="string"}
    else if(list_type == "float"){temptype_name="float"}
    else if(list_type == "bool"){temptype_name="bool"}
    //型名 [
    list_txt = list_type + "[";
    //型名 [(任意の数の,)]
    for(let n = 1;n<list_floor;n++){
        list_txt += ",";
    }
    //型名 [(任意の数の,)] 配列名
    list_txt += "] " + list_name;
    if(list_length > 0)list_txt+= " =";
if(user_element_click==true){

    //型名 [(任意の数の,)] 配列名 = {
    if(list_length > 0){
        list_txt += " {"
        for(let m=0;m<list_length;m++){
            if(m!=0){list_txt+=","}
            if(list_floor>1){
                for(let n=1;n<list_floor;n++){
                    if(temptype_name=="int")list_txt += "{"+parseInt($("#input_element_line_"+m+"0").val())+","+parseInt($("#input_element_line_"+m+"1").val())+"}"
                    else if(temptype_name=="float")list_txt += "{"+parseFloat($("#input_element_line_"+m+"0").val())+","+parseFloat($("#input_element_line_"+m+"1").val())+"}"
                    else if(temptype_name=="string")list_txt += '{"'+$("#input_element_line_"+m+"0").val()+"','"+$("#input_element_line_"+m+"1").val()+'"}'
                    else if(temptype_name=="bool"){
                        let temptxt = "{"+$("#input_element_line_"+m+"0").prop('checked')+","+$("#input_element_line_"+m+"1").prop('checked')+"}"
                        list_txt += temptxt
                    }
                }
            }
            else{
                if(temptype_name=="int")list_txt += parseInt($("#input_element_line_"+m+"0").val())
                else if(temptype_name=="float")list_txt += parseFloat($("#input_element_line_"+m+"0").val())
                else if(temptype_name=="string")list_txt += `"` + $("#input_element_line_"+m+"0").val() + `"`
                else if(temptype_name=="bool"){
                    let temptxt = $("#input_element_line_"+m+"0").prop('checked')
                    list_txt += temptxt
                }
            }
        }
        list_txt += "};"
    }
}
else{
    //型名[] 配列名 = new 型名[二次元配列の長さ][配列の長さ]
    list_txt += " new "+temptype_name + "["
    if(list_floor>1)list_txt += "2,"
    list_txt += +list_length+"];"
}
}
function list_generate_JS(list_type,list_name){
    let temptype_name="let"
    temptype_name = list_type;
    //型名
    list_txt = list_type;
    //型名 配列名 =
    list_txt += " "+list_name;
    if(list_length > 0)list_txt+= " =";
if(user_element_click==true){
list_txt += "[";
    //型名 配列名 = [];
    if(list_length > 0){
        for(let m=0;m<list_length;m++){
            if(m!=0){list_txt+=","}
            for(let n=1;n<list_floor;n++){
                list_txt += "[" + $("#input_element_line_"+m+"0").val()+","+parseInt($("#input_element_line_"+m+"1").val())+"]"
            }
        }
        list_txt += "]";
//        list_txt = list_txt.slice(list_txt.length-1,1)
    }
}
else{
    //型名 配列名 = [...Array([変数の長さ])];
    if(list_length > 0){
        list_txt += " [...Array(" + list_length + ")]";
    }
}
list_txt += ";";
}

function input_list_element_tableview(line,col,type){
    tempparent = document.querySelector("#input_list_element_table");
    while(tempparent.firstChild){
        tempparent.removeChild(tempparent.firstChild)
    }
    //int型
    if(type=="int"){
        for(n = 0;n<=line;n++){
            tempparent = $("#input_list_element_table")
            tempparent.append("<tr id=element_line_"+n+"></tr>")
            tempparent = $("#input_list_element_table #element_line_"+n)
            for(m = 0;m<=col;m++){
                if(n==0&&m==0)tempparent.append('<td>配列の要素</td>')
                else if(n==0)tempparent.append('<td>'+(m-1)+'</td>')
                else if(m==0)tempparent.append('<td>'+(n-1)+'</td>')
                else tempparent.append('<td><input id="input_element_line_'+(n-1)+(m-1)+'" type="number" value="0"></td>')
            }       
        }
    }
    //string型
    else if(type == "string"){
        for(n = 0;n<=line;n++){
            tempparent = $("#input_list_element_table")
            tempparent.append("<tr id=element_line_"+n+"></tr>")
            tempparent = $("#input_list_element_table #element_line_"+n)
            for(m = 0;m<=col;m++){
                if(n==0&&m==0)tempparent.append('<td>配列の要素</td>')
                else if(n==0)tempparent.append('<td>'+(m-1)+'</td>')
                else if(m!=0)tempparent.append('<td><input id="input_element_line_'+(n-1)+(m-1)+'" value=""></td>')
                else tempparent.append('<td>'+(n-1)+'</td>')
            }       
        }
    }
    //bool型
    else if(type == "bool"){
        for(n = 0;n<=line;n++){
            tempparent = $("#input_list_element_table")
            tempparent.append("<tr id=element_line_"+n+"></tr>")
            tempparent = $("#input_list_element_table #element_line_"+n)
            for(m = 0;m<=col;m++){
                if(n==0&&m==0)tempparent.append('<td>配列の要素</td>')
                else if(n==0)tempparent.append('<td>'+(m-1)+'</td>')
                else if(m!=0)tempparent.append('<td><input id="input_element_line_'+(n-1)+(m-1)+'" type="checkbox"></td>')
                else tempparent.append('<td>'+(n-1)+'</td>')
            }       
        }       
    }
    else if(type=="float"){
        for(n = 0;n<=line;n++){
            tempparent = $("#input_list_element_table")
            tempparent.append("<tr id=element_line_"+n+"></tr>")
            tempparent = $("#input_list_element_table #element_line_"+n)
            for(m = 0;m<=col;m++){
                if(n==0&&m==0)tempparent.append('<td>配列の要素</td>')
                else if(n==0)tempparent.append('<td>'+(m-1)+'</td>')
                else if(m!=0)tempparent.append('<td><input id="input_element_line_'+(n-1)+(m-1)+'" type="number" value="0.0"></td>')
                else tempparent.append('<td>'+(n-1)+'</td>')
            }
        }
    }
    else if(type=="let"||type=="const"){
        for(n = 0;n<=line;n++){
            tempparent = $("#input_list_element_table")
            tempparent.append("<tr id=element_line_"+n+"></tr>")
            tempparent = $("#input_list_element_table #element_line_"+n)
            for(m = 0;m<=col;m++){
                if(n==0&&m==0)tempparent.append('<td>配列の要素</td>')
                else if(n==0)tempparent.append('<td>'+(m-1)+'</td>')
                else if(m!=0)tempparent.append('<td><input id="input_element_line_'+(n-1)+(m-1)+'" type="text" value="0"></td>')
                else tempparent.append('<td>'+(n-1)+'</td>')
            }
        }
    }
}


$('#input_list_floor_num').change(function() {
    if(user_element_click){
    list_length = $("#input_list_length_num").val();
    //list_floor = $("#input_list_floor_num").val();
    input_list_element_tableview(list_length,list_floor,$("#element_type_Select").val())
    }
});
$('#input_list_length_num').change(function() {
    if(user_element_click){
    list_length = $("#input_list_length_num").val();
    //list_floor = $("#input_list_floor_num").val();
    input_list_element_tableview(list_length,list_floor,$("#element_type_Select").val())
    }
});
//変数の型を変更した際の処理
$('#element_type_Select').change(function() {
    if(user_element_click){
        input_list_element_tableview(list_length,list_floor,$("#element_type_Select").val())
    }
})

//プログラム言語を変更した際の処理
$('#program_type_Select').change(function() {
    program_type =$("#program_type_Select").val();
    tempparent = document.querySelector("#element_type_Select");
    while(tempparent.firstChild){
        tempparent.removeChild(tempparent.firstChild)
    }
    tempparent = $("#element_type_Select")
    for(let n=1;n<(element_type_list[program_type]["list_length"])+1;n++){
        let tempn = n+10
        tempparent.append('<option value="'+element_type_list[program_type][n]+'">'+element_type_list[program_type][tempn]+'</option>');
    }
    
    if(user_element_click){
    input_list_element_tableview(list_length,list_floor,$("#element_type_Select").val())
    }
});


//配列生成ボタン
$("#list_generate_button").on('click', function () {
    list_length = $("#input_list_length_num").val();
    //list_floor = $("#input_list_floor_num").val();
    if(program_type == "c")list_generate_C($("#element_type_Select").val(),$("#input_list_name").val());
    else if(program_type== "js")list_generate_JS($("#element_type_Select").val(),$("#input_list_name").val());
    $("#program_text").text(list_txt);
})

//二次元配列を押下した際の処理
$("#input_2d_check").click(()=>{
    list_length = $("#input_list_length_num").val();
    if($("#input_2d_check").prop("checked")){
        list_floor=2
    }
    else
    {
        list_floor=1
    }
    if($("#input_element_check").prop('checked')){
        input_list_element_tableview(list_length,list_floor,$("#element_type_Select").val())
    }
})

//初期値の設定を押下した際の処理
$("#input_element_check").click(()=>{
    if($("#input_element_check").prop('checked')){
        user_element_click=true
        list_length = $("#input_list_length_num").val();
        //list_floor = $("#input_list_floor_num").val();
        input_list_element_tableview(list_length,list_floor,$("#element_type_Select").val())
    }
    else{
        user_element_click=false
        tempparent = document.querySelector("#input_list_element_table");
        while(tempparent.firstChild){
            tempparent.removeChild(tempparent.firstChild)
        }
    }
})
