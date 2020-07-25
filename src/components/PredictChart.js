import React from 'react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';
import 'react-vis/dist/style.css';
import { makePercenChart, makeRelevanceArr } from './DataAnalyseTools';
import { arrayCutter, makeRecentArr, makeExpandArr, makeLastDateArr , makePredictDataSourceArr, findMinDays, makePredictChart, makePredictPercentArr} from './PredictAnalyseTools';
import {InputDays } from './TextIput';


class PredictChart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chartDays: 10
    };
  }

  handleDaysChange = (key) => {
    this.setState({ chartDays: key });
  }

  render() {

    let line0, line1, line2, line3;

    if (this.props.dataArr.length>0) {

      //first analyse 10 days data
      let cutArr = arrayCutter(this.props.dataArr[4], 10);
      let relevanceArr = makeRelevanceArr(cutArr[0], 10);
      let recentArr = makeRecentArr(relevanceArr);

      //6 includes the recent array
      let expandArr = makeExpandArr(recentArr, cutArr, 6);
      let relevanceArr1 = makeRelevanceArr(expandArr, 20);
      let recentArrNew = makeRecentArr(relevanceArr1);

      let lastDateArr=makeLastDateArr(recentArrNew,expandArr);

      let predictDataSourceArr=makePredictDataSourceArr(this.props.dataArr[4], lastDateArr); 
      console.log(predictDataSourceArr);

      let minDays=findMinDays(predictDataSourceArr);
      console.log(minDays);

      let perArr=makePredictPercentArr(predictDataSourceArr, minDays);
      console.log(perArr);

      let nowPrice=this.props.dataArr[4][1][this.props.dataArr[4][0].length-1];
      console.log(nowPrice);
      console.log(this.props.dataArr);
      console.log(this.props.dataArr[4][0].length-1);


      let maxChartDays=perArr[0].length;
      console.log(maxChartDays);
      // this.setState({chartDays:maxChartDays});

      let priceArr = makePredictChart(perArr, nowPrice, this.state.chartDays);
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
        <InputDays handleDaysChange={this.handleDaysChange}/>
      </div>
    )
  }
}

export default PredictChart;