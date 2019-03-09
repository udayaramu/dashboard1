var presets = window.chartColors;
var utils = Samples.utils;
var inputs = {
    min: 20,
    max: 80,
    count: 12,
    decimals: 2,
    continuity: 1
};

function generateData() {
    return utils.numbers(inputs);
}

function generateLabels() {
    return utils.months({count: inputs.count});
}

utils.srand(42);

var data = {
    labels: generateLabels(),
    datasets: [{
        backgroundColor: utils.transparentize(presets.grey),
        borderColor: presets.grey,
        data: generateData(),
        label: 'Today',
        fill: '+1'
    }, {
        backgroundColor: utils.transparentize(presets.purple),
        borderColor: presets.purple,
        data: generateData(),
        label: 'Yesterday',
        fill: false
    }]
};

var options = {
    maintainAspectRatio: false,
    spanGaps: false,
    title: {
        display: true,
        text: 'Digital Login Volume'
    },
    elements: {
        line: {
            tension: 0.000001
        }
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
            stacked: true,
            scaleLabel: {
                display: true,
                labelString: 'Active Users'
            }
        }]
    },
    plugins: {
        filler: {
            propagate: false
        },
        'samples-filler-analyser': {
            target: 'chart-analyser'
        }
    }
};

var chart = new Chart('chart-1', {
    type: 'line',
    data: data,
    options: options
});

// eslint-disable-next-line no-unused-vars
function togglePropagate(btn) {
    var value = btn.classList.toggle('btn-on');
    chart.options.plugins.filler.propagate = value;
    chart.update();
}

// eslint-disable-next-line no-unused-vars
function toggleSmooth(btn) {
    var value = btn.classList.toggle('btn-on');
    chart.options.elements.line.tension = value ? 0.4 : 0.000001;
    chart.update();
}

// eslint-disable-next-line no-unused-vars
function randomize() {
    chart.data.datasets.forEach(function(dataset) {
        dataset.data = generateData();
    });
    chart.update();
}