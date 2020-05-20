import React from 'react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';
import 'react-vis/dist/style.css';



class Stock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValues: [],
            
            
        }
    }

    componentDidMount() {
        this.fetchStock();
        
    }

    fetchStock() {
        const pointerToThis = this;
        const API_KEY = 'CX5XG0YFCZFJ41K0';
        let StockSymbol = 'WMT';
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
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

                    pointerToThis.setState({
                        stockChartXValues: stockChartXValuesFunction,
                        stockChartYValues: stockChartYValuesFunction
                    });

                }
            )
    }

    makeDataArr() {
        var tempArr = [];
        
        for (var i = 0; i < this.state.stockChartYValues.length; i++) {

            var dataObj={};

            dataObj.x = i;
            dataObj.y = parseFloat(this.state.stockChartYValues[i]);

            tempArr.push(dataObj);
        }

        return tempArr;
    }


    render() {



        var dataArr=this.makeDataArr();
        

        /* var dataObj = {
            x: 0,
            y: 0
        };


        var dataArr = [];


        this.state.stockChartYValues.forEach(makeDataArr);

        function makeDataArr(value, index, array) {
            dataObj.x = index;
            dataObj.y = parseFloat(value);
            dataArr.push(dataObj);
            console.log(dataArr.length);
        }

        for(var i=0; i<this.state.stockChartYValues.length; i++)
        {
            dataObj.x = i;
            dataObj.y = parseFloat(this.state.stockChartYValues[i]);
            dataArr.push(dataObj);
        }

        console.log(dataArr); */


        return (
            <div>
                <h1>Stock Market</h1>
                <XYPlot
                    width={1000}
                    height={500}>
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    <LineSeries
                        data={dataArr}
                        style={{ stroke: 'violet', strokeWidth: 3 }} />
                    <XAxis title="Day" />
                    <YAxis title="Price" style={{ fill: 'red' }} />
                </XYPlot>
            </div>
        )
    }
}

export default Stock;