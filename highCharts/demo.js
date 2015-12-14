function nth (i, arr) {
    return arr.map(function (elt) {
        return elt[i];
    })
}

$(function () {
    $.getJSON('../data/NASDAQ_AAPL.json')
     .done(function(json) {
    dta      = json['dataset']['data'];
    colNames = json['dataset']['column_names'];
    var cats        = nth(0, dta);
    var closePrices = nth(4, dta);
    //alert (String(colNames));
    //alert (String(cats ));
    //alert (String(closePrices));
    $('#container').highcharts({
        title: {
            text: 'Apple stock price',
            x: -20 //centera
        },
        subtitle: {
            text: 'Source: Quandl.com',
            x: -20
        },
        xAxis: {
            categories: nth(0, dta)
        },
        yAxis: {
            title: {
                text: 'Dollars'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '$'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: colNames[4],
	    data: nth(4, dta)
        },
	{
            name: colNames[3],
	    data: nth(3, dta)
        },     
	{
            name: colNames[2],
	    data: nth(2, dta)
        },
	{
            name: colNames[1],
	    data: nth(1, dta)
        }
	]
    });
  });
});
