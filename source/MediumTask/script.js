//turime pradini objekta
var duomenys = [
    {
        numeris: 'ASD234',
        greitis: 321,
        laikas: 123,
        data: '2010-12-10'
    },
    {
        numeris: 'GDS234',
        greitis: 643,
        laikas: 543,
        data: '2010-12-10'
    },
    {
        numeris: 'ASD234',
        greitis: 765,
        laikas: 087,
        data: '2010-12-10'
    },
    {
        numeris: 'ASD234',
        greitis: 456,
        laikas: 876,
        data: '2010-12-10'
    },
];

//kreipiames i tbody vieta html faile (nurodome kur rasysime duomenis - kursime lentele)
var tBody = document.getElementById('tbody');

//apsirasome lenteles pildymo funkcija:
var makeTable = function () {

    var tr = document.createElement('tr');
    tBody.appendChild(tr);
    var td = document.createElement('td');
    tr.appendChild(td);
    var txt = document.createTextNode(numeris);
    td.appendChild(txt);
    var td = document.createElement('td');
    tr.appendChild(td);
    var txt = document.createTextNode(greitis);
    td.appendChild(txt);
    var td = document.createElement('td');
    tr.appendChild(td);
    var txt = document.createTextNode(laikas);
    td.appendChild(txt);
    var td = document.createElement('td');
    tr.appendChild(td);
    var txt = document.createTextNode(data);
    td.appendChild(txt);

    //susikuriame papildoma 'taisymo' mygtuka i 5 lenteles stulpeli
    var td = document.createElement('td');
    tr.appendChild(td);
    var button = document.createElement('button');
    button.classList.add('btn');
    button.classList.add('btn-warning');
    button.setAttribute('nr_w', [i]);//prisidedu atributa eiliskumui
    button.setAttribute('onClick', "taisyti()");//pridedame atributa, kad paspaudus iskviesime funkcija 'tikrinti', apsirasysime zemiau
    button.setAttribute('data-toggle', 'modal');//prisidedam atributa 'data-toggle' butina paleidziant taisymo formos modal'a 
    button.setAttribute('data-target', '#taisymas');//prisidedam atributa 'data-target' butina keipiantis i taisymo formos modal'a
    td.appendChild(button);
    var txt = document.createTextNode('Taisyti');
    button.appendChild(txt);

    //susikuriame papildoma 'naikinimo' mygtuka i 6 lenteles stulpeli
    var td = document.createElement('td');
    tr.appendChild(td);
    var button = document.createElement('button');
    button.classList.add('btn');
    button.classList.add('btn-danger');
    button.setAttribute('onClick', "naikinti()");
    button.setAttribute('nr_d', [i]);//prisidedu atributa eiliskumui
    td.appendChild(button);
    var txt = document.createTextNode('Trinti');
    button.appendChild(txt);
}


//ciklo pagalba uzpildome pradine lentele naudodami turimo objekto duomenis
for (var i = 0; i < duomenys.length; i++) {
    numeris = duomenys[i].numeris;
    greitis = duomenys[i].greitis;
    laikas = duomenys[i].laikas;
    data = duomenys[i].data;
    //issisaukiam susikurta lenteles pildymo funkcija ir uzpildome lentele pradiniais duomenimis
    makeTable();
}

//kuriame funkcija duomenu paemimui per mogal'a
var forma = document.getElementById('naujas_el');
//apsirasome veiksmu seka suvedant naujus duomenis
forma.onclick = function (event) {
    event.preventDefault();
    //paimam reiksmes
    numeris = document.getElementById('numer').value;
    greitis = document.getElementById('speed').value;
    laikas = document.getElementById('time').value;
    data = document.getElementById('data').value;
    i = duomenys.length;
    //pasitikriname ar visi duomenys paimti
    if (numeris === '' || greitis === '' || laikas === '' || data === '') {
        return alert('užpildykite visus laukus');
    } else {// jei duomenis gavome, pridedame juos prie esamo masyvo ir talpiname juos i lentele

        var car = { numeris: numeris, greitis: Number(greitis), laikas: Number(laikas), data: data };
        duomenys.push(car);
        //issisaukiam susikurta lenteles piesimo funkcija ir uzpildome lentele pakeistais duomenimis (perpiesiame naudodami atnaujinta 'duomenys' masyva)
        makeTable();

        //panaikiname reiksmes uzklausos formoje
        document.getElementById('numer').value = '';
        document.getElementById('speed').value = '';
        document.getElementById('time').value = '';
        document.getElementById('data').value = '';
    }
}

function naikinti() {
    if (confirm('Ar tikrai norite ištrinti reikšmę?')) {
        //jei 'true' apssirasome veiksmus
        //pasiimam paspausto mygtuko nr_d reiksme
        var x = event.target.getAttribute('nr_d');

        //sukam cikla. pagal mygtuko eiles numeri salinam is masyvo 'i' elementa
        for (i = 0; i < duomenys.length; i++) {
            if (i == x) {//jei masyvo elemento id sutampa su button eiles atributu, elementa is masyvo saliname
                var y = duomenys.splice(i, 1);
            }
        }
        //istrynus elementa is 'duomenys' masyvo, perrasome lentele is naujo. pradzioje istriname esama lentele
        tBody.innerHTML = '';
        //ciklo pagalba naujai uzpildome pradine lentele naudodami turimo objekto duomenis
        for (i = 0; i < duomenys.length; i++) {
            numeris = duomenys[i].numeris;
            greitis = duomenys[i].greitis;
            laikas = duomenys[i].laikas;
            data = duomenys[i].data;
            //issisaukiam susikurta lenteles piesimo funkcija ir uzpildome lentele pradiniais duomenimis
            makeTable();
        }
    } else {
        return (console.log('Trynimas nepatvirtintas'))//atsaukus trynima - nieko nedarome
    }
}

//apsirasome taisymo eiga
//dinamiskai sukurtam taisymo mygtukui yra suteikti atributai reikalingi 'taisymo' modalo paleidimui, tad ji paspaudus issikviesime atskira uzklausos forma
//kreipsimes i keitimo uzklausos modala   

//paspaudus taisymo mygtuka aktyvuojame funkcija taisyti
function taisyti() {
    //pasiimame 'taisymo' mygtuko nr_w reiksme (masyvo eiles numeri)
    var z = event.target.getAttribute('nr_w');

    // priskiriame masyvo elemento reiksmes ivesties formos laukams
    var numer2 = duomenys[z].numeris;
    document.getElementById('numer2').value = numer2;
    var speed2 = duomenys[z].greitis;
    document.getElementById('speed2').value = speed2;
    var time2 = duomenys[z].laikas;
    document.getElementById('time2').value = time2;
    var data2 = duomenys[z].data;
    document.getElementById('data2').value = data2;

    //apsirasome veiksmus nuspaudus 'taisyti'
    var forma2 = document.getElementById('keiciamas_el');
    forma2.onclick = function (event) {
        event.preventDefault();
        //priskiriame masyvo 'duomenys' z elementui naujas reiksmes (jei keiteme)
        duomenys[z].numeris = document.getElementById('numer2').value;
        duomenys[z].greitis = document.getElementById('speed2').value;
        duomenys[z].laikas = document.getElementById('time2').value;
        duomenys[z].data = document.getElementById('data2').value;
        //perpiesiame lentele:
        //istriname su senomis reiksmemis
        tBody.innerHTML = '';
        //surasome i lentele is naujo su pakeistomis
        for (i = 0; i < duomenys.length; i++) {
            numeris = duomenys[i].numeris;
            greitis = duomenys[i].greitis;
            laikas = duomenys[i].laikas;
            data = duomenys[i].data;
            //issisaukiam susikurta lenteles piesimo funkcija ir uzpildome lentele pradiniais duomenimis
            makeTable();
        }
    }
}