import React from 'react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';
import 'react-vis/dist/style.css';

class IntradayChart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stockSymbolArr: ["AAPL", "FB", "MSFT", "NFLX", "GOOGL"],
      max: 0,
      min: 0,
      start: 0,
      close: 0,
      predictClose: 0


    };
  }

  render() {

    line0 = <LineSeries data={priceArr[0]} style={{ stroke: '#000000', strokeWidth: 3 }} />;
    line1 = <LineSeries data={priceArr[1]} style={{ stroke: '#666666', strokeWidth: 3 }} />;
    line2 = <LineSeries data={priceArr[2]} style={{ stroke: '#737373', strokeWidth: 3 }} />;
    line3 = <LineSeries data={priceArr[3]} style={{ stroke: '#bfbfbf', strokeWidth: 3 }} />;

    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Intraday Price</h1>
        <XYPlot
          width={1500}
          height={500}>
          <HorizontalGridLines />
          <VerticalGridLines />
          {line0}
          {line1}
          {line2}
          {line3}
          <XAxis title="Minute" />
          <YAxis title="Price" style={{ fill: 'red' }} />
        </XYPlot>
      </div>
    )
  }
}

export default IntradayChart;