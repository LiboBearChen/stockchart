import React from 'react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';
import 'react-vis/dist/style.css';
import { makeNormalChart, makeRelevanceArr } from './DataAnalyseTools';
import { arrayCutter, makeRecentArr, makeExpandArr, makePredictLine } from './PredictAnalyseTools';



class PredictChart extends React.Component {



  render() {

    let line0, line1, line2, line3;

    if (this.props.dataArr.length>0) {

      //first analyse 10 days data
      let cutArr = arrayCutter(this.props.dataArr[4], 10);
      let relevanceArr = makeRelevanceArr(cutArr[0], 10);
      let recentArr = makeRecentArr(relevanceArr);
      let expandArr = makeExpandArr(recentArr, cutArr, 6);


      let relevanceArr1 = makeRelevanceArr(expandArr, 20);
      let recentArr1 = makeRecentArr(relevanceArr1);
      let expandArr1 = makeExpandArr(recentArr1, cutArr, 6);

      console.log(recentArr1);

      let line=makePredictLine(recentArr1,10);
      //expend to 30 days
      /* let expandArr2 = makeExpandArr(recentArr1, cutArr, 3);
      let relevanceArr2 = makeRelevanceArr(expandArr2[0], 30);
      let recentArr2 = makeRecentArr(relevanceArr2); */

      let priceArr = makeNormalChart(expandArr1, 20);
      line0 = <LineSeries data={priceArr[0]} style={{ stroke: '#000000', strokeWidth: 3 }} />;
      line1 = <LineSeries data={priceArr[1]} style={{ stroke: '#666666', strokeWidth: 3 }} />;
      line2 = <LineSeries data={priceArr[2]} style={{ stroke: '#737373', strokeWidth: 3 }} />;
      line3 = <LineSeries data={priceArr[3]} style={{ stroke: '#bfbfbf', strokeWidth: 3 }} />;
    }


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