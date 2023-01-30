console.log(data)
// country names
countries = data.map(function (row){
    return row.country
});
// trace for inflation data
let trace = {
    x: data.map(row => row.country),
    y: data.map(row => row.inflation_rate),
    type: "bar"
};
// data trace array
let traceData = [trace];
// apply the group barmode to the layout
var layout = {
    xaxis: {
      position: "bottom",
      titlefont: {
        family: 'Arial, sans-serif',
        size: 18,
        color: 'black'
      },
      showticklabels: true,
      tickangle: 'auto',
      tickfont: {
        family: 'Arial, sans-serif',
        size: 14,
        color: 'black'
      },
    },
    yaxis: {
      title: 'Inflation Rate (Percentage)',
      titlefont: {
        family: 'Arial, sans-serif',
        size: 18,
        color: 'black'
      },
      showticklabels: true,
      tickangle: 45,
      tickfont: {
        family: 'Arial, sans-serif',
        size: 14,
        color: 'black'
      },
    }
  };
Plotly.newPlot("plot", traceData, layout);

