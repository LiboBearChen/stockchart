import React from 'react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';
import 'react-vis/dist/style.css';
import {makeNormalChart, makeDiffChart} from './DataAnalyseTools';



class StockChart extends React.Component {

    renderLines() {
        if(this.props.chartChoice===1){
            return (
                <LineSeries
                        data={diffArr[chosenStock]}
                        style={{ stroke: 'blue', strokeWidth: 3 }} />
            )
        }
    }

    render() {
        let priceArr=makeNormalChart(this.props.dataArr, this.props.chartDays);
        let diffArr = makeDiffChart(this.props.dataArr, this.props.chartDays);
        let chosenStock=this.props.selectedSymbolKey

        return (
            <div>
                <h1 style={{textAlign:'center'}}>Stock Price Chart</h1>
                <XYPlot
                    width={1000}
                    height={500}>
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    {this.renderLines()}
                    <LineSeries
                        data={priceArr[chosenStock]}
                        style={{ stroke: 'green', strokeWidth: 3 }} />
                    
                    <XAxis title="Day" />
                    <YAxis title="Price" style={{ fill: 'red' }} />
                </XYPlot>
            </div>
        )
    }
}

export default StockChart;