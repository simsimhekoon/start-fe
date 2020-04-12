var board = document.getElementById("board");
var background = '';
var colorCount = 0;
var count = 0;
for(var i=0; i<4; i++){
    for(var j=0; j<4; j++){

        // TODO : 여기에 필요한 코드를 작성해주세요.
        if (colorCount == 0){
            background += '<span class="black" id="idCount'+count+'" onClick="Change()"></span>';
            colorCount = 1;
            count++;
        }
        else if (colorCount == 1){
            background += '<span class="white" id="idCount'+count+'" onClick="Change()"></span>';
            colorCount = 0;
            count++;
        }
    }
    if (colorCount == 1) colorCount = 0;
    else if (colorCount == 0) colorCount = 1;
}
board.innerHTML = background;


var getId;
function Change()
{
    board.innerHTML = background; //판 초기화

    getId = event.srcElement.id;

    var change = document.getElementById(getId);
    if(event.target.nodeName == "SPAN"){
    change.style.backgroundColor = "red";
    }
}



