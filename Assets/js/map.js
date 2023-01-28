var graph = null;

function drawVisualization() {
  var style = document.getElementById("style").value;
  var withValue = ["bar-color", "bar-size", "dot-size", "dot-color"].indexOf(style) != -1;

  // Create and populate a data table.
  var data = new vis.DataSet();
  var extra_content = [];
  data.add({
    id: "c57621e7d6cfb81",
    x: 0,
    y: -1,
    z: 0,
    extra: extra_content[0],
  });
  var axis_x = {};
  var axis_y = {};
  var file1 = "countries.json?nocache=" + Math.random();
  var _width = "1000px";
  var _height = "1000px";

  var request = new XMLHttpRequest();
  request.open("GET", file1, true);

  function axisLoad(axis_obj, callback) {
    Object.keys(axis_obj).forEach(function(field, i) {
      callback(axis_obj[field], i);
    });
  }

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var result = JSON.parse(request.responseText);
      axisLoad(result.graph3d, function(object, i) {
        data.add(object);
      });
      axisLoad(result.axis_x, function(object, i) {
        axis_x[i] = object;
      });
      axisLoad(result.axis_y, function(object, i) {
        axis_y[i] = object;
      });
      data.remove("c57621e7d6cfb81");
    } else {
      console.log("ERR: request.onload");
    }
  };
  request.onerror = function() {
    console.log("ERR: Connection request");
  };
  request.send();

  var options = {
    width: _width,
    height: _height,
    style: style,
    showPerspective: false,
    showLegend: true,
    showGrid: true,
    showShadow: true,
    xLabel: "country",
    yLabel: "INDEX",
    zLabel: "2021 inflation rate",
    legendLabel: "value",
    rotateAxisLabels: true,
    axisColor: "#41413C",
    axisFontType: "courier",
    axisFontSize: 30,
    gridColor: "#5590CC",
    backgroundColor: "white",
    dataColor: {
      fill: "green",
      stroke: "green",
      strokeWidth: 2,
    },
    cameraPosition: {
      horizontal: 0,
      vertical: 2,
      distance: 2.3,
    },
    tooltip: function(point) {
      return (
        "value: <b>" +
        point.z +
        "%</b><br>" +
        axis_x[point.x] +
        "</b><br>" +
        axis_y[point.y]
      );
    },
    tooltipDelay: 0,
    tooltipStyle: {
      content: {
        background: "rgba(255, 255, 255, 0.7)",
        padding: "10px",
        borderRadius: "10px",
      },
      line: {
        borderLeft: "1px dotted rgba(0, 0, 0, 0.5)",
      },
      dot: {
        border: "5px solid rgba(0, 0, 0, 0.5)",
      },
    },
    keepAspectRatio: false,
    verticalRatio: 0.5,
    xBarWidth: 1,
    yBarWidth: 1,
    xStep: 1,
    yStep: 1,
    xCenter: "50%",
    yCenter: "25%",
    xValueLabel: function(value) {
      return "" + axis_x[value.toString()];
    },
    yValueLabel: function(value) {
      return "" + axis_y[value.toString()];
    },
    zValueLabel: function(value) {
      return value + "%";
    },
  };
  var camera = graph ? graph.getCameraPosition() : null;
  var container = document.getElementById("mygraph");
  graph = new vis.Graph3d(container, data, options);
  if (camera) graph.setCameraPosition(camera);
  document.getElementById("style").onchange = drawVisualization;
}

window.addEventListener("load", () => {
  drawVisualization();
});