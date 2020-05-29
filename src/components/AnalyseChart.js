import React from 'react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';
import 'react-vis/dist/style.css';
import {makeDiffChart, makePercenChart} from './DataAnalyseTools';



class StockChart extends React.Component {

    render() {
        let singelData=[];
        if(this.props.analyseKey===0){
            singelData=makeDiffChart(this.props.dataArr, this.props.chartDays);
            console.log("11111111");
        }
        else (this.props.analyseKey===1){
            singelData=makePercenChart(this.props.dataArr, this.props.chartDays);
            console.log("2222222");
        }
        console.log(this.props.analyseKey);
        let chosenStock=this.props.selectedSymbolKey;
        
        return (
            <div>
                <h1>Analysis Chart</h1>
                <XYPlot
                    width={1000}
                    height={500}>
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    <LineSeries
                        data={singelData[chosenStock]}
                        style={{ stroke: 'red', strokeWidth: 3 }} />
                    <XAxis title="Day" />
                    <YAxis title="Price" style={{ fill: 'red' }} />
                </XYPlot>
            </div>
        )
    }
}

export default StockChart;