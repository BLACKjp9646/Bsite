// Ratioコンポーネント
const Ratio = ({ratio})=>{
    // State
    const [ans_1,Setmath_1] = React.useState(0);
    const [ans_2,Setmath_2] = React.useState(0);
    const [ans_3,Setmath_3] = React.useState(0);
    const [ans_4,Setmath_4] = React.useState(0);
    const [ans_5,Setmath_5] = React.useState(0);
    const [ans_6,Setmath_6] = React.useState(0);
    const [ans_7,Setmath_7] = React.useState(0);
    const [error_1,SetError] = React.useState("");
	const [ratio_num,SetResult] = React.useState({x: "", y: "", z: "",a: "",b: ""});// State
    const handleForm = e=>{
		SetResult({...ratio_num, [e.target.name]: e.target.value});
        //指定のState変数を変更したフォームに代入する。対象のフォームには名前をしっかり一致させること
	}
    const ratio_clear = ()=>{
        ratio_num.x=0;
        ratio_num.y=0;
        ratio_num.z=1;
        ratio_num.a=2;
        ratio_num.b=3;
        let ans = "";
        Setmath_1(ans);
        Setmath_2(ans);
        Setmath_3(ans);
        Setmath_4(ans);
        Setmath_5(ans);
        Setmath_6(ans);
        Setmath_7(ans);
        
        $(".ratio_input").val("");
    }
    const ratio_Math = ()=>{
        let error_text="";
        if(ratio_num.x == 0){
            error_text += "値1が入力されていません\n"
        }
        if(ratio_num.y == 0){
            error_text += "値2が入力されていません\n"
        }
        if(ratio_num.z == 0){
            error_text += "値3が入力されていません\n"
        }
        if(ratio_num.a == 0){
            error_text += "値4が入力されていません\n"
        }
        if(ratio_num.b == 0){
            error_text += "値5が入力されていません\n"
        }
        SetError(error_text);

        let ans;

        ans = (ratio_num.y / ratio_num.x)*ratio_num.z;
        ans = parseInt(ans * 1000);
        ans /= 1000;
        if(isNaN(ans)){
            ans = 0;
        }
        Setmath_1(ans);
        
        
        ans = (ratio_num.x / ratio_num.y)*ratio_num.z;
        ans = parseInt(ans * 1000);
        ans /= 1000;
        if(isNaN(ans)){
            ans = 0;
        }
        Setmath_2(ans);


        ans = parseInt((ratio_num.x /(parseFloat(ratio_num.y) + parseFloat(ratio_num.x)))*10000);
        ans /= 100;
        console.log("%",ans);
        if(isNaN(ans)){
            ans = 0;
        }
        Setmath_3(ans);
        ans = 100-ans;
        if(isNaN(ans)){
            ans = 0;
        }
        Setmath_4(ans);

        let math_temp_1 = 0,math_temp_2 = 0;
        let math_x=parseFloat(ratio_num.x),math_y=parseFloat(ratio_num.y);
        if(ratio_num.x > math_y){
            math_temp_1 = math_x;
            math_temp_2 = math_y;
        }
        else if(math_x < math_y){
            math_temp_1 = math_y;
            math_temp_2 = math_x;
        }
        else{
            ans = 1;
            Setmath_5(ans);
            Setmath_6(ans);
        }
        while(math_temp_1 > 0){
            if(math_temp_1 % math_temp_2 == 0){
                ans = math_x / math_temp_2;
                Setmath_5(ans);
                ans = math_y / math_temp_2;
                Setmath_6(ans);
                math_temp_1 = 0;
            }
            else {
                ans = math_temp_2;
                math_temp_2 = math_temp_1 % math_temp_2;
                math_temp_1 = ans;
                console.log("余り",math_temp_1,math_temp_2);
            }
        }

            ans = (ratio_num.x * ratio_num.b)/ratio_num.a 
            if(isNaN(ans)){
                ans = 0;
            }
            Setmath_7(ans);

        console.log(ratio_num);
    }// Event
	
	
    return(
	<div>
		<p><input class="ratio_input" type="number" placeHolder="値1" name="x" value={ratio_num.x} onChange={handleForm}></input>:<input class="ratio_input" type="number" placeHolder="値2" name="y" value={ratio_num.y} onChange={handleForm}></input></p>
        <p>基準値の変更  <input class="ratio_input" type="number" placeHolder="値3" name="z" value={ratio_num.z} onChange={handleForm}></input></p>
        <p class="ratio_result">基準値が左の値のとき {ratio_num.z}:{ans_1} </p>
        <p class="ratio_result">基準値が右の値のとき {ans_2}:{ratio_num.z} </p>
        <p class="ratio_result">% {ans_3}:{ans_4} </p>
        <p class="ratio_result">整数比 {ans_5}:{ans_6} </p>
        <p>目標比<input class="ratio_result" type="number" placeHolder="値1" name="x" value={ratio_num.x} onChange={handleForm}></input>:{ans_7} = <input class="ratio_result" type="number" placeHolder="値4" name="a" value={ratio_num.a} onChange={handleForm}></input>:<input class="ratio_result" type="number" placeHolder="値5" name="b" value={ratio_num.b} onChange={handleForm}></input></p>

        <p><button class="" onClick={ratio_Math}>計算する</button><button class="" onClick={ratio_clear}>クリア</button></p>
        <p id="alert_error">
            {error_1.split('\n').map(t => (<p>{t}</p>))}
        </p>
	</div>
);
}

// React.jsを起動する
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Ratio ratio={0}/>
	</React.StrictMode>
);