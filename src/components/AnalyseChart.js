import React from 'react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';
import 'react-vis/dist/style.css';
import { makeDiffChart, makePercenChart,makeDiffPercenChart } from './DataAnalyseTools';



class StockChart extends React.Component {


    render() {
   
        let tempArr = [];
        let analyse0=[];
        let analyse1=[];
        let analyse2=[];
        analyse0 = makeDiffChart(this.props.dataArr, this.props.chartDays);
        tempArr.push(analyse0);
        analyse1 = makePercenChart(this.props.dataArr, this.props.chartDays);
        tempArr.push(analyse1);
        analyse2 = makeDiffPercenChart(this.props.dataArr, this.props.chartDays);
        tempArr.push(analyse2);
        let chosenStock = this.props.selectedSymbolKey;
        let key=this.props.analyseKey;
        let ranking=this.props.ranking;
        let linedata= tempArr[2][ranking];

        return (
            <div>
                <h1 style={{textAlign:'center'}}>Analysis Chart</h1>
                <XYPlot
                    width={1000}
                    height={500}>
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    <LineSeries
                        data={linedata}
                        style={{ stroke: 'red', strokeWidth: 3 }} />
                    <XAxis title="Day" />
                    <YAxis title="Price" style={{ fill: 'red' }} />
                </XYPlot>
            </div>
        )
    }
}

export default StockChart;