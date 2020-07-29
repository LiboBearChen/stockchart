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
      start:0,
      close:0,
      predictClose:0

      
    };
  }

  render() {

    
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Intraday Price</h1>
        <XYPlot
          width={1500}
          height={500}>
          <HorizontalGridLines />
          <VerticalGridLines />

          <XAxis title="Minute" />
          <YAxis title="Price" style={{ fill: 'red' }} />
        </XYPlot>
      </div>
    )
  }
}

export default IntradayChart;