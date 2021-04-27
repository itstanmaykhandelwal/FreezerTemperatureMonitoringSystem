var ctx = document.getElementById('graph').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: ["Iværksætter", "Forandringsagent"],
        datasets: [{
            label: "Din ledelsesstil",
            backgroundColor: [
                "#00ACFF", "#DBECF8"
            ],
            data: [54, 12,],
        }]
    },

    // Configuration options go here
    options: {
      legend: {
            display: false,
        },
      tooltips: {
            enabled: true,
            mode: 'index',
           callbacks: {
            label: function (tooltipItems, data) {
                var i, label = [], l = data.datasets.length;
                for (i = 0; i < l; i += 1) {
                    label[i] = data.datasets[i].label + ': ' + data.datasets[i].data[tooltipItems.index] + '%';
                }
                return label;
            }
        }
      }
    }
});
var ctx = document.getElementById('graphTwo').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: ["Iværksætter", "Forandringsagent"],
        datasets: [{
            label: "Din ledelsesstil",
            backgroundColor: [
                "#00ACFF", "#DBECF8"
            ],
            data: [54, 12,],
        }]
    },

    // Configuration options go here
    options: {
      legend: {
            display: false,
        },
      tooltips: {
            enabled: true,
            mode: 'index',
           callbacks: {
            label: function (tooltipItems, data) {
                var i, label = [], l = data.datasets.length;
                for (i = 0; i < l; i += 1) {
                    label[i] = data.datasets[i].label + ': ' + data.datasets[i].data[tooltipItems.index] + '%';
                }
                return label;
            }
        }
      }
    }
});
var ctx = document.getElementById('graphThree').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: ["Iværksætter", "Forandringsagent"],
        datasets: [{
            label: "Din ledelsesstil",
            backgroundColor: [
                "#00ACFF", "#DBECF8"
            ],
            data: [54, 12,],
        }]
    },

    // Configuration options go here
    options: {
      legend: {
            display: false,
        },
      tooltips: {
            enabled: true,
            mode: 'index',
           callbacks: {
            label: function (tooltipItems, data) {
                var i, label = [], l = data.datasets.length;
                for (i = 0; i < l; i += 1) {
                    label[i] = data.datasets[i].label + ': ' + data.datasets[i].data[tooltipItems.index] + '%';
                }
                return label;
            }
        }
      }
    }
});
var ctx = document.getElementById('graphFour').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: [],
        datasets: [{
            label: "Din ledelsesstil",
            backgroundColor: [
                "#00ACFF", "#DBECF8"
            ],
            data: [0,100],
        }]
    },

    // Configuration options go here
    options: {
      legend: {
            display: false,
        },
      tooltips: {
            enabled: true,
            mode: 'index',
           callbacks: {
            label: function (tooltipItems, data) {
                var i, label = [], l = data.datasets.length;
                for (i = 0; i < l; i += 1) {
                    label[i] = data.datasets[i].label + ': ' + data.datasets[i].data[tooltipItems.index] + '%';
                }
                return label;
            }
        }
      }
    }
});
var ctx = document.getElementById('graphFive').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: ["Iværksætter", "Forandringsagent"],
        datasets: [{
            label: "Din ledelsesstil",
            backgroundColor: [
                "#00ACFF", "#DBECF8"
            ],
            data: [54, 12,],
        }]
    },

    // Configuration options go here
    options: {
      legend: {
            display: false,
        },
      tooltips: {
            enabled: true,
            mode: 'index',
           callbacks: {
            label: function (tooltipItems, data) {
                var i, label = [], l = data.datasets.length;
                for (i = 0; i < l; i += 1) {
                    label[i] = data.datasets[i].label + ': ' + data.datasets[i].data[tooltipItems.index] + '%';
                }
                return label;
            }
        }
      }
    }
});
var ctx = document.getElementById('graphSix').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: ["Iværksætter", "Forandringsagent"],
        datasets: [{
            label: "Din ledelsesstil",
            backgroundColor: [
                "#00ACFF", "#DBECF8"
            ],
            data: [54, 12,],
        }]
    },

    // Configuration options go here
    options: {
      legend: {
            display: false,
        },
      tooltips: {
            enabled: true,
            mode: 'index',
           callbacks: {
            label: function (tooltipItems, data) {
                var i, label = [], l = data.datasets.length;
                for (i = 0; i < l; i += 1) {
                    label[i] = data.datasets[i].label + ': ' + data.datasets[i].data[tooltipItems.index] + '%';
                }
                return label;
            }
        }
      }
    }
});
var ctx = document.getElementById('graphSeven').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: ["Iværksætter", "Forandringsagent"],
        datasets: [{
            label: "Din ledelsesstil",
            backgroundColor: [
                "#00ACFF", "#DBECF8"
            ],
            data: [54, 12,],
        }]
    },

    // Configuration options go here
    options: {
      legend: {
            display: false,
        },
      tooltips: {
            enabled: true,
            mode: 'index',
           callbacks: {
            label: function (tooltipItems, data) {
                var i, label = [], l = data.datasets.length;
                for (i = 0; i < l; i += 1) {
                    label[i] = data.datasets[i].label + ': ' + data.datasets[i].data[tooltipItems.index] + '%';
                }
                return label;
            }
        }
      }
    }
});
var ctx = document.getElementById('graphEight').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: ["Iværksætter", "Forandringsagent"],
        datasets: [{
            label: "Din ledelsesstil",
            backgroundColor: [
                "#00ACFF", "#DBECF8"
            ],
            data: [54, 12,],
        }]
    },

    // Configuration options go here
    options: {
      legend: {
            display: false,
        },
      tooltips: {
            enabled: true,
            mode: 'index',
           callbacks: {
            label: function (tooltipItems, data) {
                var i, label = [], l = data.datasets.length;
                for (i = 0; i < l; i += 1) {
                    label[i] = data.datasets[i].label + ': ' + data.datasets[i].data[tooltipItems.index] + '%';
                }
                return label;
            }
        }
      }
    }
});
var ctx = document.getElementById('graphNine').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: ["Iværksætter", "Forandringsagent"],
        datasets: [{
            label: "Din ledelsesstil",
            backgroundColor: [
                "#00ACFF", "#DBECF8"
            ],
            data: [54, 12,],
        }]
    },

    // Configuration options go here
    options: {
      legend: {
            display: false,
        },
      tooltips: {
            enabled: true,
            mode: 'index',
           callbacks: {
            label: function (tooltipItems, data) {
                var i, label = [], l = data.datasets.length;
                for (i = 0; i < l; i += 1) {
                    label[i] = data.datasets[i].label + ': ' + data.datasets[i].data[tooltipItems.index] + '%';
                }
                return label;
            }
        }
      }
    }
});