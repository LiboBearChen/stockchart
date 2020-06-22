import React from 'react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';
import 'react-vis/dist/style.css';
import { makeNormalChart, makeDiffChart } from './DataAnalyseTools';

class StockChart extends React.Component {

  state = {
    chartChoice: this.props.chartChoice
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      chartChoice: nextProps.chartChoice
    });
    
  }


  renderLines(priceArr, diffArr, chosenStock, chartChoice) {
    let lines;
    if (chartChoice == 0) {
      lines = <LineSeries data={priceArr[chosenStock]} style={{ stroke: 'green', strokeWidth: 3 }} />
      console.log(chartChoice);
      console.log(lines);
    }
    else if (chartChoice == 1) {
      lines = <LineSeries data={diffArr[chosenStock]} style={{ stroke: 'blue', strokeWidth: 3 }} />;
      console.log(chartChoice);
      console.log(lines);
    }
    else if (chartChoice == 2) {
      lines = <div><LineSeries data={priceArr[chosenStock]} style={{ stroke: 'green', strokeWidth: 3 }} />
        <LineSeries data={diffArr[chosenStock]} style={{ stroke: 'blue', strokeWidth: 3 }} /></div>;
      console.log(chartChoice);
      console.log(lines);
    }
    console.log(chartChoice);
    return lines;
  }

  render() {
    let priceArr = makeNormalChart(this.props.dataArr, this.props.chartDays);
    let diffArr = makeDiffChart(this.props.dataArr, this.props.chartDays);
    let chosenStock = this.props.selectedSymbolKey;
    let chartChoice=this.state.chartChoice;
    let lines=this.renderLines(priceArr, diffArr, chosenStock, chartChoice);
    

    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Stock Price Chart</h1>
        <XYPlot
          width={1000}
          height={500}>
          <HorizontalGridLines />
          <VerticalGridLines />
          {lines}
          <XAxis title="Day" />
          <YAxis title="Price" style={{ fill: 'red' }} />
        </XYPlot>
      </div>
    )
  }
}

export default StockChart;