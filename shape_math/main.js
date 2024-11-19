var w = $('#canvas_container').width();
var h = $('#canvas_container').height();
$('#canvas').attr('width', w);
$('#canvas').attr('height', h);
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let x_1=0,y_1=0,tall_1=0,visr_x=0,visr_y=0,radian_x=45,radian_y=45;
let detail_mode=false,LW=false;
let scale_list = [300,9000,270000,8100000,243000000,7290000000]
let scale_math_list = [30,900,27000,810000,24300000,729000000]
let visr_scale = 200
let visr_unit ="mm"
let visr_unitList = ["","mm","cm","m","km","μm"]
let input_idList = ["#shape_type_input_x","#shape_type_input_y","#shape_type_input_tall","#shape_type_input_radian_x","#shape_type_input_radian_y","#shape_type_input_LW"]
let shape_formura = ["","X×X=","X×Y=","(X+Y)*高さ÷2=","X×高さ=","X×Y÷2=","X×高さ÷2=","X×高さ÷2=","円周率×X=","円周率×X÷2="]
let shape_imgList = ["","./images/seihoukei","./images/tyouhoukei","./images/daikei","./images/heikousihenkei","./images/hisigata","./images/tyokkakusankakukei","./images/nitouhensankakukei","./images/enkei","./images/hanenkei"]


/*_____________________________________________________________________________________________
ここらへんに関数入れる
_____________________________________________________________________________________________*/
function math_shape_ans(select_num){
    let ans_text = shape_formura[select_num];
    if(select_num==1){//正方形
        let temp = $("#shape_input_x").val()*$("#shape_input_x").val()
        ans_text += temp;
    }
    else if(select_num==2){//長方形
        let temp = $("#shape_input_x").val()*$("#shape_input_y").val()
        ans_text += temp;
    }
    else if(select_num==3){//台形
        let　temp = ((parseInt($("#shape_input_x").val()) + parseInt($("#shape_input_y").val()))* $("#shape_input_tall").val())/2
        ans_text += temp;
    }
    else if(select_num==4){//平行四辺形
        let temp = $("#shape_input_x").val()*$("#shape_input_tall").val()
        ans_text += temp;
    }
    else if(select_num==5){//菱形
        let temp = $("#shape_input_x").val()*$("#shape_input_y").val()/2
        ans_text += temp;
    }
    else if(select_num==6){//直角三角形
        let temp = $("#shape_input_x").val()*$("#shape_input_tall").val()/2
        ans_text += temp;
    }
    else if(select_num==7){//二等辺三角形
        let temp = $("#shape_input_x").val()*$("#shape_input_tall").val()/2
        ans_text += temp;
    }
    else if(select_num==8){//円形
        let temp = $("#shape_input_x").val()*3.14
        ans_text += temp;
    }
    else if(select_num==9){//半円形
        let temp = ($("#shape_input_x").val()*3.14)/2
        ans_text += temp;
    }
    ans_text += visr_unit;
    $("#shape_math_ans").text(ans_text);
}




function select_shape(select_num){
    if(select_num==1){//正方形
        for(let n=0;n<input_idList.length;n++){
            $(input_idList[n]).remove();
        }
        $("#shape_type_input_table").children().append('<tr id="shape_type_input_x">'
            +'<td>xの長さ</td>'
            +'<td><input id="shape_input_x" type="number" placeholder="値1" value="100"></td>'
            +'</tr>')
    }
    else if(select_num==2){//四角形
        for(let n=0;n<input_idList.length;n++){
            $(input_idList[n]).remove();
        }
        $("#shape_type_input_table").children().append('<tr id="shape_type_input_x">'
            +'<td>xの長さ</td>'
            +'<td><input id="shape_input_x" type="number" placeholder="値1" value="200"></td>'
            +'</tr>')
        $("#shape_type_input_table").children().append('<tr id="shape_type_input_y">'
            +'<td>yの長さ</td>'
            +'<td><input id="shape_input_y" type="number" placeholder="値2" value="150"></td>'
            +'</tr>')
    }
    else if(select_num==3){//台形
        for(let n=0;n<input_idList.length;n++){
            $(input_idList[n]).remove();
        }
        $("#shape_type_input_table").children().append('<tr id="shape_type_input_x">'
            +'<td>xの長さ</td>'
            +'<td><input id="shape_input_x" type="number" placeholder="値1" value="200"></td>'
            +'</tr>')
        $("#shape_type_input_table").children().append('<tr id="shape_type_input_y">'
            +'<td>yの長さ</td>'
            +'<td><input id="shape_input_y" type="number" placeholder="値2" value="300"></td>'
            +'</tr>')
        $("#shape_type_input_table").children().append('<tr id="shape_type_input_tall">'
            +'<td>高さ</td>'
            +'<td><input id="shape_input_tall" type="number" placeholder="値2" value="200"></td>'
            +'</tr>')
        if(detail_mode==true){
            $("#shape_type_input_table").children().append('<tr id="shape_type_input_LW">'
                +'<td><label id=shape_input_L><input type="radio" value="L" checked>縦</label></td>'
                +'<td><label id=shape_input_W><input type="radio" value="W">横</label></td>'
                +'</tr>')
        }
    }
    else if(select_num==4){//平行四辺形
        for(let n=0;n<input_idList.length;n++){
            $(input_idList[n]).remove();
        }
        $("#shape_type_input_table").children().append('<tr id="shape_type_input_x">'
            +'<td>xの長さ</td>'
            +'<td><input id="shape_input_x" type="number" placeholder="値1" value="200"></td>'
            +'</tr>')
            if(detail_mode==false){
        $("#shape_type_input_table").children().append('<tr id="shape_type_input_tall">'
            +'<td>高さ</td>'
            +'<td><input id="shape_input_tall" type="number" placeholder="値2" value="200"></td>'
            +'</tr>')
        }
        else if(detail_mode==true){
            $("#shape_type_input_table").children().append('<tr id="shape_type_input_radian_x">'
                +'<td>角度</td>'
                +'<td><input id="shape_input_radian_x" type="number" placeholder="値3" value="60"></td>'
                +'</tr>')
            $("#shape_type_input_table").children().append('<tr id="shape_type_input_LW">'
                +'<td><label id=shape_input_L><input type="radio" value="L" checked>縦</label></td>'
                +'<td><label id=shape_input_W><input type="radio" value="W">横</label></td>'
                +'</tr>')
        }
    }
    else if(select_num==5){//菱形
        for(let n=0;n<input_idList.length;n++){
            $(input_idList[n]).remove();
        }
        $("#shape_type_input_table").children().append('<tr id="shape_type_input_x">'
            +'<td>xの長さ</td>'
            +'<td><input id="shape_input_x" type="number" placeholder="値1" value="200"></td>'
            +'</tr>')
        $("#shape_type_input_table").children().append('<tr id="shape_type_input_y">'
            +'<td>yの長さ</td>'
            +'<td><input id="shape_input_y" type="number" placeholder="値2" value="150"></td>'
            +'</tr>')
    }
    else if(select_num==6){//直角三角形
        for(let n=0;n<input_idList.length;n++){
            $(input_idList[n]).remove();
        }
        $("#shape_type_input_table").children().append('<tr id="shape_type_input_x">'
            +'<td>xの長さ</td>'
            +'<td><input id="shape_input_x" type="number" placeholder="値1" value="200"></td>'
            +'</tr>')
        if(detail_mode==false){
        $("#shape_type_input_table").children().append('<tr id="shape_type_input_tall">'
            +'<td>図形の高さ</td>'
            +'<td><input id="shape_input_tall" type="number" placeholder="値2" value="150"></td>'
            +'</tr>')
        }
        else if(detail_mode==true){
            $("#shape_type_input_table").children().append('<tr id="shape_type_input_radian_x">'
                +'<td>角度</td>'
                +'<td><input id="shape_input_radian_x" type="number" placeholder="値3" value="30"></td>'
                +'</tr>')
            $("#shape_type_input_table").children().append('<tr id="shape_type_input_LW">'
                +'<td><label id=shape_input_L><input type="radio" value="L" checked>縦</label></td>'
                +'<td><label id=shape_input_W><input type="radio" value="W">横</label></td>'
                +'</tr>')
        }
    }
    else if(select_num==7){//二等辺三角形
        for(let n=0;n<input_idList.length;n++){
            $(input_idList[n]).remove();
        }
        $("#shape_type_input_table").children().append('<tr id="shape_type_input_x">'
            +'<td>xの長さ</td>'
            +'<td><input id="shape_input_x" type="number" placeholder="値1" value="200"></td>'
            +'</tr>')
        $("#shape_type_input_table").children().append('<tr id="shape_type_input_tall">'
            +'<td>高さ</td>'
            +'<td><input id="shape_input_tall" type="number" placeholder="値2" value="200"></td>'
            +'</tr>')
        if(detail_mode==true){
            $("#shape_type_input_table").children().append('<tr id="shape_type_input_LW">'
                +'<td><label id=shape_input_L><input type="radio" value="L" checked>縦</label></td>'
                +'<td><label id=shape_input_W><input type="radio" value="W">横</label></td>'
                +'</tr>')
        }
    }
    else if(select_num==8){//円形
        for(let n=0;n<input_idList.length;n++){
            $(input_idList[n]).remove();
        }
        $("#shape_type_input_table").children().append('<tr id="shape_type_input_x">'
            +'<td>xの長さ</td>'
            +'<td><input id="shape_input_x" type="number" placeholder="値1" value="100"></td>'
            +'</tr>')
    }
    else if(select_num==9){//半円形
        for(let n=0;n<input_idList.length;n++){
            $(input_idList[n]).remove();
        }
        $("#shape_type_input_table").children().append('<tr id="shape_type_input_x">'
            +'<td>xの長さ</td>'
            +'<td><input id="shape_input_x" type="number" placeholder="値1" value="100"></td>'
            +'</tr>')
            if(detail_mode==true){
                $("#shape_type_input_table").children().append('<tr id="shape_type_input_LW">'
                    +'<td><label id=shape_input_L><input type="radio" value="L" checked>縦</label></td>'
                    +'<td><label id=shape_input_W><input type="radio" value="W">横</label></td>'
                    +'</tr>')
            }
    }

}


function shape_math(shape,x,y,tall,radian_x,radian_y,math_visr_x,math_visr_y,math_visr_tall,LW){
    ctx.lineWidth = 2;//線の太さ
    var w = $('#canvas_container').width();
    var h = $('#canvas_container').height();
    $('#canvas').attr('width', w);
    $('#canvas').attr('height', h);
    let widthCenter = canvas.clientWidth/2//横方向の中心座標
    let lengthCenter = canvas.clientHeight/2//縦方向の中心座標
    let tempText = ""
if(shape==1)//正方形
{
    tempText = math_visr_x + visr_unit
    ctx.strokeStyle = '#666';
    ctx.strokeRect(widthCenter-x/2,lengthCenter-x/2,x,x);
    Scaleline(x,x,0,tempText,true)
}
else if(shape==2)//長方形
{
    ctx.strokeStyle = '#666';
    ctx.strokeRect(widthCenter-x/2,lengthCenter-y/2,x,y);
    Scaleline(x,y,0,math_visr_x+visr_unit,true);
    Scaleline(x,y,0,math_visr_y+visr_unit,false);
    
}
else if(shape==3)//台形
{
    ctx.strokeStyle = '#666';
    let point_a=[],point_b=[],point_c=[],point_d=[];
    if(LW==false)//縦
    {
        point_a[0] = widthCenter - x/2
        point_a[1] = lengthCenter - tall/2
        point_b[0] = widthCenter + x/2
        point_b[1] = lengthCenter - tall/2
        point_c[0] = widthCenter - y/2
        point_c[1] = lengthCenter + tall/2
        point_d[0] = widthCenter + y/2
        point_d[1] = lengthCenter + tall/2
        Scaleline(x,tall,0,math_visr_x+visr_unit,true,true);
        Scaleline(y,tall,0,math_visr_y+visr_unit,true,false);
        Scaleline(tall,tall,0,math_visr_tall+visr_unit,false,false);
    }
    else{//横
        point_a[0] = widthCenter - tall/2
        point_a[1] = lengthCenter - x/2
        point_b[0] = widthCenter + tall/2
        point_b[1] = lengthCenter - y/2
        point_c[0] = widthCenter - tall/2
        point_c[1] = lengthCenter + x/2
        point_d[0] = widthCenter + tall/2
        point_d[1] = lengthCenter + y/2
        Scaleline(tall,x,0,math_visr_x+visr_unit,false,true);
        Scaleline(tall,y,0,math_visr_y+visr_unit,false,false);
        Scaleline(tall,tall,0,math_visr_tall+visr_unit,true,false);
    }
    ctx.beginPath();
    ctx.moveTo(point_a[0],point_a[1])
    ctx.lineTo(point_b[0],point_b[1])
    ctx.lineTo(point_d[0],point_d[1])
    ctx.lineTo(point_c[0],point_c[1])
    ctx.lineTo(point_a[0],point_a[1])
    ctx.stroke()
}
else if(shape==4)//平行四辺形
{
    ctx.strokeStyle = '#666';
    let point_a=[],point_b=[],point_c=[],point_d=[];
    //左上,右上,左下,右下
    if(detail_mode==true){
    tall = ((x/4) * Math.tan(radian_x*(Math.PI/180))) * 2
    math_visr_tall = parseInt(((math_visr_x/4) * Math.tan(radian_x*(Math.PI/180))) * 2)
    }
    if(LW==false)//縦
    {
        point_a[0] = widthCenter - x/2 + x/4
        point_a[1] = lengthCenter - tall/2
        point_b[0] = widthCenter + x/2 + x/4
        point_b[1] = lengthCenter - tall/2
        point_c[0] = widthCenter - x/2 - x/4
        point_c[1] = lengthCenter + tall/2
        point_d[0] = widthCenter + x/2 - x/4
        point_d[1] = lengthCenter + tall/2
        Scaleline(x,tall,-(x/4),math_visr_x+visr_unit,true,false);
        Scaleline(x,tall,0,math_visr_tall+visr_unit,false,false);
    }
    else{//横
        point_a[0] = widthCenter - tall/2
        point_a[1] = lengthCenter - x/2 - x/4
        point_b[0] = widthCenter + tall/2
        point_b[1] = lengthCenter - x/2 + x/4
        point_c[0] = widthCenter - tall/2
        point_c[1] = lengthCenter + x/2 - x/4
        point_d[0] = widthCenter + tall/2
        point_d[1] = lengthCenter + x/2 + x/4
        Scaleline(tall,x,(x/4),math_visr_x+visr_unit,false,false);
        Scaleline(tall,x,0,math_visr_tall+visr_unit,true,false);
    }
    ctx.beginPath();
    ctx.moveTo(point_a[0],point_a[1])
    ctx.lineTo(point_b[0],point_b[1])
    ctx.lineTo(point_d[0],point_d[1])
    ctx.lineTo(point_c[0],point_c[1])
    ctx.lineTo(point_a[0],point_a[1])
    ctx.stroke()
}
else if(shape==5)//菱形
{
    ctx.strokeStyle = '#666';
    let point_a=[],point_b=[],point_c=[],point_d=[];
    //左上,右上,左下,右下
    point_a[0] = widthCenter
    point_a[1] = lengthCenter - y/2
    point_b[0] = widthCenter + x/2
    point_b[1] = lengthCenter
    point_c[0] = widthCenter - x/2
    point_c[1] = lengthCenter
    point_d[0] = widthCenter
    point_d[1] = lengthCenter + y/2

    ctx.beginPath();
    ctx.moveTo(point_a[0],point_a[1])
    ctx.lineTo(point_b[0],point_b[1])
    ctx.lineTo(point_d[0],point_d[1])
    ctx.lineTo(point_c[0],point_c[1])
    ctx.lineTo(point_a[0],point_a[1])
    ctx.stroke()

    
    Scaleline(0,y,0,math_visr_x+visr_unit,false,false);
    Scaleline(x,0,0,math_visr_y+visr_unit,true,false);
}
else if(shape==6)//直角三角形
{
    ctx.strokeStyle = '#666';
    let point_a=[],point_b=[],point_c=[];
    //右上,右下,左下
    if(detail_mode==true){
    tall = (x * Math.tan(radian_x*(Math.PI/180)))
    console.log(Math.tan(radian_x*(Math.PI/180)))
    math_visr_tall = parseInt(((math_visr_x/2) * Math.tan(radian_x*(Math.PI/180))) * 2)
    console.log(math_visr_tall)
    }
    if(LW==false)//縦
    {
        point_a[0] = widthCenter + x/2
        point_a[1] = lengthCenter - tall/2
        point_b[0] = widthCenter + x/2
        point_b[1] = lengthCenter + tall/2
        point_c[0] = widthCenter - x/2
        point_c[1] = lengthCenter + tall/2
        Scaleline(x,tall,0,math_visr_x+visr_unit,true,false);
        Scaleline(x,tall,0,math_visr_tall+visr_unit,false,false);
    }
    else{//横
        point_a[0] = widthCenter + tall/2
        point_a[1] = lengthCenter + x/2
        point_b[0] = widthCenter - tall/2
        point_b[1] = lengthCenter + x/2
        point_c[0] = widthCenter - tall/2
        point_c[1] = lengthCenter - x/2
        Scaleline(tall,x,0,math_visr_x+visr_unit,false,true);
        Scaleline(tall,x,0,math_visr_tall+visr_unit,true,false);
    }
    ctx.beginPath();
    ctx.moveTo(point_a[0],point_a[1])
    ctx.lineTo(point_b[0],point_b[1])
    ctx.lineTo(point_c[0],point_c[1])
    ctx.lineTo(point_a[0],point_a[1])
    ctx.stroke()
}
else if(shape==7)//二等辺三角形
{
    ctx.strokeStyle = '#666';
    let point_a=[],point_b=[],point_c=[];
    //右上,右下,左下
    if(LW==false)//縦
    {
        point_a[0] = widthCenter
        point_a[1] = lengthCenter - tall/2
        point_b[0] = widthCenter + x/2
        point_b[1] = lengthCenter + tall/2
        point_c[0] = widthCenter - x/2
        point_c[1] = lengthCenter + tall/2
        Scaleline(x,tall,0,math_visr_x+visr_unit,true,false);
        Scaleline(x,tall,0,math_visr_tall+visr_unit,false,false);
    }
    else{//横
        point_a[0] = widthCenter -tall/2
        point_a[1] = lengthCenter + x/2
        point_b[0] = widthCenter + tall/2
        point_b[1] = lengthCenter
        point_c[0] = widthCenter - tall/2
        point_c[1] = lengthCenter - x/2
        Scaleline(tall,x,0,math_visr_x+visr_unit,false,true);
        Scaleline(tall,x,0,math_visr_tall+visr_unit,true,false);
    }
    ctx.beginPath();
    ctx.moveTo(point_a[0],point_a[1])
    ctx.lineTo(point_b[0],point_b[1])
    ctx.lineTo(point_c[0],point_c[1])
    ctx.lineTo(point_a[0],point_a[1])
    ctx.stroke()
}
else if(shape==8)//円形
{
    ctx.strokeStyle = '#666';
    ctx.beginPath();
    ctx.arc(widthCenter,lengthCenter,x/2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.strokeStyle = '#AAA';
    ctx.beginPath();
    ctx.moveTo(widthCenter-x/2,lengthCenter)
    ctx.lineTo(widthCenter+x/2,lengthCenter)
    ctx.stroke();
    Scaleline(x,0,0,math_visr_x+visr_unit,true,false);
}
else if(shape==9)//半円形
{
    ctx.strokeStyle = '#666';
    if(LW==true){
    ctx.beginPath();
    ctx.arc(widthCenter,lengthCenter,x/2,0,Math.PI);
    ctx.moveTo(widthCenter-x/2,lengthCenter)
    ctx.lineTo(widthCenter+x/2,lengthCenter)
    ctx.stroke();
    Scaleline(x,0,0,math_visr_x+visr_unit,true,true);
    }
    else{
    ctx.beginPath();
    ctx.arc(widthCenter,lengthCenter,x/2,1.5*Math.PI,0.5*Math.PI);
    ctx.moveTo(widthCenter,lengthCenter-x/2)
    ctx.lineTo(widthCenter,lengthCenter+x/2)
    ctx.stroke();
    Scaleline(0,x,0,math_visr_x+visr_unit,false,true);
    }
}

}//shape_math(図形描画)終了

//寸法表示
function Scaleline(line_width,line_tall,offset,scale_text,Scale_LW,Scale_Mirror){
    let widthCenter = canvas.clientWidth/2//横方向の中心座標
    let lengthCenter = canvas.clientHeight/2//縦方向の中心座標
    ctx.lineWidth = 1;
    ctx.strokeStyle="AAA"
    let confSet_1=12,confSet_2=9,confSet_3=20
    if(Scale_Mirror==true){
        if(Scale_LW==true){
            line_tall*=-1;
        }
        else{
            line_width*=-1;
        }
        confSet_1*=-1;
        confSet_2*=-1;
        confSet_3*=-1;
    }
    if(Scale_LW==true){
        ctx.textAlign="center"
        ctx.beginPath();
        ctx.moveTo(widthCenter-line_width/2+offset,lengthCenter+line_tall/2)
        ctx.lineTo(widthCenter-line_width/2+offset,lengthCenter+line_tall/2+confSet_1)
        ctx.moveTo(widthCenter+line_width/2+offset,lengthCenter+line_tall/2)
        ctx.lineTo(widthCenter+line_width/2+offset,lengthCenter+line_tall/2+confSet_1)
        ctx.moveTo(widthCenter-line_width/2+offset,lengthCenter+line_tall/2+confSet_2)
        ctx.lineTo(widthCenter+line_width/2+offset,lengthCenter+line_tall/2+confSet_2)
        ctx.stroke()
        ctx.fillText(scale_text,widthCenter+offset,lengthCenter+line_tall/2+confSet_3)
    }
    else{
        ctx.textAlign="left"
        ctx.beginPath();
        ctx.moveTo(widthCenter+line_width/2,lengthCenter-line_tall/2+offset)
        ctx.lineTo(widthCenter+line_width/2+confSet_1,lengthCenter-line_tall/2+offset)
        ctx.moveTo(widthCenter+line_width/2,lengthCenter+line_tall/2+offset)
        ctx.lineTo(widthCenter+line_width/2+confSet_1,lengthCenter+line_tall/2+offset)
        ctx.moveTo(widthCenter+line_width/2+confSet_2,lengthCenter-line_tall/2+offset)
        ctx.lineTo(widthCenter+line_width/2+confSet_2,lengthCenter+line_tall/2+offset)
        ctx.stroke()
        ctx.fillText(scale_text,widthCenter+line_width/2+confSet_3,lengthCenter+offset)
    }
    
    ctx.lineWidth = 2;
    ctx.strokeStyle="666"
}

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

$("#shape_type_button").on('click', function(){
x_1 = $("#shape_input_x").val()
y_1 = $("#shape_input_y").val()
tall_1 = $("#shape_input_tall").val()
visr_x = x_1
visr_y = y_1
visr_tall = tall_1

if(detail_mode==true){
    radian_x = $("#shape_input_radian_x").val()
    radian_y = $("#shape_input_radian_y").val()
}
else{
    radian_x=45
    radian_y=45
}

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "black";
for(let n=scale_list.length-1;n>=0;n--){
    if(x_1>scale_list[n]||y_1>scale_list[n]||tall_1>scale_list[n]){
        x_1/=scale_math_list[n];
        y_1/=scale_math_list[n];
        tall_1/=scale_math_list[n];
        visr_scale = 200*scale_math_list[n]
        break;
    }
}

shape_math($("#shape_type").val(),x_1,y_1,tall_1,radian_x,radian_y,visr_x,visr_y,visr_tall,LW)
ctx.fillRect(30,canvas.clientHeight-22,200, 2)
ctx.fillRect(30,canvas.clientHeight-32,2,10)
ctx.fillRect(130,canvas.clientHeight-32,2,10)
ctx.fillRect(228,canvas.clientHeight-32,2,10)
ctx.fillText(visr_scale,120,canvas.clientHeight-10)

})


$("#shape_math_button").on('click', function(){
    math_shape_ans($("#shape_type").val());
})


$("#shape_type").change(()=>{
    select_shape($("#shape_type").val())
    $("#shape_math_ans").text(shape_formura[($("#shape_type").val())])
    $("#shape_img").remove();
    $("#shape_math_img_Container").append('<img id="shape_img" class="col col-7" src="'+shape_imgList[($("#shape_type").val())]+'.png" width="400px" height="300px">')
})
$("#shape_unit").change(()=>{
    visr_unit = visr_unitList[$("#shape_unit").val()]
})
$("body").on('change',"#shape_input_L input", function(){
    if($("#shape_input_L").children().prop("checked")){LW=false;$("#shape_input_W").children().prop("checked",false)}
    $("#shape_img").remove();
    if(detail_mode==true && LW==false){
    $("#shape_math_img_Container").append('<img id="shape_img" class="col col-7" src="'+shape_imgList[($("#shape_type").val())]+'.png" width="400px" height="300px">')
    }
    else{
        $("#shape_math_img_Container").append('<img id="shape_img" class="col col-7" src="'+shape_imgList[($("#shape_type").val())]+'_2.png" width="400px" height="300px">')
    }
})
$("body").on('change',"#shape_input_W input", function(){
    if($("#shape_input_W").children().prop("checked")){LW=true;$("#shape_input_L").children().prop("checked",false)}
    $("#shape_img").remove();
    if(detail_mode==true && LW==false){
    $("#shape_math_img_Container").append('<img id="shape_img" class="col col-7" src="'+shape_imgList[($("#shape_type").val())]+'.png" width="400px" height="300px">')
    }
    else{
        $("#shape_math_img_Container").append('<img id="shape_img" class="col col-7" src="'+shape_imgList[($("#shape_type").val())]+'_2.png" width="400px" height="300px">')
    }
})

$("#input_detail_mode").click(()=>{
    if($("#input_detail_mode input").prop('checked')){detail_mode=true}
    else{detail_mode=false}
    select_shape($("#shape_type").val())
})

