let laikas;
let valst;
let metrai;
let sekundes;
let masyvas;
let speed;
let cele1 = document.querySelector('.data_laikas');
let cele2 = document.querySelector('.v_nr');
let cele3 = document.querySelector('.greitis');
let form = document.querySelector('.uzklausa');



form.onsubmit = function (evt) {
    // instrukcija atsaukia duomenu issiuntima
    evt.preventDefault();
    laikas = document.getElementById('datalaikas').value;
    valst = document.getElementById('numeris').value;
    metrai = Number(document.getElementById('atstumas').value);
    sekundes = Number(document.getElementById('laikas').value);
    masyvas = new Array (laikas, valst, metrai, sekundes);
    
    console.log(masyvas[3]);

    speed = ((3600 * (masyvas[2])) / (masyvas[3])) / 1000;
    
    console.log(speed);

    cele1.innerHTML = masyvas[0];
    cele2.innerHTML = masyvas[1];
    cele3.innerHTML = speed.toFixed(0);

}