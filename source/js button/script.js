
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

// function createButton992 () {
//     if (clicks < 30) {
//         clicks++;
//         var x = Number(((Math.random()) * 500).toFixed());
//         var y = Number(((Math.random()) * 500).toFixed());
//         mygtukas = '<button  onclick="createButton992()" style="top:' + x + 'px; left:' + y + 'px;">cloned button</button>';
//         main.innerHTML += mygtukas;

//         console.log(clicks);
//     } else {
//         return alert('You reach maximum clicks!');
//     }
// }

// function createButton768 () {
//     if (clicks < 30) {
//         clicks++;
//         var x = Number(((Math.random()) * 350).toFixed());
//         var y = Number(((Math.random()) * 40350).toFixed());
//         mygtukas = '<button  onclick="createButton768()" style="top:' + x + 'px; left:' + y + 'px;">cloned button</button>';
//         main.innerHTML += mygtukas;

//         console.log(clicks);
//     } else {
//         return alert('You reach maximum clicks!');
//     }
// }

// function createButton576 () {
//     if (clicks < 30) {
//         clicks++;
//         var x = Number(((Math.random()) * 250).toFixed());
//         var y = Number(((Math.random()) * 250).toFixed());
//         mygtukas = '<button  onclick="createButton576()" style="top:' + x + 'px; left:' + y + 'px;">cloned button</button>';
//         main.innerHTML += mygtukas;

//         console.log(clicks);
//     } else {
//         return alert('You reach maximum clicks!');
//     }
// }

// function createButton375 () {
//     if (clicks < 30) {
//         clicks++;
//         var x = Number(((Math.random()) * 170).toFixed());
//         var y = Number(((Math.random()) * 170).toFixed());
//         mygtukas = '<button  onclick="createButton375()" style="top:' + x + 'px; left:' + y + 'px;">cloned button</button>';
//         main.innerHTML += mygtukas;

//         console.log(clicks);
//     } else {
//         return alert('You reach maximum clicks!');
//     }
// }

// function createButton320 () {
//     if (clicks < 30) {
//         clicks++;
//         var x = Number(((Math.random()) * 120).toFixed());
//         var y = Number(((Math.random()) * 120).toFixed());
//         mygtukas = '<button  onclick="createButton320()" style="top:' + x + 'px; left:' + y + 'px;">cloned button</button>';
//         main.innerHTML += mygtukas;

//         console.log(clicks);
//     } else {
//         return alert('You reach maximum clicks!');
//     }
// }