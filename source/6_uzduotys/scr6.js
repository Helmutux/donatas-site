var days = 35; // Дней в периоде
var period = 4; // Как часто я ем протеин (раз в три дня)
var workDayAmount = 200; // Количество протеина в будние
var weekendAmount = 100; // Количество протеина в выходные
var day = 0;
var total=0;

while (day<days){
  
  
  day+=period
  if (day>days){
    break}
  if (day%7===0 || day%7===6) {
  total += weekendAmount;
  } else {
  total += workDayAmount;
  }
 
  
  console.log(day);
  console.log(total);
}
  console.log(total);