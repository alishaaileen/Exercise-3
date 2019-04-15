/**
 * Fetch data from Swapi
 */

async function fetchData () {
  const temp = await fetch('https://swapi.co/api/planets/')
  return temp.json()
}

/**
 * Generating Table Head
 */

function generateTableHead(table, data){
  var tHead = table.createTHead()
  var row = tHead.insertRow();
  for (var key in data) {
    var th = document.createElement("th");
    var text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

/**
 * Generating Table Body
 */

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

/**
 * Fetch data from web and put it into the table
 */

function makeTable(table, data) {
  let heads = data[0]

  generateTableHead(table, heads)
  generateTable(table, data);
}