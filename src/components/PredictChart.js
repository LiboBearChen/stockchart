import React from 'react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';
import 'react-vis/dist/style.css';
import { makeNormalChart, makeRelevanceArr } from './components/DataAnalyseTools';
import { arrayCutter, makeRecentArr,  makeExpandArr} from './components/PredictAnalyseTools';



class PredictChart extends React.Component {

  

  render() {
    let cutArr=arrayCutter(this.state.dataArr[4],10);
    //rank arrays with length of 10
    let relevanceArr=makeRelevanceArr(cutArr[0], 10);
    let recentArr1=makeRecentArr(relevanceArr);
    let expandArr=makeExpandArr(recentArr1, cutArr, 10);
    console.log(expandArr); 

    let priceArr = makeNormalChart(expandArr, 20);
    let line0=<LineSeries data={priceArr[0]} style={{ stroke: '#000000', strokeWidth: 3 }} />;
    let line1=<LineSeries data={priceArr[1]} style={{ stroke: '#333333', strokeWidth: 3 }} />;
    let line2=<LineSeries data={priceArr[2]} style={{ stroke: '#737373', strokeWidth: 3 }} />;
    let line3=<LineSeries data={priceArr[3]} style={{ stroke: '#bfbfbf', strokeWidth: 3 }} />;

    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Predicted Price Chart</h1>
        <XYPlot
          width={1000}
          height={500}>
          <HorizontalGridLines />
          <VerticalGridLines />
          {line0}
          {line1}
          {line2}
          {line3}
          <XAxis title="Day" />
          <YAxis title="Price" style={{ fill: 'red' }} />
        </XYPlot>
      </div>
    )
  }
}

export default PredictChart;