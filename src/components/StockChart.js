import React from 'react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';
import 'react-vis/dist/style.css';
import {makeNormalChart} from './DataAnalyseTools';



class StockChart extends React.Component {


    render() {
        let singelData=makeNormalChart(this.props.dataArr, this.props.chartDays);

        let chosenStock=this.props.selectedSymbolKey
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
                        data={singelData[chosenStock]}
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