var task_2 = document.getElementById('answer_t2');
var text2 = document.querySelector('.task2_answer');
var sum = 0;

task_2.onclick = function (event) {
  event.preventDefault();
  var firstNumber = document.getElementById('firstNumber_t2').value;
  var i = Number(firstNumber);
  var lastNumber = Number(document.getElementById('lastNumber_t2').value);

while(i<=lastNumber){
  sum+=i;
  i++;
}
    document.getElementById('firstNumber_t2').value ='';
    document.getElementById('lastNumber_t2').value ='';

    text2.innerHTML = '';
    var p = document.createElement('p');
    text2.appendChild(p);
    var txt = document.createTextNode('Pirmasis skaičius: ' + firstNumber + '.');
    p.appendChild(txt);
    var p = document.createElement('p');
    text2.appendChild(p);
    var txt = document.createTextNode('Paskutinis skaičius: ' + lastNumber + '.');
    p.appendChild(txt);
    var p = document.createElement('p');
    text2.appendChild(p);
    var txt = document.createTextNode('Suma visų skaičių tarp pirmojo ir paskutiniojo: ' + sum + '.');
    p.appendChild(txt);
    text2.classList.add('task_answer');
    sum = 0;
}