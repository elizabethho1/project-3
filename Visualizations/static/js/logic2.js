var json ="static/data/countries.js";
var barChart = new $jit.BarChart({  
    //id of the visualization container  
    injectInto: 'infovis',  
    //whether to add animations  
    animate: true,  
    //horizontal or vertical barcharts  
    orientation: 'vertical',  
    //bars separation  
    barsOffset: 20,  
    //visualization offset  
    Margin: {  
      top:5,  
      left: 5,  
      right: 5,  
      bottom:5  
    },  
    //labels offset position  
    labelOffset: 5,  
    //bars style  
    type: useGradients? 'stacked:gradient' : 'stacked',  
    //whether to show the aggregation of the values  
    showAggregates:true,  
    //whether to show the labels for the bars  
    showLabels:true,  
    //labels style  
    Label: {  
      type: labelType, //Native or HTML  
      size: 13,  
      family: 'Arial',  
      color: 'white'  
    },  
    //add tooltips  
    Tips: {  
      enable: true,  
      onShow: function(tip, elem) {  
        tip.innerHTML = "<b>" + elem.name + "</b>: " + elem.value;  
      }  
    }  
  });  
  //load JSON data.  
  barChart.loadJSON(json);  