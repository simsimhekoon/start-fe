var box = document.getElementById('box');
var btn = document.getElementById('btn');
var min = 0;
var max = 0;
var rand = 0;
var increase = 10; //0.01초마다 증가
var incTime = 1010; //약 1초간 증가

function getRand() {
  min = document.getElementById('min').value;
  max = document.getElementById('max').value;
  min = Number(min);
  max = Number(max);

  rand = Math.floor(Math.random() * (max - min + 1)) + min;
  rand = rand - 100;

  var inc = setInterval(function () {
    btn.disabled = true; //버튼 비활성화
    box.innerHTML = rand;
    rand++;
  }, increase);

  setTimeout(function () {
    clearInterval(inc);
    btn.disabled = false; //버튼 활성화
  }, incTime);
}

btn.addEventListener('click', getRand);
