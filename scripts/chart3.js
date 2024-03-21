function generateCharts3(containerId){
    fetch('data/data3.json')
    .then(response => response.json())
    .then(data3 => {    
        var date = data3.recordsets[0].map(function(item) {
            return item.DT;
        });

        var berth = data3.recordsets[0].map(function(item) {
            return item.AllBerths;
        });

        new Chart(containerId, {
        type: "line",
        data: {
            labels: date,
            datasets: [{
            label: 'Line Chart',
            data: berth,
            backgroundColor: 'rgba(0, 0, 255, 0.2)',
            borderColor: 'blue',
            borderWidth: 2,
            pointRadius: 3,
            pointBackgroundColor: 'blue',
            fill: true
            }]
        },
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));
}

document.addEventListener('DOMContentLoaded', function() {
  generateCharts3('chart3wrapper');
});    