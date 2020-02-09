
var task_6 = document.getElementById('answer_t6');
var text6 = document.querySelector('.task6_answer');
var period = 3;
var workDayAmount = 0.2;
var weekendAmount = 0.1;

task_6.onclick = function (event) {
  event.preventDefault();

  var days = Number(document.getElementById('number_t6').value);
  var day = 0;
  var total = 0;
  while (day < days) {
    day += period
    if (day > days) {
      break
    }
    if (day % 7 === 0 || day % 7 === 6) {
      total += weekendAmount;
    } else {
      total += workDayAmount;
    }

  }
  var suma =(total).toFixed(1);
  text6.innerHTML = '';
  var p = document.createElement('p');
  text6.appendChild(p);
  var txt = document.createTextNode('Pasirinktas periodas dienomis: ' + days);
  p.appendChild(txt);

  var p = document.createElement('p');
  text6.appendChild(p);
  var txt = document.createTextNode('Per duotajį periodą Jonas sunaudos ' + suma + ' kg proteino papildų.');
  p.appendChild(txt);
  document.getElementById('number_t6').value = '';
  text6.classList.add('task_answer');
}
