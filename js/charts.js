// Options for charts
let basicOptns = {
    responsive: true,
    legend: {
        display: false
    }
};
// Line chart
const ctx1= document.getElementById('myWidget1').getContext('2d');
const lineChart = new Chart(ctx1, {
    // The type of chart we want to create
    type: 'line',
    data: {
        labels: [ '16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: 'Visits',
            backgroundColor: 'rgba(77,76,114,.2)',
            borderColor: '#4D4C72',
            borderWidth: 2,
            pointHoverBorderColor: '#4D4C72',
            pointHoverBackgroundColor: '#4D4C72',
            pointHoverRadius: 5,
            data: [ 0, 750, 1250, 980, 1500, 2000, 1500, 1276, 900, 1917, 2100],
        }]
    },
    options: basicOptns,
});

const ctx2 = document.getElementById('myWidget2').getContext('2d');
const barChart = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'bar',
    data: {
        labels: [ "Sun","Mon","Tue","Wed","Thu","Fri","Sat", ],
        datasets: [{
            label: '# of visits',
            data: [ 625, 851,227, 384, 311, 409, 98 ],
            backgroundColor: 'rgba(77,76,114,.8)',
        }]
    },
    options: basicOptns,
});

const ctx3 = document.getElementById('myWidget3').getContext('2d');
const pieChart = new Chart(ctx3, {
    // The type of chart we want to create
    type: 'doughnut',
    data: {
        datasets: [{
            data: [15, 40, 70],
            backgroundColor: ['rgba(129,201,143,.8)', 'rgba(116, 119, 191,1)','rgba(250, 128, 114, 1)' ],
            hoverBackgroundColor: ['rgba(129,201,143,.6)','rgba(116, 119, 191,0.8)','rgba(250, 128, 114, .7)' ]

        }],
        labels: [
            'Phones',
            'Tablets',
            'Desktop'
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: true,
            position: 'right'

        },
        scales: {
            xAxes: [{
                ticks: {
                    display: false,
                },
                gridLines: {
                    display: false,
                    drawBorder: false
                }
            }],
            yAxes: [{
                ticks: {
                    display: false,
                },
                gridLines: {
                    display: false,
                    drawBorder: false
                }
            }]
        }
    },
});
