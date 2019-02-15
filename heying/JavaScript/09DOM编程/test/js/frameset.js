function hideMenu()
{
    // console.log(window.parent.frames.length);
    // console.log(window.parent.frames['menuFrame']);
    var frameset = window.parent.document.getElementById('manager');
    console.log(frameset);
    frameset.cols = "0, *";
}
function showMenu()
{
    // console.log(window.parent.frames.length);
    // console.log(window.parent.frames['menuFrame']);
    var frameset = window.parent.document.getElementById('manager');
    console.log(frameset);
    frameset.cols = "300, *";
}