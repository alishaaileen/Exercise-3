// Generating Table Head

async function fetchData () {
  const temp = await fetch('https://swapi.co/api/planets/')
  return temp.json()
}


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

// =============================================

// Generating Table Body

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

// =============================================

// Fetch data from web and put it into the table

function makeTable(table, data) {

  console.log(data)
  let heads = data[0]

  // fetch('https://swapi.co/api/planets/')
  //   .then((response) => {
  //     return response.json()
  //   })
  //   .then((data) => {
  //     console.log(data)
  //     console.log(data.results[0].name)

  //     var heads = Object.keys(data.results[0])
      generateTableHead(table, heads)
      generateTable(table, data);
}

// =============================================