var task_3 = document.getElementById('answer_t3');
var text3 = document.querySelector('.task3_answer');

task_3.onclick = function (event) {
  event.preventDefault();
  var initialWeight = Number(document.getElementById('initialWeight_t3').value);
  var targetWeight = Number(document.getElementById('targetWeight_t3').value);
  var currentWeight = initialWeight;
  var weeks = 0;

  while (targetWeight < currentWeight) {
    currentWeight *= 0.99;
    weeks++;
  }
  text3.innerHTML = '';
  var p = document.createElement('p');
  text3.appendChild(p);
  var txt = document.createTextNode('Esamas svoris: ' + initialWeight + 'kg.');
  p.appendChild(txt);

  var p = document.createElement('p');
  text3.appendChild(p);
  var txt = document.createTextNode('Siekiamas svoris: ' + targetWeight + 'kg.');
  p.appendChild(txt);

  var p = document.createElement('p');
  text3.appendChild(p);
  var txt = document.createTextNode('Norint pasiekti tikslą, Jonui prireiks ' + weeks + ' savaičių.');
  p.appendChild(txt);
  
  text3.classList.add('task_answer');
  document.getElementById('initialWeight_t3').value ='';
  document.getElementById('targetWeight_t3').value ='';
}
