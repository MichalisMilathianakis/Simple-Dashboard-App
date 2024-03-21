function generateCharts(containerId){
    fetch('data/data1.json')
    .then(response => response.json())
    .then(data => {

    var vessels = data.recordsets[0].map(function(item) {
        return item.Vessel;
    });

    var laytimes = data.recordsets[0].map(function(item) {
        return item.TotalLaytime;
    });

    new Chart(containerId, {
        type: "bar",
        data: {
            labels: vessels,
            datasets: [{
                label: 'Total Laytime',
                data: laytimes,
                backgroundColor: 'blue'
            },{
                label: 'Average Laytime',
                data: data.recordsets[0].map(function(item) {
                    return item.AvgLaytime;
                }),
                backgroundColor: 'red'
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Stacked Bar Chart'
            },
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true,
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
})
.catch(error => console.error('Error fetching JSON:', error));
}

  document.addEventListener('DOMContentLoaded', function() {
    generateCharts('chart1wrapper');
  });