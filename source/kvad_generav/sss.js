//susikuriu kintamuosius duomenu pasiekimui html kode
var form = document.querySelector('form');
var divas = document.getElementById('divss');
//susikuriu indeksa butina toliau
var i = 1;

//submitinu forma
form.onsubmit = function (evt) {
    evt.preventDefault();
    //pasiimu reiksmes is inputu
    width = document.getElementById('ilgis').value;
    height = document.getElementById('aukstis').value;
    background = document.getElementById('spalva').value;
    //patikrinimas ar reiksmes ne tuscios
    if (width === '' || height === '' || background === 'default') {
        return alert('suveskite reiksmes');//jei tuscios, prasome suvesti ir stabdome veiksma

    } else {//jei reiksmes gavome
        //kuriame stiliaus elementa
        console.log(width);
        console.log(height);
        console.log(background);
        var element = document.createElement("style");
        //apsirasome stiliu
        element.innerHTML = ".myClass" + i + " {background:" + background + "; width:" + width + "px; height:" + height + "px; margin: 3px; box-shadow: 3px 3px 15px 3px grey; border-radius: 5px}"; // css rule
        //kreipiames i html kodo HEAD taga
        var header = document.getElementsByTagName("HEAD")[0];
        //idedame susikurta stiliu
        header.appendChild(element);

        //susikuriame div elementa
        var div = document.createElement("div");
        //priskiriame jam susikurta klase(stiliu)
        div.classList.add("myClass" + i);
        //iterpiame susikurta div'a su priskirta klase i esama div'a
        divas.appendChild(div);
        //didiname indeksa vienetu
        i++;
    }
}
//paspaudus ant div elemento
divas.onclick = function (event) {
    event.preventDefault();
    //priskiriame jam nauja klase, kuri naikina tam tikrus css parametrus ir nudazo elementa fono spalva, tuo paciu ji paslepdama
    event.target.classList.add("zero");
}
