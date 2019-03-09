var MONTHS = ['09:00', '09:15', '09:30', '09:45', '10:00', '10:15', '10:30', '10:45', '11:00', '11:15', '11:30', '11:45'];
var config = {
    type: 'line',
    data: {
        labels: ['09:00', '09:15', '09:30', '09:45', '10:00', '10:15', '10:30', '10:45', '11:00', '11:15', '11:30', '11:45'],
        datasets: [{
            label: 'Today (*Live)',
            backgroundColor: window.chartColors.red,
            borderColor: window.chartColors.red,
            data: [
                1200+randomScalingFactor(),
                1200+randomScalingFactor(),
                1200+randomScalingFactor(),
                1200+randomScalingFactor(),
                1200+randomScalingFactor(),
                1200+randomScalingFactor(),
                1200+randomScalingFactor(),
                1200+randomScalingFactor(),
                1200+randomScalingFactor(),
                1200+randomScalingFactor(),
                1200+randomScalingFactor(),
                1200+randomScalingFactor(),
            ],
            fill: false,
        }
        , {
        	label: 'Yesterday',
        	fill: false,
        	backgroundColor: window.chartColors.blue,
        	borderColor: window.chartColors.blue,
        	data: [
        		1200+randomScalingFactor(),
        		1200+randomScalingFactor(),
        		1200+randomScalingFactor(),
        		1200+randomScalingFactor(),
        		1200+randomScalingFactor(),
        		1200+randomScalingFactor(),
        		1200+randomScalingFactor(),
        		1200+randomScalingFactor(),
        		1200+randomScalingFactor(),
        		1200+randomScalingFactor(),
        		1200+randomScalingFactor(),
        		1200+randomScalingFactor(),
        	],
        }
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'ATM Transaction Volume'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Time Interval'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Transactions'
                }
            }]
        }
    }
};

// document.getElementById('randomizeData').addEventListener('click', function() {
//     config.data.datasets.forEach(function(dataset) {
//         dataset.data = dataset.data.map(function() {
//             return randomScalingFactor();
//         });

//     });

//     window.myLine.update();
// });

// var colorNames = Object.keys(window.chartColors);
// document.getElementById('addDataset').addEventListener('click', function() {
//     var colorName = colorNames[config.data.datasets.length % colorNames.length];
//     var newColor = window.chartColors[colorName];
//     var newDataset = {
//         label: 'Dataset ' + config.data.datasets.length,
//         backgroundColor: newColor,
//         borderColor: newColor,
//         data: [],
//         fill: false
//     };

//     for (var index = 0; index < config.data.labels.length; ++index) {
//         newDataset.data.push(randomScalingFactor());
//     }

//     config.data.datasets.push(newDataset);
//     window.myLine.update();
// });

// document.getElementById('addData').addEventListener('click', function() {
//     if (config.data.datasets.length > 0) {
//         var month = MONTHS[config.data.labels.length % MONTHS.length];
//         config.data.labels.push(month);

//         config.data.datasets.forEach(function(dataset) {
//             dataset.data.push(randomScalingFactor());
//         });

//         window.myLine.update();
//     }
// });

// document.getElementById('removeDataset').addEventListener('click', function() {
//     config.data.datasets.splice(0, 1);
//     window.myLine.update();
// });

// document.getElementById('removeData').addEventListener('click', function() {
//     config.data.labels.splice(-1, 1); // remove the label first

//     config.data.datasets.forEach(function(dataset) {
//         dataset.data.pop();
//     });

//     window.myLine.update();
// });