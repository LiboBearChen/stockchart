export const fetchDailyData = async (stockSymbol) => {

    const API_KEY = 'CX5XG0YFCZFJ41K0';

    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValues = [];
    let stockChartYValues = [];
    let tempArr = [];

    try {

        var response = await fetch(API_Call);

        var data = await response.json();
        console.log(data);

        for (var key in data['Time Series (Daily)']) {
            stockChartXValues.push(key);
            stockChartYValues.push(data['Time Series (Daily)'][key]['1. open']);
        }



        for (var i = 0; i < stockChartYValues.length; i++) {

            var dataObj = {};

            dataObj.x = i;
            dataObj.y = parseFloat(stockChartYValues[i]);

            tempArr.push(dataObj);

        }


        return tempArr;
    } catch (error) {

        console.log(error);

    }

}

