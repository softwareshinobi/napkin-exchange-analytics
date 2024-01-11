

// create initial empty chart
var ctx_live = document.getElementById("mycanvas");
var myChart = new Chart(ctx_live, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      data: [],
      borderWidth: 1,
      borderColor:'#00c0ef',
      label: 'DIONE',
    }]
  },
  options: {
    responsive: true,
    title: {
      display: false,
      text: "Chart.js - Dynamically Update Chart Via Ajax Requests",
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        }
      }],      x: {
        ticks: {
          // For a category axis, the val is the index so the lookup via getLabelForValue is needed
          callback: function(val, index) {
            // Hide every 2nd tick label
            return index % 4112 === 0 ? '' : '';
          },
          color: 'red',
        }
      }
    }
  }
});

myChart.options.animation = false; // disables all animations
myChart.options.animations.colors = false; // disables animation defined by the collection of 'colors' properties
myChart.options.animations.x = false; // disables animation defined by the 'x' property
myChart.options.transitions.active.animation.duration = 0; // disables the animation for 'active' mode

var getData = function() {

    $.ajax({

        url: 'https://api2.napkinexchange.softwareshinobi.digital/candlestick/history/CALLISTO',

        success: function(data) {

            $.each(data, function(key, value) {

                myChart.data.datasets[0].data.pop();

                myChart.data.labels.pop();

            });

            $.each(data, function(key, value) {

                console.log("key / " + key);

                console.log("value / " + value);

                console.log("value.ask / " + value.ask);

                myChart.data.labels.push(value.id);

                myChart.data.datasets[0].data.push(value.ask);

            });

            myChart.update();

        }

    });

};

getData();

setInterval(getData, 4000);
