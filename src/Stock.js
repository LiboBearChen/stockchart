import React from 'react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';
import 'react-vis/dist/style.css';



class Stock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValues: []
        }
    }

    componentDidMount() {
        this.fetchStock();
    }

    fetchStock() {
        const pointerToThis = this;
        console.log(pointerToThis);
        const API_KEY = 'CX5XG0YFCZFJ41K0';
        let StockSymbol = 'AMZN';
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

    render() {

        console.log(this.state.stockChartXValues);
        console.log(this.state.stockChartYValues);



        var dataArr = [
            { x: 1, y: 12 },
            { x: 2, y: 21 },
            { x: 3, y: 2 },
            { x: 4, y: 12 },
            { x: 5, y: 21 },
            { x: 6, y: 2 },
            { x: 7, y: 12 },
            { x: 8, y: 21 },
            { x: 9, y: 2 }
        ];


        /* var dataArr = {};
        keys.forEach((key, i) => dataArr[key] = this.state.stockChartYValues[i]);

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