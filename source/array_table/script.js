//susikuriame masyva, kuriame elementai patys yra masyvai
var megaduomenys =[];
var duomenys;


//susikuriame kintamuosius, kuriem priskirsime atskiras reiksmes is masyvo (nereikes paciam skaiciavime naudoti 'var')
var form = document.querySelector('form');
var data;
var islaidos;
var tiekejas;
var suma;
var totale = 0;
var total = document.querySelector('#Total');

//susikuriame kintamaji 'tbody'. Ji naudosim siusdami gautas reiksmes i html dokumenta atvaizdavimui 


//apsirasome kas bus aktyvavus formos submit 
form.onsubmit = function(evt) {
    // instrukcija atsaukia duomenu issiuntima
    evt.preventDefault();
    
    //pasiimame duomenis ir grazinanme pradines reiksmes ivesties langeliuose
    data = document.getElementById('Data').value;
    document.getElementById('Data').value="";

    islaidos = document.getElementById('Islaidos').value;
    document.getElementById('Islaidos').value="pasirinkite išlaidų grupę";

    tiekejas = document.getElementById('Tiekejas').value;
    document.getElementById('Tiekejas').value="nurodykite tiekėją";

    suma = document.getElementById('Suma').value;
    document.getElementById('Suma').value="";
    if((data ==='' || data ===0)||(islaidos === 'pasirinkite išlaidų grupę')||(tiekejas === 'nurodykite tiekėją')||(suma ===''|| suma===0)){
        alert('Įveskite visus duomenis');   
    }  else {
    //is vienu suvedimu gautu duomenu formuojame masyva
    duomenys = new Array (data, islaidos, tiekejas, suma);

    //gautus masyvus keliame i bendra masyva - kaupiame visus suvestus duomenis
    megaduomenys.push(duomenys);
    

//toliau gautais duomenimis pildysime lentele
//paleidziame cikla 'for' noredami is masyvo pasiimti reiksmes
    for (i=0; i < megaduomenys.length; i++){//duodame komanda "eiti per masyvo elementus "i" kartų, kur "i" ne mažiau nei nulis, bet ne daugiau nei masyvo elementų kiekis
    
        data = megaduomenys[i][0];
        islaidos = megaduomenys[i][1];
        tiekejas = megaduomenys[i][2];
        suma = Number(megaduomenys[i][3]);
        
    }
    //papildomai skaiciuosime visu islaidu total suma atskiroje celeje
    totale += suma;
    
    //turedami duomenu masyva pildome lenteles eilute
    var tbody = document.getElementById('tablebody');
    
    var tr = document.createElement('tr');
    tbody.appendChild(tr);

    var td = document.createElement('td');
    tr.appendChild(td);
    var txt = document.createTextNode(i);
    td.appendChild(txt);

    var td = document.createElement('td');
    tr.appendChild(td);
    var txt = document.createTextNode(data);
    td.appendChild(txt);

    var td = document.createElement('td');
    tr.appendChild(td);
    var txt = document.createTextNode(islaidos);
    td.appendChild(txt);

    var td = document.createElement('td');
    tr.appendChild(td);
    var txt = document.createTextNode(tiekejas);
    td.appendChild(txt);

    var td = document.createElement('td');
    tr.appendChild(td);
    var txt = document.createTextNode(suma);
    td.appendChild(txt);

    //atskirai atnaujiname total sumos cele
    total.innerHTML = Number(totale);

    // isitikiname, kad visi suvesti duomenys (masyvai) issaugoti-sukaupti bendrame masyve 
    console.log(megaduomenys);
    }
}
