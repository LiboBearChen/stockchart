import React from 'react';

class FetchAPI extends React.Component {

    fetchStock(stockSymbol) {

        
        const API_KEY = 'CX5XG0YFCZFJ41K0';

        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&outputsize=compact&apikey=${API_KEY}`;
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];
        fetch(API_Call)
            .then(
                function (response) {
                    return response.json();
                }
            )
            .then(
                function (data) {


                    for (var key in data['Time Series (Daily)']) {
                        stockChartXValuesFunction.push(key);
                        stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
                    }
                }
            )
            
            
        var tempArr = [];

        for (var i = 0; i < stockChartYValuesFunction.length; i++) {

            var dataObj = {};

            dataObj.x = i;
            dataObj.y = parseFloat(stockChartYValuesFunction[i]);

            tempArr.push(dataObj);
            console.log(tempArr);
        }

        console.log(tempArr);
        return tempArr;
     
    }
}

export default FetchAPI;