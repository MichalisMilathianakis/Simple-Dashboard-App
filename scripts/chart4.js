function generateCharts4(containerId){
    fetch('data/data4.json')
    .then(response => response.json())
    .then(data4 => {    var session = data4.recordsets[0].map(function(item) {
            return item.SessionTime;
        });

        var lay = data4.recordsets[0].map(function(item) {
            return item.Laytime;
        });

        var conn = data4.recordsets[0].map(function(item) {
            return item.ConnectionTime;
        });

        var transfer = data4.recordsets[0].map(function(item) {
            return item.TransferTime;
        });

        var dead = data4.recordsets[0].map(function(item) {
            return item.DeadTime;
        });

        // Calculating total times for each category
        var totalSession = session.reduce((a, b) => a + b, 0);
        var totalLay = lay.reduce((a, b) => a + b, 0);
        var totalConn = conn.reduce((a, b) => a + b, 0);
        var totalTransfer = transfer.reduce((a, b) => a + b, 0);
        var totalDead = dead.reduce((a, b) => a + b, 0);

        new Chart(containerId, {
        type: "pie",
        data: {
            labels: ["Session Time", "Laytime", "Connection Time", "Transfer Time", "Dead Time"],
            datasets: [{
            label: 'Time Distribution',
            data: [totalSession, totalLay, totalConn, totalTransfer, totalDead],
            backgroundColor: [
                'red',
                'orange',
                'yellow',
                'green',
                'blue'
            ]
            }]
        },
        options: {
            title: {
            display: true,
            text: 'Pie Chart'
            }
        }
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));
}

document.addEventListener('DOMContentLoaded', function() {
  generateCharts4('chart4wrapper');
});