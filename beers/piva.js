const container = document.getElementById('container');

fetch('https://random-data-api.com/api/beer/random_beer?size=10')
  .then(response => response.json())
  .then(data => {
    //Pořadí piva dle % alkoholu
    data.sort((a, b) => a.alcohol_by_volume - b.alcohol_by_volume);

    //Vytváření tabulky
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const headerRow = document.createElement('tr');
    const th1 = document.createElement('th');
    const th2 = document.createElement('th');
    const th3 = document.createElement('th');

    th1.textContent = 'Značka';
    th2.textContent = 'Název';
    th3.textContent = '% Alkoholu';

    headerRow.appendChild(th1);
    headerRow.appendChild(th2);
    headerRow.appendChild(th3);

    thead.appendChild(headerRow);
    table.appendChild(thead);
    table.appendChild(tbody);

    //Dodání dat do tabulky z API
    data.forEach((beer) => {
      const row = document.createElement('tr');
      const td1 = document.createElement('td');
      const td2 = document.createElement('td');
      const td3 = document.createElement('td');

      td1.textContent = beer.brand;
      td2.textContent = beer.name;
      td3.textContent = beer.alcohol_by_volume;

      row.appendChild(td1);
      row.appendChild(td2);
      row.appendChild(td3);

      tbody.appendChild(row);
    });

    container.appendChild(table);
  })
  .catch(error => console.error(error));
