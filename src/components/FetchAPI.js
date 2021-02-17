export const fetchDailyData = async (stockSymbol, type) => {
  const API_KEY = "CX5XG0YFCZFJ41K0";

  let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&outputsize=compact&apikey=${API_KEY}`;
  let stockChartXValues = [];
  let stockChartYValues = [];
  let returnedArr = [];

  try {
    var response = await fetch(API_Call);

    var data = await response.json();

    for (let key in data["Time Series (Daily)"]) {
      //convert string to number
      let x = key.replace("-", "");
      x = x.replace("-", "");
      x = parseInt(x);

      //trading suspended
      if (!(stockSymbol === "000825" && x > 20180412 && x < 20180916)) {
        stockChartXValues.push(x);
        let open = data["Time Series (Daily)"][key]["1. open"];
        let high = data["Time Series (Daily)"][key]["2. high"];
        let low = data["Time Series (Daily)"][key]["3. low"];
        let close = data["Time Series (Daily)"][key]["4. close"];
        let volume = data["Time Series (Daily)"][key]["5. volume"];

        //close = parseFloatclose;
        stockChartYValues.push(close);
      }
    }

    stockChartXValues.reverse();
    stockChartYValues.reverse();
    returnedArr.push(stockChartXValues);
    returnedArr.push(stockChartYValues);

    return returnedArr;
  } catch (error) {
    console.log(error);
  }
};
