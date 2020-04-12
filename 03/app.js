console.log(window.outerWidth);
console.log(window.name);
//winsdow.open('http://www.naver.com');

 var Test = document.getElementById("Test");
console.log(Test);

var box = document.querySelector(".box");
console.log(box);

var box = document.querySelector("#Test");
console.log(box);



var div = document.createElement('div');
console.log('div')
div.style.border = "1px solid #000";
div.innerHTML = "Hello"

document.body.appendChild(div);



const span = document.createElement('span');
const textNode = document.createTextNode('hello!'); 
span.appendChild(textNode);
document.querySelector('#Test').appendChild(span);



const list = document.getElementById('list'); 
list.removeChild(list.children[0]);



function clickBody(){
    console.log("click");
}
document.body.addEventListener("click", clickBody());

var clickCount = 0;
function popup(event){
    console.log(++clickCount);
    console.log(arguments, this ,event ,event.type,event.currentTarget);
}
document.body.addEventListener('click', popup);


var app = document.getElementById("list");

app.addEventListener("click", function(event) {
    if(event.target.nodeName == "LI"){
        //한개의 event리스너로 모든 li에 click이벤트 등록과 비슷
    console.log(2)
    event.stopPropagation();
    }
});
document.body.addEventListener('click', function(){
    console.log('body');
});