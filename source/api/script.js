var button = document.querySelector('button');
button.onclick = function (e) {
    e.preventDefault();
    fetch('https://api.coinlore.com/api/tickers/')
        .then(response => {
            return response.json();
        })
        .then(response => {
            var duomenys = response.data;
            var tBody = document.querySelector('tbody');
            for (var i = 0; i < duomenys.length; i++) {
                var rank = duomenys[i].rank;
                var name = duomenys[i].name;
                var supp = Number(duomenys[i].csupply);
                var supply = supp.toLocaleString();
                var priceEur = ((duomenys[i].price_usd * 0.90514).toFixed(2)) + '€';
                var percent_change_1h = duomenys[i].percent_change_1h;
                var percent_change_7d = duomenys[i].percent_change_7d;
                var percent_change_24h = duomenys[i].percent_change_24h;
                var symbol = duomenys[i].symbol;

                var tr = document.createElement('tr');

                tBody.appendChild(tr);
                var td = document.createElement('td');
                tr.appendChild(td);
                var txt = document.createTextNode(rank);
                td.appendChild(txt);

                var td = document.createElement('td');
                tr.appendChild(td);
                var txt = document.createTextNode(symbol);
                td.appendChild(txt);

                var td = document.createElement('td');
                tr.appendChild(td);
                var txt = document.createTextNode(name);
                td.appendChild(txt);

                var td = document.createElement('td');
                tr.appendChild(td);
                var txt = document.createTextNode(supply);
                td.classList.add('right');
                td.appendChild(txt);

                var td = document.createElement('td');
                tr.appendChild(td);
                var txt = document.createTextNode(priceEur);
                td.classList.add('right');
                td.appendChild(txt);

                var td = document.createElement('td');
                tr.appendChild(td);
                var txt = document.createTextNode(percent_change_1h);
                if (percent_change_1h < 0) {
                    td.classList.add('red');
                }
                td.classList.add('right');
                td.appendChild(txt);

                var td = document.createElement('td');
                tr.appendChild(td);
                var txt = document.createTextNode(percent_change_24h);
                if (percent_change_24h < 0) {
                    td.classList.add('red');
                }
                td.classList.add('right');
                td.appendChild(txt);

                var td = document.createElement('td');
                tr.appendChild(td);
                var txt = document.createTextNode(percent_change_7d);
                if (percent_change_7d < 0) {
                    td.classList.add('red');
                }
                td.classList.add('right');
                td.appendChild(txt);
            }
        })
}