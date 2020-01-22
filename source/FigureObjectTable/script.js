//susikuriame kintamuosisu
var objektai = new Array();//masyvas. cia susikelsime objektus t.y. visu figuru duomenis

//paimame duomenis is formos
var form = document.querySelector('form');
var volume;
var volumeArray = [];

form.onsubmit = function (evt) {
    // instrukcija atsaukia duomenu issiuntima
    evt.preventDefault();

    var l = document.getElementById('ilgis').value;//paimame ilgio reiksme
    document.getElementById('ilgis').value = '';//graziname default reiksme iterpimo laukui
    var h = document.getElementById('aukstis').value;//paimame aukscio reiksme
    document.getElementById('aukstis').value = '';//graziname default reiksme iterpimo laukui
    var w = document.getElementById('plotis').value;//paimame plocio reiksme
    document.getElementById('plotis').value = '';//graziname default reiksme iterpimo laukui

    if ((l === 0 || l === '') || (h === 0 || h === '') || (w === 0 || w === '')) {
        alert('nurodykite reikšmes!');
    } else {

        //sukuriame objekta. cia kelsime vienos figuros duomenis
        //priskiriame gautas reiksmes objekto vardams
        var objektas = new Object();
        objektas.ilgis = l;
        objektas.aukstis = h;
        objektas.plotis = w;

        //dedame gauta objekta su reiksmemis i masyva
        objektai.push(objektas);

        for (i = 0; i < objektai.length; i++) {
            var length = objektai[i].ilgis;
            var heigth = objektai[i].aukstis;
            var width = objektai[i].plotis;
            
            volume = length * heigth * width;
        }
        volumeArray.push(volume);
        // console.log('turis', volume);
        
        //gautai duomenimis pildome lenteles eilute
        var tbody = document.getElementById('tablebody');

        var tr = document.createElement('tr');
        tbody.appendChild(tr);

        var td = document.createElement('td');
        tr.appendChild(td);
        var txt = document.createTextNode(i);
        td.appendChild(txt);

        var td = document.createElement('td');
        tr.appendChild(td);
        var txt = document.createTextNode(length);
        td.appendChild(txt);

        var td = document.createElement('td');
        tr.appendChild(td);
        var txt = document.createTextNode(heigth);
        td.appendChild(txt);

        var td = document.createElement('td');
        tr.appendChild(td);
        var txt = document.createTextNode(width);
        td.appendChild(txt);
    }
}
// console.log('masyvas', volumeArray);
// console.log(objektai);


var maxButton = document.querySelector('#max');

function maxima() {
    // let emptyArray = [];
    // let nonExistantArray = undefined; 
    // if((objektai.isArray(emptyArray)) || (objektai.isArray(nonExistantArray))){
    //     alert('Norėdami palyginti, suveskite keletą figūrų duomenų');
    // } else {
    for (i = 0; i < volumeArray.length; i++) {
        var vol = volumeArray[i];
    
    
    // var volume = length * heigth * width;
    //gautai duomenimis pildome lenteles eilute
    var tbody = document.getElementById('tablebodyMax');

    var tr = document.createElement('tr');
    tbody.appendChild(tr);

    var td = document.createElement('td');
    tr.appendChild(td);
    var txt = document.createTextNode(i);
    td.appendChild(txt);

    var td = document.createElement('td');
    tr.appendChild(td);
    var txt = document.createTextNode(vol);
    td.appendChild(txt);

}

}