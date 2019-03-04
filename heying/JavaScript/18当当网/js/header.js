var selLI = document.getElementById('position');
var down = document.getElementById('down');
var selBox = document.getElementById('selBox');
var timer = null;

selLI.onmouseover = function(){
    clearTimeout(timer);
    down.src = 'images/下.png';
    selBox.style.display = 'block';
}
selLI.onmouseout = function(){
    timer = setTimeout(function(){
        down.src = 'images/上.png';
        selBox.style.display = 'none';
    }, 500);
}