
var button = document.querySelector('button');
var main = document.getElementById('mygtuku_laukas');
var mygtukas;
var clicks = 0;

function createButton () {
    if (clicks < 100) {
        clicks++;
        var x = Number(((Math.random()) * 500).toFixed());
        var y = Number(((Math.random()) * 850).toFixed());
        mygtukas = '<button  onclick="createButton()" style="top:' + x + 'px; left:' + y + 'px;">cloned button</button>';
        main.innerHTML += mygtukas;

        console.log(clicks);
    } else {
        return alert('You reach maximum clicks!');
    }
}
