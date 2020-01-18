
var button = document.querySelector('button');
var main = document.getElementById('mygtuku_laukas');
var mygtukas;
var clicks = 0;

function createButton () {
    if (clicks < 100) {
        clicks++;
        var x = Number(((Math.random()) * 500).toFixed());
        var y = Number(((Math.random()) * 1000).toFixed());
        mygtukas = '<button  onclick="createButton()" style="top:' + x + 'px; left:' + y + 'px;">cloned button</button>';
        main.innerHTML += mygtukas;

        console.log(clicks);
    } else {
        return alert('You reach maximum clicks!');
    }
}

function createButton992 () {
    if (clicks < 100) {
        clicks++;
        var x = Number(((Math.random()) * 400).toFixed());
        var y = Number(((Math.random()) * 800).toFixed());
        mygtukas = '<button  onclick="createButton992()" style="top:' + x + 'px; left:' + y + 'px;">cloned button</button>';
        main.innerHTML += mygtukas;

        console.log(clicks);
    } else {
        return alert('You reach maximum clicks!');
    }
}

function createButton768 () {
    if (clicks < 100) {
        clicks++;
        var x = Number(((Math.random()) * 350).toFixed());
        var y = Number(((Math.random()) * 600).toFixed());
        mygtukas = '<button  onclick="createButto768()" style="top:' + x + 'px; left:' + y + 'px;">cloned button</button>';
        main.innerHTML += mygtukas;

        console.log(clicks);
    } else {
        return alert('You reach maximum clicks!');
    }
}

function createButton576 () {
    if (clicks < 100) {
        clicks++;
        var x = Number(((Math.random()) * 300).toFixed());
        var y = Number(((Math.random()) * 450).toFixed());
        mygtukas = '<button  onclick="createButto576()" style="top:' + x + 'px; left:' + y + 'px;">cloned button</button>';
        main.innerHTML += mygtukas;

        console.log(clicks);
    } else {
        return alert('You reach maximum clicks!');
    }
}

function createButton375 () {
    if (clicks < 100) {
        clicks++;
        var x = Number(((Math.random()) * 220).toFixed());
        var y = Number(((Math.random()) * 280).toFixed());
        mygtukas = '<button  onclick="createButto375()" style="top:' + x + 'px; left:' + y + 'px;">cloned button</button>';
        main.innerHTML += mygtukas;

        console.log(clicks);
    } else {
        return alert('You reach maximum clicks!');
    }
}

function createButton320 () {
    if (clicks < 100) {
        clicks++;
        var x = Number(((Math.random()) * 150).toFixed());
        var y = Number(((Math.random()) * 200).toFixed());
        mygtukas = '<button  onclick="createButto320()" style="top:' + x + 'px; left:' + y + 'px;">cloned button</button>';
        main.innerHTML += mygtukas;

        console.log(clicks);
    } else {
        return alert('You reach maximum clicks!');
    }
}