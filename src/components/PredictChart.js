import React from 'react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';
import 'react-vis/dist/style.css';
import { makeNormalChart, makeDiffChart } from './DataAnalyseTools';
import { arrayCutter, makePredictLine } from './PredictAnalyseTools';


class PredictChart extends React.Component {

  

  render() {
    let line;
    let curve;

    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Predicted Price Chart</h1>
        <XYPlot
          width={1000}
          height={500}>
          <HorizontalGridLines />
          <VerticalGridLines />

          <XAxis title="Day" />
          <YAxis title="Price" style={{ fill: 'red' }} />
        </XYPlot>
      </div>
    )
  }
}

export default PredictChart;