/* globals Chart:false */

(() => {
  'use strict'

  // Graphs
  const ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          23489,
          24092,
          12034
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          boxPadding: 3
        }
      }
    }
  })
})()

function createDataRow(dataArr) {
  const row = document.createElement('tr')
  for (let d of dataArr) {
    const td = document.createElement('td')
    td.innerText = d
    row.appendChild(td)
  }
  return row
}

function dataView(json) {
  const dataTable = document.querySelector("#datatable")
  const table_headers = document.querySelectorAll("th[scope]")
  const columnNames = Object.keys(json[0])
  for (let i = 0; i < 5; i++) {
    table_headers[i].innerText = columnNames[i]
  }

  for (p of json) {
    const row = createDataRow(Object.values(p))
    dataTable.appendChild(row)
  }

}

fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(json => dataView(json))

