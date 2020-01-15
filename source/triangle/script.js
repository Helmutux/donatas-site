var ab;
var bc;
var ca;
var pp; //pusperimetris. duomuo butinas ploto skaiciavimui
var area;

var form = document.querySelector('.uzklausa');
var kr1 = document.querySelector('.pirma');
var kr2 = document.querySelector('.antra');
var kr3 = document.querySelector('.trecia');

var zinia1 = document.querySelector('.ar_tai');
var zinia2 = document.querySelector('.tr_tipas');
var zinia3 = document.querySelector('.tr_plotas');


form.onsubmit = function (evt) {
    // instrukcija atsaukia duomenu issiuntima
    evt.preventDefault();
    ab = Number(kr1.value);
    bc = Number(kr2.value);
    ca = Number(kr3.value);


    // console.log(ab);
    // console.log(bc);
    // console.log(ca);

    pp = (ab + bc + ca) / 2;
    area = Math.sqrt(pp * (pp - ab) * (pp - bc) * (pp - ca));

    pp = Number(pp.toFixed(2));
    area = Number(area.toFixed(2));

    // console.log(pp);
    // console.log(area);

    //pradedam funkciju seka. pirmas klausimas - ar tai trikampis


    if (ab + bc <= ca || bc + ca <= ab || ca + ab <= bc) {//jei dvieju krastiniu suma mazesne uz treciaja, tai ne trikampis
        zinia1.innerHTML = ' <b style="color:red">Ne, tai nėra trikampis.</b>';//pranesame ir kitu kintamuju neskaiciuojame, netikriname
        zinia2.innerHTML = ' nėra duomenų.';
        zinia3.innerHTML = ' nėra duomenų.';
    } else {//jei tai trikampis pradedame, pranesame apie tai
        zinia1.innerHTML = ' <b style="color:green">Taip! Tai trikampis.</b>';
        //ir tikriname ar jis lygiakrastis
        if (ab == bc && bc == ca) {//salyga lygiakrasciui
            //jei taip pranesame apie tai ir baigiame
            zinia2.innerHTML = ' <b style="color:#065f5e">Lygiakraštis.</b>';
            zinia3.innerHTML = ' <b style="color:blue">' + area + 'm<sup>2</sup></b>';
        }
        else {//jei ne lygiakrastis, 

            if (ab == bc || bc == ca || ca == ab) {//tikriname ar lygiasonis

                //jei TAIP visu pirma tikriname ar status pasitelkdami Pitagoro teorema

                if (Math.pow(ab, 2) + Math.pow(bc, 2) == Math.pow(ca, 2) || Math.pow(bc, 2) + Math.pow(ca, 2) == Math.pow(ab, 2) || Math.pow(ca, 2) + Math.pow(ab, 2) == Math.pow(bc, 2)) {
                    zinia2.innerHTML = ' <b style="color:#065f5e">Status lygiašonis.</b>';
                    zinia3.innerHTML = ' <b style="color:blue">' + area + 'm<sup>2</sup></b>';
                }
                //jei randame, kad ne status, jis palieka tiesiog lygiasonis
                else {
                    //pranesame apie tai ir baigiame
                    zinia2.innerHTML = ' <b style="color:#065f5e">Lygiašonis.</b>';
                    zinia3.innerHTML = ' <b style="color:blue">' + area + 'm<sup>2</sup></b>';
                }
            }//jei ne lygiasonis

            else {
                //tikrinimae ar status
                if (Math.pow(ab, 2) + Math.pow(bc, 2) == Math.pow(ca, 2) || Math.pow(bc, 2) + Math.pow(ca, 2) == Math.pow(ab, 2) || Math.pow(ca, 2) + Math.pow(ab, 2) == Math.pow(bc, 2)) {
                    zinia2.innerHTML = ' <b style="color:#065f5e">Status įvairiakraštis.</b>';//neimanoma isgauti rezultato, nes sunku rasti tinkmas reiksmes
                    zinia3.innerHTML = ' <b style="color:blue">' + area + 'm<sup>2</sup></b>';
                } else {
                    zinia2.innerHTML = ' <b style="color:#065f5e">Įvairiakraštis.</b>';
                    zinia3.innerHTML = ' <b style="color:blue">' + area + 'm<sup>2</sup></b>';
                }
            }
        }
    }
}


