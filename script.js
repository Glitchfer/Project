// Line Chart

var histori = document.getElementById("myChart").getContext('2d');

// Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = 18;

var dataFirst = {
    label: "This Year's",
    data: [10000, 8000, 6000, 5000, 12000, 8000, 1000, 9000, 7000, 10000, 3000, 13000],
    fill: false,
    borderColor: '#00F1FF',
    pointBorderColor: 'none'
};

var dataSecond = {
    label: "Last Year's",
    data: [11000, 3000, 8000, 6000, 9000, 11000, 3000, 10000, 6000, 11000, 4000, 12000],
    fill: false,
    borderColor: '#FFB8C6',
    pointBorderColor: 'none'
};

var dataHistory = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [dataFirst, dataSecond]
};



var chartOptions = {
    legend: {
        display: false, //<---- title grafik
        position: 'bottom',
        labels: {
            boxWidth: 5,
            fontColor: 'black'
        }
    }
};

var lineChart = new Chart(histori, {
    type: 'line',
    data: dataHistory,
    options: chartOptions
});