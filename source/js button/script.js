
var button = document.querySelector('button');
var main = document.getElementById('mygtuku_laukas');
var mygtukas;
var clicks = 0;

function createButton () {
    if (clicks < 30) {
        clicks++;
        var x = Number(((Math.random()) * 25).toFixed());
        var y = Number(((Math.random()) * 50).toFixed());
        mygtukas = '<button  onclick="createButton()" style="top:' + x + 'vw; left:' + y + 'vw;">cloned button</button>';
        main.innerHTML += mygtukas;
        console.log(clicks);
    } else {
        return alert('You reach maximum clicks!');
    }
}
