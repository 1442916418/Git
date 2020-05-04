let data = ['1', '12', '23', '24', '15'];
function inputFocus() {
    let inputBox = document.querySelector('.input-box'),
        children = inputBox.children;

    if (children.length > 1) {
        inputBox.removeChild(children[1]);
    }

    let tipBox = document.createElement("div");
    tipBox.className = 'tip-box';
    tipBox.innerHTML = "<p class='null-data'>请搜索</p>"

    inputBox.appendChild(tipBox);
}

function inputBlur() {
    let inputBox = document.querySelector('.input-box'),
        children = inputBox.children;

    if (children.length > 1) {
        inputBox.removeChild(children[1]);
    }
}

function clickListItem(e) {
    alert(e.target.textContent);
}

function inputSearch(e) {
    let value = e.value, tip = document.querySelector('.tip-box'), arr = [];

    for (let i = 0; i < data.length; i++) {
        let v = data[i];
        if (v.indexOf(value) !== -1) {
            arr.push(v);
        }
    }

    arr.length > 0 ? tip.innerHTML = null : null;

    for (let j = 0; j < arr.length; j++) {
        let p = document.createElement('p');
        p.className = 'list-item';
        p.innerHTML = arr[j];
        tip.appendChild(p);
    }

    let item = document.querySelectorAll('.list-item');


    for (let k = 0; k < item.length; k++) {
        item[k].addEventListener("click", clickListItem.bind(item[k]), true);
    }
}

function inputKeyDown(e) {
    let evt = window.event || e;
    if (evt.keyCode === 13) {
        let v = document.querySelector('#search').value;
        alert(v);
    }
}