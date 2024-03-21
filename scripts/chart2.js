function generateCharts2(containerId){
  fetch('data/data2.json')
  .then(response => response.json())
  .then(data2 => {

    var vname = data2.recordsets[0].map(function(item) {
        return item.VNAME;
    });
    
    var average_time = data2.recordsets[0].map(function(item) {
        return item.GenAvgDeadTimePerBerthing;
    });
    
    new Chart(containerId, {
      type: "bar",
      data: {
        labels: vname,
        datasets: [{
          data: average_time,
          backgroundColor: 'blue'
        }]
      },
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: "Simple Bar Chart"
        }
      }
    });
  })
  .catch(error => console.error('Error fetching JSON:', error));
}

document.addEventListener('DOMContentLoaded', function() {
  generateCharts2('chart2wrapper');
});