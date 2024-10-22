var my_chart
//素材名称,識別色,レシピ変数,合計必要数
let Mat_data = {
"data":[
    {"Name":"defalt","Color":"#FFFFFF","recipi_num":0,"matSum":0},
    {"Name":"モジュラー","Color":"#FFFFFF","recipi_num":0,"matSum":0},
    {"Name":"鋼管","Color":"#a52a2a","recipi_num":0,"matSum":0},
    {"Name":"被覆コンクリ","Color":"#ffa500","recipi_num":0,"matSum":0},
    {"Name":"ネジ","Color":"#0000ff","recipi_num":0,"matSum":0},
    {"Name":"強化鉄板","Color":"#FFFFFF","recipi_num":0,"matSum":0},
    {"Name":"鉄ロッド","Color":"#000000","recipi_num":0,"matSum":0},
    {"Name":"鉄板","Color":"#FFFFFF","recipi_num":0,"matSum":0},
    {"Name":"鉄インゴット","Color":"#FFFFFF","recipi_num":0,"matSum":0},
    {"Name":"鉄鉱石","Color":"#ffc0cb","recipi_num":0,"matSum":0},
    {"Name":"鋼鉄","Color":"#000000","recipi_num":0,"matSum":0},
    {"Name":"石炭","Color":"#000000","recipi_num":0,"matSum":0},
    {"Name":"鋼梁","Color":"#000000","recipi_num":0,"matSum":0},
    {"Name":"コンクリ","Color":"#ffa500","recipi_num":0,"matSum":0},
    {"Name":"石灰岩","Color":"#ffa500","recipi_num":0,"matSum":0},
    ]
}



//目標素材名称,目標制作数,素材n名称,素材n必要数
let Recipi_data  = {
"data":[
    {"goal_mat_name":"none","goal_mat_num":0,"Mat1_name":"none1","Mat1_num":0,"Mat2_name":"none2","Mat2_num":0,"Mat3_name":"","Mat3_num":0,"Mat4_name":"","Mat4_num":0,"Mat5_name":"","Mat5_num":0}
    ]
}

function MatData_Search(Search_MatName){
    let temp;
 for(let n=0;n<Mat_data.data.length;n++){
    if(Mat_data.data[n].Name == Search_MatName){
        temp = Mat_data.data[n];
        break;
    }
 }   
 return temp;
}

function MatData_Load(data_num){
return Mat_data.data[data_num];
}

function RecipiData_Load(MatData){
    return Recipi_data.data[MatData.recipi_num]
}

//樹形図関連ここから
function tree_chart_add(chart_num,chart_add_obj,chart_hierarcky,chart,req_num){
    
    if(chart_hierarcky>0){
        if(chart_num!=0){
            //項目の追加
            if(req_num>0){
            chart.push({text:{"name":chart_add_obj.Name+":x"+req_num}});
            }
            else{
                chart.push({text:{"name":chart_add_obj.Name}});
            }
        }
        else{
            //樹形図の一番上の項目が呼び出された時tempを上書き
            if(req_num>0){
                chart[chart_num].text.name = chart_add_obj.Name+":x"+req_num
                }
                else{
                    chart[chart_num].text.name = chart_add_obj.Name
                }
            
        }
    }
    else{
        //一番最初に呼び出された時既存のtempを上書き
        chart.text.name = chart_add_obj.Name
    }
    
    //追加した素材データにレシピ変数が存在する場合
    if(chart_add_obj.recipi_num!=0){
    
        //目標生成数を追加
        if(chart_hierarcky>0){
            chart[chart_num].text.goal = RecipiData_Load(chart_add_obj).goal_mat_num
        }
        else{
            chart.text.goal = RecipiData_Load(chart_add_obj).goal_mat_num
        }
    
        let temp_recipi = {data:[]}//追加データ格納用
        let temp_req_num = []
    if(Recipi_data.data[chart_add_obj.recipi_num].Mat1_num!=0){
        //素材1データ
    temp_recipi.data.push(MatData_Search(Recipi_data.data[chart_add_obj.recipi_num].Mat1_name))
    temp_req_num.push(Recipi_data.data[chart_add_obj.recipi_num].Mat1_num)
    }
    if(Recipi_data.data[chart_add_obj.recipi_num].Mat2_num!=0){
        //素材2データ
        temp_recipi.data.push(MatData_Search(Recipi_data.data[chart_add_obj.recipi_num].Mat2_name))
        temp_req_num.push(Recipi_data.data[chart_add_obj.recipi_num].Mat2_num)
    }
    if(Recipi_data.data[chart_add_obj.recipi_num].Mat3_num!=0){
        //素材3データ
        temp_recipi.data.push(MatData_Search(Recipi_data.data[chart_add_obj.recipi_num].Mat3_name))
        temp_req_num.push(Recipi_data.data[chart_add_obj.recipi_num].Mat3_num)
    }
    if(Recipi_data.data[chart_add_obj.recipi_num].Mat4_num!=0){
        //素材4データ
        temp_recipi.data.push(MatData_Search(Recipi_data.data[chart_add_obj.recipi_num].Mat4_name))
        temp_req_num.push(Recipi_data.data[chart_add_obj.recipi_num].Mat4_num)
    }
    if(Recipi_data.data[chart_add_obj.recipi_num].Mat5_num!=0){
        //素材5データ
        temp_recipi.data.push(MatData_Search(Recipi_data.data[chart_add_obj.recipi_num].Mat5_name))
        temp_req_num.push(Recipi_data.data[chart_add_obj.recipi_num].Mat5_num)
    }
    //次に追加するデータ用にchildrenとtempを追加しておく
    if(chart_hierarcky>0){//最初に呼び出した時は配列が無いので最初に呼び出した時用の処理
        chart[chart_num].children=[{text:{"name":"temp"}}]
        chart = chart[chart_num].children//次に呼び出すchartを事前に格納
    }
    else{
        chart.children=[{text:{"name":"temp"}}]
        chart = chart.children//次に呼び出すchartを事前に格納
    }
    //必要素材の種類数によって繰り返し回数変動
    for(let n=0;n<temp_recipi.data.length;n++){
        //再起処理
        tree_chart_add(n,temp_recipi.data[n],chart_hierarcky+1,chart,temp_req_num[n])
    }
    }
    }
//樹形図関連ここまで

function recipi_math(recipi_data_num,goalnum){//レシピ変数,目標制作数
    let temp = 0
    //データの読み込みとレシピの必要数の読み込み
    let tempgoalmatnum = Recipi_data.data[recipi_data_num].goal_mat_num;
    let tempmat1data = MatData_Search(Recipi_data.data[recipi_data_num].Mat1_name)
    let tempmat1num = Recipi_data.data[recipi_data_num].Mat1_num;
    let tempmat2data = MatData_Search(Recipi_data.data[recipi_data_num].Mat2_name)
    let tempmat2num = Recipi_data.data[recipi_data_num].Mat2_num;
    let tempmat3data = MatData_Search(Recipi_data.data[recipi_data_num].Mat3_name)
    let tempmat3num = Recipi_data.data[recipi_data_num].Mat3_num;
    let tempmat4data = MatData_Search(Recipi_data.data[recipi_data_num].Mat4_name)
    let tempmat4num = Recipi_data.data[recipi_data_num].Mat4_num;
    let tempmat5data = MatData_Search(Recipi_data.data[recipi_data_num].Mat5_name)
    let tempmat5num = Recipi_data.data[recipi_data_num].Mat5_num

    //作成数の計算
    let createnum = 1;
    if(tempgoalmatnum!=0){
    while(goalnum>tempgoalmatnum){
        goalnum-=tempgoalmatnum;
        createnum += 1;
    }
    }
    //データが存在する場合各種必要数を計算、合計必要数に格納
    if(tempmat1data != null){
    tempmat1num*=createnum;
    tempmat1data.matSum+=tempmat1num;
    console.log(tempmat1data.recipi_num)
    if(tempmat1data.recipi_num != 0){
        recipi_math(tempmat1data.recipi_num,tempmat1num)
    }
    }
    if(tempmat2data != null){
    tempmat2num*=createnum;
    tempmat2data.matSum+=tempmat2num
    if(tempmat2data.recipi_num != 0){
        recipi_math(tempmat2data.recipi_num,tempmat2num)
    }
    }
    if(tempmat3data != null){
    tempmat3num*=createnum;
    tempmat3data.matSum+=tempmat3num
    if(tempmat3data.recipi_num != 0){
        recipi_math(tempmat3data.recipi_num,tempmat3num)
    }
    }
    if(tempmat4data != null){
    tempmat4num*=createnum;
    tempmat4data.matSum+=tempmat4num
    if(tempmat4data.recipi_num != 0){
        recipi_math(tempmat4data.recipi_num,tempmat4num)
    }
    }
    if(tempmat5data != null){
    tempmat5num*=createnum;
    tempmat5data.matSum+=tempmat5num
    if(tempmat5data.recipi_num != 0){
        recipi_math(tempmat5data.recipi_num,tempmat5num)
    }
    }
}



//素材追加ダイアログボタン
$("#add_mat_dialog_button").on('click', function () {
    document.querySelector('#add_Mat_Dialog').showModal();
});

//レシピ追加ダイアログボタン
$("#add_recipi_dialog_button").on('click', function () {
    //レシピダイアログを表示
    document.querySelector('#add_recipi_Dialog').showModal();
    //目標素材名称読み込み
    Mat_data.data[0].Name = $("#input_goal_mat_name").val()
    let tempparent = document.querySelector("#input_recipi_goal_mat")
    //select内のoptionを全消去
    while(tempparent.firstChild){
        tempparent.removeChild(tempparent.firstChild)
    }
    tempparent = $("#input_recipi_goal_mat")
    tempparent.append("<option>目標素材を選択</option>")
    //素材名称呼び出し、optionに格納
    for(let n=0;n<Mat_data.data.length;n++){
        tempparent.append(`<option value="`+Mat_data.data[n].Name+`">`+Mat_data.data[n].Name+`</option>`)
    }
    //各素材selectにも同じ処理
    for(let n=1;n<6;n++){
        tempparent = document.querySelector("#input_recipi_mat_select_"+n)
        while(tempparent.firstChild){
            tempparent.removeChild(tempparent.firstChild)
        }
        tempparent = $("#input_recipi_mat_select_"+n)
        tempparent.append('<option value="">素材を選択</option>')
        for(let n=0;n<Mat_data.data.length;n++){
            tempparent.append(`<option value="`+Mat_data.data[n].Name+`">`+Mat_data.data[n].Name+`</option>`)
        }
        //入力個数を初期値に
        $("#input_req_mat_num_"+n).val("");
    }
});

//素材情報削除ダイアログボタン
$("#del_mat_dialog_button").on("click",function(){
    //ダイアログを表示
    document.querySelector('#del_Mat_Dialog').showModal();
    //目標素材名称読み込み
    Mat_data.data[0].Name = $("#input_goal_mat_name").val()
    let tempparent = document.querySelector("#select_mat_name")
    //select内のoptionを全消去
    while(tempparent.firstChild){
        tempparent.removeChild(tempparent.firstChild)
    }
    tempparent = $("#select_mat_name")
    tempparent.append("<option>素材を選択</option>")
    //素材名称呼び出し、optionに格納
    for(let n=0;n<Mat_data.data.length;n++){
        tempparent.append(`<option value="`+Mat_data.data[n].Name+`">`+Mat_data.data[n].Name+`</option>`)
    }
    tempparent.append("<option value=All_MaterialData_Delete>全て</option>")

    $("#del_mat_errortxt").text("");
})

//レシピ情報削除ダイアログボタン
$("#del_recipi_dialog_button").on("click",function(){
    //ダイアログを表示
    document.querySelector('#del_recipi_Dialog').showModal();
    //目標素材名称読み込み
    Mat_data.data[0].Name = $("#input_goal_mat_name").val()
    let tempparent = document.querySelector("#select_recipi_name")
    //select内のoptionを全消去
    while(tempparent.firstChild){
        tempparent.removeChild(tempparent.firstChild)
    }
    tempparent = $("#select_recipi_name")
    tempparent.append("<option>レシピを設定した素材を選択</option>")
    //素材名称呼び出し、optionに格納
    for(let n=0;n<Mat_data.data.length;n++){
        if(Mat_data.data[n].recipi_num!=0){
        tempparent.append(`<option value="`+Mat_data.data[n].Name+`">`+Mat_data.data[n].Name+`</option>`)
        }
    }
    tempparent.append("<option value=All_MaterialData_Delete>全て</option>")

    $("#del_recipi_errortxt").text("");
})

//素材追加ダイアログ内の追加ボタン
$("#add_mat_button").on('click', function () {
    let tempname = $("#input_mat_name").val();
    let tempcolor = $("#input_mat_color").val();
    if(tempcolor == "custom_color"){
        tempcolor = $("#input_custom_color").val();
    }
    if(MatData_Search(tempname)==null){
        Mat_data.data.push({"Name":tempname,"Color":"#"+tempcolor,"recipi_num":0,"matSum":0})   
        $("#add_mat_errortxt").removeClass("errortxt")
        $("#add_mat_errortxt").text(MatData_Search(tempname).Name+'が登録されました。');
    }
    else{
        $("#add_mat_errortxt").addClass("errortxt")
        $("#add_mat_errortxt").text(MatData_Search(tempname).Name+'は既に登録されています。');
    }
});

//レシピ追加ダイアログ内の追加ボタン
$("#add_recipi_button").on('click', function () {
    let tempname = $("#input_recipi_goal_mat").val();
    let tempgoalnum = $("#input_create_num").val();
    let tempmatnumList = []
    let tempmatNameList = []
    let temp_errortxt = ""
    
    for(let n=0;n<5;n++){
        if($("#input_recipi_mat_select_"+(n+1)).val() != ""){
            console.log("???")
            if($("#input_recipi_mat_select_"+(n+1)).val() == tempname){
                temp_errortxt = "目標素材と素材で同じ名称のものは使えません。"
                $("#add_recipi_errortxt").text(temp_errortxt);
                return
            }
            else if($("#input_req_mat_num_"+(n+1)).val()>0){
                tempmatNameList.push($("#input_recipi_mat_select_"+(n+1)).val())
                tempmatnumList.push($("#input_req_mat_num_"+(n+1)).val())
            }
            else if($("#input_req_mat_num_"+(n+1)).val()<=0){
            temp_errortxt = "素材必要数は0より上の数値以外は使えません。"
            $("#add_recipi_errortxt").text(temp_errortxt);
            return
            }
        }
    }
    if(MatData_Search(tempname)!=null){
        if(MatData_Search(tempname).recipi_num==0){
        MatData_Search(tempname).recipi_num = Recipi_data.data.length
        Recipi_data.data.push({"goal_mat_name":tempname,"goal_mat_num":tempgoalnum,"Mat1_name":"","Mat1_num":0,"Mat2_name":"","Mat2_num":0,"Mat3_name":"","Mat3_num":0,"Mat4_name":"","Mat4_num":0,"Mat5_name":"","Mat5_num":0})
        for(let n=1;n<=tempmatNameList.length;n++){
            Recipi_data.data[Recipi_data.data.length-1]["Mat"+n+"_name"] = tempmatNameList[n-1]
            Recipi_data.data[Recipi_data.data.length-1]["Mat"+n+"_num"] = tempmatnumList[n-1]
        }
        $("#add_recipi_errortxt").text("");
        document.querySelector('#add_recipi_Dialog').close();
        }
        else
        {
            temp_errortxt = MatData_Search(tempname).Name+'には既にレシピが設定されています。'   
        }
    }
    else{
        temp_errortxt = "目標素材を設定してください"
    }

    
    delete simple_chart_config.nodeStructure.name
    delete simple_chart_config.nodeStructure.goal
    tree_chart_add(0,MatData_Search($("#input_goal_mat_name").val()),0,simple_chart_config.nodeStructure,0)
    my_chart = new Treant(simple_chart_config);
});

//素材情報削除ダイアログ内の削除ボタン
$("#del_mat_button").on('click', function () {
   let tempname = $("#select_mat_name").val()
   if(MatData_Search(tempname)!=null){
    $("#del_mat_errortxt").removeClass("errortxt")
    $("#del_mat_errortxt").text(MatData_Search(tempname).Name+'が削除されました。');
    Mat_data.data.splice([Mat_data.data.indexOf(MatData_Search(tempname))],1);
   }
   else if(tempname == "All_MaterialData_Delete"){
    $("#del_mat_errortxt").removeClass("errortxt")
    $("#del_mat_errortxt").text('全ての素材情報が削除されました。');
        Mat_data.data.splice(1,Mat_data.data.length);
    }

   for(let n=0;n<Mat_data.data.length;n++){
    Mat_data.data[n].recipi_num = 0;
    }

});

//レシピ情報削除ダイアログ内の削除ボタン
$("#del_recipi_button").on('click', function () {
    let tempname = $("#select_recipi_name").val()
    if(MatData_Search(tempname)!=null){
     $("#del_recipi_errortxt").removeClass("errortxt")
     $("#del_recipi_errortxt").text(MatData_Search(tempname).Name+'のレシピが削除されました。');
     MatData_Search(tempname).recipi_num = 0;
     delete simple_chart_config.nodeStructure.name
    delete simple_chart_config.nodeStructure.goal
    my_chart = new Treant(simple_chart_config);
    }
    else if(tempname == "All_MaterialData_Delete"){
        $("#del_recipi_errortxt").removeClass("errortxt")
        $("#del_recipi_errortxt").text('全てのレシピが削除されました。');
        for(let n=0;n<Mat_data.data.length;n++){
            Mat_data.data[n].recipi_num = 0;
        }
    }    
 });

//素材追加ダイアログ内の閉じるボタン
$("#close_button").on('click', function () {
    document.querySelector('#add_Mat_Dialog').close();
});

//素材情報削除ダイアログ内の閉じるボタン
$("#close_delmat_button").on('click', function () {
    document.querySelector('#del_Mat_Dialog').close();
});

//レシピ情報削除ダイアログ内の閉じるボタン
$("#close_delrecipi_button").on('click', function () {
    document.querySelector('#del_recipi_Dialog').close();
});

//レシピ追加ダイアログ内の閉じるボタン
$("#close_recipi_button").on('click', function () {
    document.querySelector('#add_recipi_Dialog').close();
});

//計算するボタン
$("#req_mat_math_button").on("click",function(){
    for(let n=0;n<Mat_data.data.length;n++){
        Mat_data.data[n].matSum = 0;
    }
    recipi_math(MatData_Search($("#input_goal_mat_name").val()).recipi_num,$("#input_goal_mat_num").val());
    Mat_data.data[0].matSum = $("#input_goal_mat_num").val()

    tempparent = document.querySelector("#math_mat_result table");
        while(tempparent.firstChild){
            tempparent.removeChild(tempparent.firstChild)
        }
    $("#math_mat_result table").append('<tr><td>識別色</td><td>素材名称</td><td>必要数</td></tr>')
    for(let n=0;n<Mat_data.data.length;n++){
        $("#math_mat_result table").append('<tr><td style="background-color: '+Mat_data.data[n].Color+';"></td><td>'+Mat_data.data[n].Name+'</td><td>'+Mat_data.data[n].matSum+'</td></tr>')
        
    }

    console.log("data",Mat_data.data)
    console.log("recipi",Recipi_data.data)
})



let simple_chart_config = {
    chart: {
        container: "#tree-simple",
        levelSeparation:    15,
        siblingSeparation:  15,
        subTeeSeparation:   15,
        rootOrientation: "WEST",
        node: {
            HTMLclass: "tree_node",
            drawLineThrough: false
        },
        connectors: {
            type: "step",
            style: {
            "stroke-width": 2,
            "stroke": "#000"
        },
    }
},
    nodeStructure: {
        text: { name: "temp"},
    }
};

