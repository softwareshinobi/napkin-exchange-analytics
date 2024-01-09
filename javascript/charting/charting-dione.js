

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

 

 
// logic to get new data
var getData = function() {
  $.ajax({
    url: 'https://api2.napkinexchange.softwareshinobi.digital/candlestick/history/DIONE',
    success: function(data) {
     
  
 $.each(data, function(key, value) {

    myChart.data.datasets[0].data.pop();

    myChart.data.labels.pop();
  });

//var responsePayloadParsed  = JSON.parse(value);
 $.each(data, function(key, value) {

console.log("11key / " + key);
console.log("value / " + value.stockPrice);

      myChart.data.labels.push(value.marketDate);
      myChart.data.datasets[0].data.push(value.stockPrice);
      
      // re-render the chart
    
  //myChart.update();
    });

  myChart.update();


 // process your data to pull out what you plan to use to update the chart
      // e.g. new label and a new data point
  //    console.log("data / "+data);
      // add new label and data point to chart's underlying data structures

    }
  });
};

getData();
// get new data every 3 seconds
setInterval(getData, 4000);
