//문1. 빨간색 추가
var box = document.querySelector('.box');
var addRed = document.querySelector('.add-red');

function AddRed(event){
    box.className = 'box red';
}

addRed.addEventListener('click', AddRed);


//문2. body에 box를 추가
var addBox = document.querySelector('.add-btn');

var newBox = [];
var newBoxSty = ''
var BoxCount = 0;

function AddBox(event){
    newBoxSty = box.className;
    newBox[BoxCount] = document.createElement('div');
    newBox[BoxCount].className = newBoxSty;
    document.body.appendChild(newBox[BoxCount]);
    BoxCount++;
}

addBox.addEventListener('click', AddBox);


//문3. body에 box를 하나씩 제거
var deleteBtn = document.querySelector('.delete-btn');

function DeleteBox(event){
    var el = newBox[BoxCount-1];
    el.remove();
    BoxCount--;
}

deleteBtn.addEventListener('click', DeleteBox);



//문4. text 추가
var textBtn = document.querySelector('.text-btn');
var newText = document.querySelector('.txt').getAttribute('value');

function TextBox(event){
    var allBox = document.getElementsByClassName('box');
    for(i=0; i<=BoxCount; i++){
        allBox[i].innerHTML = newText;
    }
}

textBtn.addEventListener('click', TextBox);



//문5. box 전부 제거
var resetBtn = document.querySelector('.reset-btn');

function ResetBox(event){
    var allBox = document.getElementsByClassName('box');
    for(var i=BoxCount; i>=0; i--){
        allBox[i].remove();
    }
    BoxCount = -1;
}

resetBtn.addEventListener('click', ResetBox);



//문6. box 숨기고 보이기
var toggleBtn = document.querySelector('.toggle-btn');
var statement = true;

function ToggleBox(event){
    var allBox = document.getElementsByClassName('box');
    for(var i=BoxCount; i>=0; i--){
        if(statement == true){
        allBox[i].style.display = 'none';
        }
        else{
        allBox[i].style.display = 'block';
        }
    }
    if(statement == true){
        statement = false;
        }
        else{
        statement = true;
        }
}

toggleBtn.addEventListener('click', ToggleBox);



//문7. 이미지 출력 box 없으면 생성
var imageBtn = document.querySelector('.image-btn');

function ImageBox(event){
    var allBox = document.getElementsByClassName('box');
    if (allBox.length == 0){
        AddBox();
    }
    for(var i=0; i<=BoxCount; i++){
        allBox[i].innerHTML ='<img src= https://i.imgur.com/69NjYBH.png> ';
    }
}

imageBtn.addEventListener('click', ImageBox);