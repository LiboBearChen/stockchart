export const fetchDailyData = async (stockSymbol) => {

    const API_KEY = 'CX5XG0YFCZFJ41K0';

    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValues = [];
    let stockChartYValues = [];
    let returnedArr = [];

    try {

        var response = await fetch(API_Call);

        var data = await response.json();
        console.log(data);

        for (let key in data['Time Series (Daily)']) {
            //convert string to number
            let x=key.replace("-", "");
            x=x.replace("-", "");
            x=parseInt(x);
            stockChartXValues.push(x);

            let y=data['Time Series (Daily)'][key]['4. close'];
            y=parseFloat(y);
            stockChartYValues.push(y);
        }

        returnedArr.push(stockChartXValues);
        returnedArr.push(stockChartYValues);


        
        
        return returnedArr;
    } catch (error) {

        console.log(error);

    }

}

