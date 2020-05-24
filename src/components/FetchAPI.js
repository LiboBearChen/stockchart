export const fetchDailyData = async (stockSymbol,chartKind) => {

    const API_KEY = 'CX5XG0YFCZFJ41K0';

    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValues = [];
    let stockChartYValues = [];
    let returnedArr = [];

    try {

        var response = await fetch(API_Call);

        var data = await response.json();
        

        for (let key in data['Time Series (Daily)']) {
            //convert string to number
            let x=key.replace("-", "");
            x=x.replace("-", "");
            x=parseInt(x);
            stockChartXValues.push(x);

            let y=data['Time Series (Daily)'][key]['1. open'];
            y=parseFloat(y);
            stockChartYValues.push(y);
        }




        //data for normal chart
        if(chartKind===1){
            for (let i = 0; i < stockChartYValues.length; i++) {

                var dataObj = {};
                
                dataObj.x = i;
                dataObj.y = stockChartYValues[stockChartYValues.length-1-i];
    
                returnedArr.push(dataObj);       
            }
        }
        else if(chartKind===2){
            for (let i = 0; i < 30; i++) {

                var dataObj = {};
                
                dataObj.x = i;
                dataObj.y = stockChartYValues[stockChartYValues.length-1-i];
                console.log(stockChartXValues[i]);
                returnedArr.push(dataObj);       
            }
        }
        

      
        return returnedArr;
    } catch (error) {

        console.log(error);

    }

}

