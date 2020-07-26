import React from 'react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';
import 'react-vis/dist/style.css';
import { makeNormalChart, makeDiffChart } from './DataAnalyseTools';
import {InputDays } from './TextIput';

class StockChart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chartDays: 100
    };
  }

  handleDaysChange = (key) => {
    this.setState({ chartDays: key });
  }

  renderLines(line1,line2, chartChoice) {
    let lines={line1:null, line2:null};
    if (chartChoice == 0) {
      lines.line1=line1;
    }
    else if (chartChoice == 1) {
      lines.line2=line2;
    }
    else{
      lines.line1=line1;
      lines.line2 = line2; 
    }
    return lines;
  }

  render() {
    let priceArr = makeNormalChart(this.props.dataArr, this.state.chartDays);
    let diffArr = makeDiffChart(this.props.dataArr, this.state.chartDays);
    let chosenStock = this.props.selectedSymbolKey;
    let chartChoice=this.props.chartChoice;
    let line1=<LineSeries data={priceArr[chosenStock]} style={{ stroke: 'green', strokeWidth: 3 }} />;
    let line2=<LineSeries data={diffArr[chosenStock]} style={{ stroke: 'blue', strokeWidth: 3 }} />;
    let lines=this.renderLines(line1,line2, chartChoice);
    line1=lines.line1;
    line2=lines.line2;
    
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Stock Price Chart</h1>
        <XYPlot
          width={1000}
          height={500}>
          <HorizontalGridLines />
          <VerticalGridLines />
          {line1}
          {line2}
          <XAxis title="Day" />
          <YAxis title="Price" style={{ fill: 'red' }} />
        </XYPlot>
        <p>Chart Days: </p>
        <InputDays handleDaysChange={this.handleDaysChange}/>
      </div>
    )
  }
}

export default StockChart;