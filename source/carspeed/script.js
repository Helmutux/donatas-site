var metrai;
var sekundes;
var speed;
var cele = document.querySelector('.greitis');
var form = document.querySelector('.uzklausa');



form.onsubmit = function (evt) {
    // instrukcija atsaukia duomenu issiuntima
    evt.preventDefault();

    kilometrai = Number(document.getElementById('kilometrai').value);
    metrai = Number(document.getElementById('metrai').value);
    valandos = Number(document.getElementById('hours').value);
    minutes = Number(document.getElementById('minutes').value);
    sekundes = Number(document.getElementById('seconds').value);
    var atstumas = kilometrai * 1000 + metrai;
    var laikas = valandos * 3600 + minutes * 60 + sekundes;
    
    // console.log(atstumas);
    // console.log(laikas);

    speed = (3600 * atstumas / laikas) / 1000;

    
    // console.log(speed);

    cele.innerHTML = speed.toFixed(1);

}