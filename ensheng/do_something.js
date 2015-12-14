var data;
var x;
var y;
$.getJSON('NASDAQ_AAPL.json', function(json){
  data = json.dataset.data;
  x = _.reduce(data, function(total, n){
    return total.concat(n[0]);
  }, []);
  y = _.reduce(data, function(total, n){
    return total.concat(n[1]);
  }, []);

  $('#container').highcharts({
        chart: {
            type: 'scatter'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Date',
            data: x
        }, {
            name: 'money',
            data: y
        }]
    });
});
