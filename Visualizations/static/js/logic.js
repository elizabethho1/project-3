// Creating the map object
var myMap = L.map("map", {
  center: [10.5994, -20.6731],
  zoom: 2
  });

/// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Load the GeoJSON data.
var geoData = "https://raw.githubusercontent.com/elizabethho1/project-3/main/Resources/countries3.geojson";


var geojson;

// Get the data with d3.
d3.json(geoData).then(function(data) {

  // Create a new choropleth layer.
  geojson = L.choropleth(data, {

    // Define which property in the features to use.
    valueProperty: "inflation_rate",

    // Set the color scale.
    scale: ["#ffffb2", "#b10026"],

    // The number of breaks in the step range
    steps: 10,

    // q for quartile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color
      color: "#fff",
      weight: 1,
      fillOpacity: 0.8
    },


  // Binding a popup to each layer
  onEachFeature: function(feature, layer) {
    layer.bindPopup("<strong>" + feature.properties.ADMIN +  "</strong><br /><br />Inflation rate: " +
      feature.properties.inflation_rate);
  }
}).addTo(myMap);


  // Set up the legend.
  var legend = L.control({ position: "bottomright" });
  legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");
    var limits = geojson.options.limits;
    var colors = geojson.options.colors;
    var labels = [];

    // Add the minimum and maximum.
    var legendInfo = "<h3>Global Inflation Per Country<br />(Consumer Price Index Inflation rates for 2021)</h3>" +
      "<div class=\"labels\">" +
        "<div class=\"min\">" + limits[0] + "</div>" +
        "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
      "</div>";

    div.innerHTML = legendInfo;

    limits.forEach(function(limit, index) {
      labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
    });

    div.innerHTML += "<ul>" + labels.join("") + "</ul>";
    return div;
  };

  // Adding the legend to the map
  legend.addTo(myMap);

});

