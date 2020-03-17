function inputChange(e) {
    let ev = window.event || e;
    let v = ev.target.value;
    let r = new Date(v).getTime();

    console.log(v, r);

    document.getElementsByClassName("item")[1].querySelector('p').innerHTML = r;
}

function inputKeyDown(e) {
    let ev = window.event || e;
    if (ev.keyCode !== 13) return;

    let v = ev.target.value, item = document.getElementsByClassName('item');

    if (v.length !== 13) {
        item[0].querySelector('p').innerHTML = "格式不正确";
    } else {
        item[0].querySelector('p').innerHTML = null;
    }

    let date = new Date(+v),
        y = date.getFullYear(),
        m = date.getMonth() + 1,
        d = date.getDay(),
        h = date.getHours(),
        min = date.getMinutes(),
        s = date.getSeconds();

    let result = y + "-" + len(m) + "-" + len(d) + " " + len(h) + ":" + len(min) + ":" + len(s);
    item[0].querySelector('p').innerHTML = result;
    document.getElementsByClassName("item")[1].querySelector('input').value = result;
}

function len(value) {
    return value.toString().length === 1 ? "0" + value : value;
}