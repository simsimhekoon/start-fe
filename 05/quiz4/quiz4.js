function dragElement(box) { 
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0; 
    box.addEventListener('mousedown', dragMouseDown);
    // function dragMouseDown(e) {} 
    // function elementDrag(e) {} 
    // function closeDragElement() {} 
}
  

function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    console.log(box);
    pos3 = e.clientX; 
    pos4 = e.clientY;

     box.addEventListener('mouseup', closeDragElement);
     box.addEventListener('mousemove', elementDrag);
}

function elementDrag(e) {
     e = e || window.event;
     e.preventDefault();
     pos1 = pos3 - e.clientX;
     pos2 = pos4 - e.clientY;
     pos3 = e.clientX;
     pos4 = e.clientY;
     box.style.top = (box.offsetTop - pos2) + "px";
     box.style.left = (box.offsetLeft - pos1) + "px";
}

function closeDragElement() {
     // on mouseup remove listeners
     box.removeEventListener('mouseup', closeDragElement);
     box.removeEventListener('mousemove', elementDrag);
     console.log("현재 요소의 위치 y는 " + box.top +", x는" + box.left + "입니다.");

}






dragElement(document.getElementById("box"));