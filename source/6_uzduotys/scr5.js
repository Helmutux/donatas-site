var task_5 = document.getElementById('answer_t5');
var text5 = document.querySelector('.task5_answer');
var seka4 = [];

task_5.onclick = function (event) {
  event.preventDefault();

  var number = document.getElementById('number_t5').value;
  var pasirinkimas = number; 
  var quantity = 0;
  while (number >= 1) {
    number /= 10;
    quantity++;
  }
  text5.innerHTML = '';
  if (quantity % 10 == 1 || quantity == 1) {

    var p = document.createElement('p');
    text5.appendChild(p);
    var txt = document.createTextNode('Pasirinktas skaičius: ' + pasirinkimas + '.');
    p.appendChild(txt);

    var p = document.createElement('p');
    text5.appendChild(p);
    var txt = document.createTextNode('Duotasis skaičius sudarytas iš ' + quantity + ' skaitmens.');
    p.appendChild(txt);

  } else {
    var p = document.createElement('p');
    text5.appendChild(p);
    var txt = document.createTextNode('Pasirinktas skaičius: ' + pasirinkimas + '.');
    p.appendChild(txt);
    var p = document.createElement('p');
    text5.appendChild(p);
    var txt = document.createTextNode('Duotasis skaičius sudarytas iš ' + quantity + ' skaitmenų.');
    p.appendChild(txt);
  }
  document.getElementById('number_t5').value = '';
  text5.classList.add('task_answer');
}