//susikuriame kintamuosisu
var l;//ilgis
var h;//aukstis
var w;//plotis

var objektai = new Array();//masyvas. cia susikelsime objektus t.y. visu figuru duomenis

//paimame duomenis is formos
var form = document.querySelector('form');

form.onsubmit = function (evt) {
    // instrukcija atsaukia duomenu issiuntima
    evt.preventDefault();


    l = document.getElementById('ilgis').value;//paimame ilgio reiksme
    document.getElementById('ilgis').value = '';//graziname default reiksme iterpimo laukui
    h = document.getElementById('aukstis').value;//paimame aukscio reiksme
    document.getElementById('aukstis').value = '';//graziname default reiksme iterpimo laukui
    w = document.getElementById('plotis').value;//paimame plocio reiksme
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
        
        console.log('objektas', objektas);
        // console.log(objektas);
        console.log('masyvas', objektai);
        // console.log(objektai);




        for (i = 0; i < objektai.length; i++) {
            var length = objektai[i].ilgis;
            var heigth = objektai[i].aukstis;
            var width = objektai[i].plotis;
            }
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




