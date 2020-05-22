import React from 'react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';
import 'react-vis/dist/style.css';




class Stock extends React.Component {

    constructor() {
        super();
        this.state = {
            stockChartXValues: [],
            stockChartYValues: [],


        }
    }

    componentDidMount() {

        this.fetchStock(this.props.symbol1);
        

        /* this.fetchStock(this.props.symbol2);
        this.setState({dataArr2:this.makeDataArr()}); */

    }

    addLine() {

    }

    fetchStock(stockSymbol) {
        const pointerToThis = this;
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

            var dataObj = {};

            dataObj.x = i;
            dataObj.y = parseFloat(this.state.stockChartYValues[i]);

            tempArr.push(dataObj);
        }

        return tempArr;
    }


    render() {
        var dataArr1=this.makeDataArr();

        return (
            <div>
                <h1>Stock Market Chart</h1>
                <XYPlot
                    width={1000}
                    height={500}>
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    <LineSeries
                        data={dataArr1}
                        style={{ stroke: 'violet', strokeWidth: 3 }} />
                    {/*  <LineSeries
                        data={[this.state.dataArr2]}
                        style={{ stroke: 'red', strokeWidth: 3 }} /> */}

                    <XAxis title="Day" />
                    <YAxis title="Price" style={{ fill: 'red' }} />
                </XYPlot>
            </div>
        )
    }
}

export default Stock;