import React from 'react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';
import 'react-vis/dist/style.css';
import { fetchDailyData } from './FetchAPI';
import {makeNormalChart} from './DataAnalyseTools';



class StockChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataArr: []
        };
    }


    async  getAllData() {
        let tempArr = [];

        for (var i = 0; i < this.props.stockSymbolArr.length; i++) {

            
            let stockSymbol = this.props.stockSymbolArr[i];
            let tempArrElement = await fetchDailyData(stockSymbol);
            tempArr.push(tempArrElement);
        }

        this.setState({ dataArr: tempArr });
    }

    async componentDidMount() {
        await this.getAllData();
    }



    render() {
        let singelData=makeNormalChart(this.state.dataArr, this.props.chartDays, this.props.key);

        console.log(singelData);
        return (
            <div>
                <h1>Stock Market Chart</h1>
                <XYPlot
                    width={1000}
                    height={500}>
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    <LineSeries
                        data={singelData}
                        style={{ stroke: 'green', strokeWidth: 3 }} />
{/*                     <LineSeries
                        data={finalDataDrr[1]}
                        style={{ stroke: 'red', strokeWidth: 3 }} />
                    <LineSeries
                        data={finalDataDrr[2]}
                        style={{ stroke: 'blue', strokeWidth: 3 }} />
 */}
                    <XAxis title="Day" />
                    <YAxis title="Price" style={{ fill: 'red' }} />
                </XYPlot>
            </div>
        )
    }
}

export default StockChart;