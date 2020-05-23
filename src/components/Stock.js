import React from 'react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';
import 'react-vis/dist/style.css';
import { fetchDailyData } from './FetchAPI';



class Stock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataArr: []
        };
    }


    async  addAllLines() {
        let tempArr = [];

        for (var i = 0; i < this.props.stockSymbolArr.length; i++) {

            let stockSymbol = this.props.stockSymbolArr[i];
            let tempArrElement = await fetchDailyData(stockSymbol);
            tempArr.push(tempArrElement);
        }

        this.setState({ dataArr: tempArr });
    }

    async componentDidMount() {
        await this.addAllLines();
    }



    render() {
        const { dataArr } = this.state;


        return (
            <div>
                <h1>Stock Market Chart</h1>
                <XYPlot
                    width={1000}
                    height={500}>
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    <LineSeries
                        data={dataArr[0]}
                        style={{ stroke: 'green', strokeWidth: 3 }} />
                    <LineSeries
                        data={dataArr[1]}
                        style={{ stroke: 'red', strokeWidth: 3 }} />
                    <LineSeries
                        data={dataArr[2]}
                        style={{ stroke: 'blue', strokeWidth: 3 }} />

                    <XAxis title="Day" />
                    <YAxis title="Price" style={{ fill: 'red' }} />
                </XYPlot>
            </div>
        )
    }
}

export default Stock;