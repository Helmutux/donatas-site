var metrai;
var sekundes;
var speed;
var cele = document.querySelector('.greitis');
var form = document.querySelector('.uzklausa');



form.onsubmit = function (evt) {
    // instrukcija atsaukia duomenu issiuntima
    evt.preventDefault();
    metrai = Number(document.getElementById('atstumas').value);
    sekundes = Number(document.getElementById('laikas').value);
    

    speed = ((3600 * metrai)/ sekundes) / 1000;
    
    console.log(speed);

    cele.innerHTML = speed.toFixed(0);

}