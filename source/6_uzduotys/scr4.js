var task_4 = document.getElementById('answer_t4');
var text4 = document.querySelector('.task4_answer');
var seka4 = [];

task_4.onclick = function (event) {
  event.preventDefault();

  var number = document.getElementById('number_t4').value;
  var i = 2;
  while (i < number) {
    if (number % i === 0) {
      seka4.push(i);
      i++;
    } else {
      i++;
    }
  }
  text4.innerHTML = '';
  if (seka4.length == 0) {
    var p = document.createElement('p');
    text4.appendChild(p);
    var txt = document.createTextNode('Pasirinktas skaičius: ' + number +'.');
    p.appendChild(txt);
    var p = document.createElement('p');
    text4.appendChild(p);
    var txt = document.createTextNode('Duotasis skaičius neturi daliklių išskyrus 1 ir patį save.');
    p.appendChild(txt);
  } else {
    var p = document.createElement('p');
    text4.appendChild(p);
    var txt = document.createTextNode('Pasirinktas skaičius: ' + number +'.');
    p.appendChild(txt);
    var p = document.createElement('p');
    text4.appendChild(p);
    var txt = document.createTextNode('Duotąjį skaičių į sveikus skaičius dalina šie skaičiai:');
    p.appendChild(txt);
    for (var i = 0; i < seka4.length; i++) {
      var ats = seka4[i];
      var txt = document.createTextNode(' ' + ats + ', ');
      p.appendChild(txt);
    }
  }
  document.getElementById('number_t4').value = '';
  text4.classList.add('task_answer');
  seka4 = []
}