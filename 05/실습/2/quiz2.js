var $select = null;


function printBoards(){
    var $board = document.getElementById("board");
    var boardCount = 16;
    var isWhite = false;
    var className = '';
    var boardLineCount = 4;
    var str = '';

    for(var i = 0; i < boardCount; i++){
        className = (isWhite) ? 'black': 'white';
    
        str = '<sapn class = "'+className+'"></sapn>'
        
        isWhite = !isWhite; 
    
        if(i % boardLineCount == boardLineCount - 1){
            isWhite = !isWhite;
        }
    }
    $board.innerHtml = str;
}


function select(event){

    if($select){
        $select.className = $select.className.replace(' select','');
    }

    var el = event.currentTarget;
    el.className += 'select';

    $select = el;
}


function addEvent(){
    var $boards = document.querySelectorAll('span');
    var boardsLength = $board.length;

    for(var i = 0; i < boardsLength; i++){
        $boards[i].addEventListener('click', select);
    }
}

printBoards();
addEvent();
