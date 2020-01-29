//apsirasome konstruktoriu automobiliams
function Automobilis(name, speed) {
    this.name = name;
    this.speed = speed;
};

//susikuriame globalius masyvu kintamuosius kuriuos naudosime uzduotyje
var cars = [];
var dArray = [];


//nurodome is kur pasiimti pirmosios inputu formos duomenis
var form = document.querySelector('form');

//pasiimame automobiliu duomenis ir pildome lentele:
form.onsubmit = function (event) {
    event.preventDefault();

    var car = document.getElementById('car').value;//pasiimame automobilio varda
    document.getElementById('car').value = '';//graziname tuscia reiksme i inputo forma
    var spd = document.getElementById('speed').value;//pasiimame automobilio greiti
    document.getElementById('speed').value = '';//graziname tuscia reiksme i inputo forma

    if ((car === 0 || car === '') || (spd === 0 || spd === '')) {//pasitikriname ar reiksmes suvestos
        alert('nurodykite reikšmes');//priesingu atveju signalizuojame
    }
    //susikuriame automobiliu masyva naudodamiesi konstruktoriumi
    var newcar = new Automobilis(car, spd);
    cars.push(newcar);//automobilius susidedame i masyva
    


    var tbody = document.getElementById('tablebody');//kreipiames i lenteles vieta html lauke kur ikelsime pasiimtus duomenis

    var tr = document.createElement('tr');//sukuriame tr teg'a
    tbody.appendChild(tr);//pasakome, kad jis bus tbody teg'o "vaikas"
    var td = document.createElement('td');//sukuriame td teg'a
    tr.appendChild(td);//pasakome, kad jis bus tr teg'o vaikas
    var txt = document.createTextNode(car);//sukuriame teksta priskirdami automobilio pavadinimo gauta reiksme
    td.appendChild(txt);//idedame teksta i td teg'a

    var td = document.createElement('td');//sukuriame td teg'a
    tr.appendChild(td);//pasakome, kad jis bus tr teg'o vaikas
    var txt = document.createTextNode(spd);//sukuriame teksta priskirdami automobilio greicio gauta reiksme
    td.appendChild(txt);//idedame reiksme i td teg'a
}


//nurodome is kur pasiimti antrosios inputu formos duomenis
var form2 = document.querySelector('#speeed');

//pasiimame automobiliu duomenis
form2.onsubmit = function (event) {
    event.preventDefault();

    var time = document.getElementById('time').value;//pasiimame laiko reiksme
    document.getElementById('time').value = '';//graziname tuscia reiksme i inputo forma

    for (i = 0; i < cars.length; i++) {//ciklo pagalba turedami laiko reiksme ir automobiliu masyva
        var d = time * cars[i].speed;//apskaiciuojame kiekvieno automobilio nuvaziuota atstuma 
        dArray.push(d);//atstumus susikeliame i atskira masyva, kurio reikes didziausiai reiksmei apskaiciuoti

        //apskaiciuojame didziausia atstumo reiksme ciklo pagalba
        if (dArray.length == cars.length) {
            var min = dArray[0];
            var maxi = 0;
            maxi = min;
            for (j = 1; j < dArray.length; j++) {
                if (dArray[j] >= maxi) {
                    maxi = dArray[j];
                }
                if (dArray[j] < min) {
                    min = dArray[j];
                }
            }
           
        }

    }
    //turedami maksimalaus atstumo reiksme uzpildome lentele
    for (i = 0; i < cars.length; i++) {

        var tbody = document.getElementById('tablebody2');

        var tr = document.createElement('tr');
        tbody.appendChild(tr);

        var td = document.createElement('td');
        tr.appendChild(td);

        var txt = document.createTextNode(cars[i].name);
        if (dArray[i] == maxi) {
            td.classList.add('select');
        }
        td.appendChild(txt);

        var td = document.createElement('td');
        tr.appendChild(td);
        var txt = document.createTextNode(dArray[i]);
        if (dArray[i] == maxi) {
            td.classList.add('select');
        }
        td.appendChild(txt);
    }
    console.log(cars);
    console.log('Lenktynių nugalėtojas nuvažiavo ' + maxi);
}
