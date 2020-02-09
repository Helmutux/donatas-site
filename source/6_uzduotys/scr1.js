var task_1 = document.getElementById('answer_t1');
var result = [];
var text = document.querySelector('.task1_answer');

task_1.onclick = function (event) {
    event.preventDefault();
    var startNumber = document.getElementById('startNumber_t1').value;
    var pradinis = Number(startNumber);
    result.push(pradinis);
    var multiplier = document.getElementById('multiplier_t1').value;
    var quantity = document.getElementById('quantity_t1').value;

    for (var i = 1; i <= quantity; i++) {

        startNumber *= multiplier;
        result.push(startNumber);
    }
    document.getElementById('startNumber_t1').value ='';
    document.getElementById('multiplier_t1').value ='';
    document.getElementById('quantity_t1').value = '';
    
    text.innerHTML = '';
    var p = document.createElement('p');
    text.appendChild(p);
    var txt = document.createTextNode('Pradinis skaičius: ' + pradinis + '.');
    p.appendChild(txt);
    var p = document.createElement('p');
    text.appendChild(p);
    var txt = document.createTextNode('Daugiklis: ' + multiplier + '.');
    p.appendChild(txt);
    var p = document.createElement('p');
    text.appendChild(p);
    var txt = document.createTextNode('Ciklų skaičius: ' + quantity + '.');
    p.appendChild(txt);
    var p = document.createElement('p');
    text.appendChild(p);

    var p = document.createElement('p');
    text.appendChild(p);
    var txt = document.createTextNode('Skaičių seka: ');
    p.appendChild(txt);

    result.pop(pradinis);
    for (var i=0; i<result.length; i++){
        var ats = result[i];
        var txt = document.createTextNode(' ' + ats + ', ');
        p.appendChild(txt);
    }
    text.classList.add('task_answer');
    result = []
}


    
