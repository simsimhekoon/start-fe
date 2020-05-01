var miss = document.querySelector('.box');
var nice = document.getElementById('bug');
var point = document.getElementById('point');
var life = document.getElementById('life');

var life_now = 10;
var point_now = 0;

var rand_x = Math.floor(Math.random() * 380);
var rand_y = Math.floor(Math.random() * 380);

console.log(rand_x);
console.log(rand_y);

function lossLife(){
    if(life_now == 0){
        alert("Game Over!!");
    }
    else{
        life_now--;
        life.innerHTML = life_now;
    }
}

function getPoint(){
    point_now++;
    point.innerHTML = point_now;
    move_bug();
    event.stopPropagation();
}

function move_bug(){
    nice.style.left = rand_x + 'px';
    nice.style.top = rand_y + 'px';
    rand_x = Math.floor(Math.random() * 380);
    rand_y = Math.floor(Math.random() * 380);

    console.log(rand_x);
    console.log(rand_y);
    console.log(nice);
}

miss.addEventListener('click', lossLife);
nice.addEventListener('click', getPoint);


