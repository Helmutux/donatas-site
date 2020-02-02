var form = document.querySelector('form');
var height, weight, kmi, txt;
var text = document.getElementById('div');
// console.log(text);

form.onsubmit = function (ev) {
    ev.preventDefault();
    height = document.getElementById('ugis').value;
    document.getElementById('ugis').value = '';

    weight = document.getElementById('svoris').value;
    document.getElementById('svoris').value = '';

    kmi = Math.round(weight / (height * height));

    if (kmi <= 16) {
        text.innerHTML = 'Kritinis svorio trūkumas. Nedelsiant kreipkitės į gydytojus';
    }
    if (kmi > 16 && kmi <= 18.5) {
        text.innerHTML = 'Svorio trūkumas. Turite daugiau ir kokybiškai maitintis. Pasitarkite su gydytoju';
    }
    if (kmi > 18.5 && kmi <= 24.99) {
        text.innerHTML = 'Jūsų svoris normalus';
    }
    if (kmi >= 25 && kmi <= 30) {
        text.innerHTML = 'Turite antsvorį. Maitinkitės saikingiau';
    }
    if (kmi > 30 && kmi <= 35) {
        text.innerHTML = 'Esate nutukęs. Turite susirūpinti';
    }
    if (kmi > 35 && kmi <= 40) {
        text.innerHTML = 'Esate žymiai nutukęs. Pasikonsultuokite su gydytoju';
    }
    if (kmi > 40) {
        text.innerHTML = 'Kritinis nutukimas. Nedelsdami kreipkitės į gydytoją';
    }
}