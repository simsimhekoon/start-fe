function log(str){
    console.log(str);
}


var count = [10,20,30,40,50,60,70,100];
var average = 0;
for(var i = 0; i<=7; i++){
    average = average + count[i];
}
average = average/8;
console.log(average);


/*
var gugudan = [];
var g_count = 0;
for(var x = 1; x<=9; x++){
    for(var y = 1; y<=9; y++){
        gugudan[g_count]=x*y;
        g_count++;
    }
}
log(gugudan);
*/


function Gugudan(){
    var gugudan = [];
    var g_count = 0;
    for(var x = 1; x<=9; x++){
        for(var y = 1; y<=9; y++){
            gugudan[g_count]=x*y;
            g_count++;
        }
    }
    return gugudan;
}
var value = Gugudan();
console.log(value);


var sum={};
sum.a=1;
sum.b=2;
sum.Sum=function(){console.log(sum.a+sum.b);};
sum.Sum();




var sum = 0;
var temp = 9999;
while(sum != temp){
    temp = sum;
    sum = sum + Number(window.prompt("더할 숫자를 입력하세요"));
    if(temp == sum){temp = sum;}
}
log(sum);