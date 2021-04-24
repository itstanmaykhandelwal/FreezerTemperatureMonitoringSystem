var xValues = ["70"];
var yValues = [70,30];
var barColors = [
    "#b91d47",
    "#00aba9",
];
        
    new Chart("myTemp", {
        type: "doughnut",
        data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
        },
        options: {
        title: {
            display: true,
            text: "Temperature"
        }
    }
});