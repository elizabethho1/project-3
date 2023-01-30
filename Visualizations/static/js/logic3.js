
d3.text("https://raw.githubusercontent.com/elizabethho1/project-3/main/Resources/countries.csv", function(data) {
    var parsedCSV = d3.csv.parseRows(data);
    
    var container = d3.select("body")
        .append("table")
    
        .selectAll("tr")
        .data(parsedCSV).enter()
        .append("tr")
    
        .selectAll("td")
        .data(function(d) { return d; }).enter()
        .append("td")
        .text(function(d) { return d; });
});