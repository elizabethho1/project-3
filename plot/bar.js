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
let layout = {
    title: "2021 Inflation Rates by Country"
};

// render the plot to the div tag with id
Plotly.newPlot("plot", traceData, layout);


