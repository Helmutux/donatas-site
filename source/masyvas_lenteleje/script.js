//susikuriame masyva, kuriame elementai patys yra masyvai
var masyvas = [
    ['2018-01-16 09:53:05', 'KSA132', 3230, 165],
    ['2018-12-01 12:34:15', 'LFE016', 270, 15],
    ['2019-05-12 02:34:00', 'DKV050', 23500, 937],
    ['2019-05-15 06:30:00', 'SKD001', 45125, 1502],
    ['2018-03-13 19:33:05', 'KAA142', 300, 9],
    ['2019-07-21 15:22:05', 'GFE106', 125648, 3945],
    ['2019-03-24 04:04:14', 'FRE0504', 353100, 8954],
    ['2019-09-01 07:54:98', 'SGD502', 5125, 502]
]

//susikuriame kintamuosius, kuriem priskirsime atskiras reiksmes is masyvo (nereikes paciam skaiciavime naudoti 'var')
var datalaikas;
var numeris;
var atstumas;
var laikas;
var greitis;


//susikuriame kintamaji 'table tbody'. Ji naudosim siusdami gautas reiksmes i html dokumenta atvaizdavimui 
var table = document.querySelector('table tbody'); 

//paleidziame cikla 'for' noredami is masyvo pasiimti reiksmes
//kadangi uzduoties salygoje zinome is keliu elementu sudaryti masyvo elementai-masyvai nereikia antrojo 'for' ciklo
for (i=0; i < masyvas.length; i++){//duodame komanda "eiti per masyvo elementus "i" kartų, kur "i" ne mažiau nei nulis, bet ne daugiau nei masyvo elementų kiekis
    datalaikas = (masyvas[i][0]);//"sukam" cikla "for" pasiimdami is masyvo datos ir laiko reiksmes
    numeris =  (masyvas[i][1]);//"sukam" cikla "for" pasiimdami is masyvo valst.nr reiksmes
    atstumas = (masyvas[i][2]);//"sukam" cikla "for" pasiimdami is masyvo nuvaziuoto atstumo reiksmes reiksmes
    laikas = (masyvas[i][3]);//"sukam" cikla "for" pasiimdami is masyvo sugaisto kelioneje laiko reiksmes
    greitis = (atstumas * 3600 / laikas) / 1000;//kiekvieno ciklo metu apskaiciuojame greiti
    
    console.log(datalaikas);//isvedam datos ir laiko reiksmes i konsole pasitikrinimui
    console.log(numeris);//isvedam numeriu reiksmes i konsole pasitikrinimui
    console.log(atstumas);//isvedam nuvaziuoto atstumo reiksmes i konsole pasitikrinimui
    console.log(laikas);//isvedam sugaisto laiko  reiksmes i konsole pasitikrinimui
    console.log(greitis);//isvedam paskaiciuoto greicio reiksmes i konsole pasitikrinimui
    


    //isvedame rezultatus (istrauktus is masyvo atskirus elementus) i html lentele.
    //greicio isvesciai papildomai pritaikome 'toFixed()' savybe, suapvalinancia rezultata iki sveiko skaiciaus
    table.innerHTML += '<tr><td>' + datalaikas + '</td><td>' + numeris +  '</td><td>' + atstumas +  '</td><td>'  + laikas + '</td><td>'  + greitis.toFixed(0) + '</td></tr>';

}


