var Dan = 0;
var Print = document.getElementById('result');
var Btn = document.getElementById('btn');
var result = '';

function gugudan(){
    Dan = document.getElementById('num').value;
    Dan = Number(Dan);
    if(Dan != 0){
        result = "";
        for(var i = 1; i <= 9; i++) {
            result = result + Dan + " x "  +i + " = " + Dan * i + '</br>';
                
        }
        Print.innerHTML = result;
    }
    else{
        alert("숫자를 입력해주세요")
    }
}



Btn.addEventListener('click', gugudan);
