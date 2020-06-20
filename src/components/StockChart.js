import React from 'react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';
import 'react-vis/dist/style.css';
import { makeNormalChart, makeDiffChart } from './DataAnalyseTools';

class StockChart extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      chartChoice: 0
    }
  }


  renderPriceArr(priceArr, chosenStock) {
    if (this.state.chartChoice === 0) {
      return <LineSeries data={priceArr[chosenStock]} style={{ stroke: 'green', strokeWidth: 3 }} />;
    } else {
      return <div />;
    }
  }

  renderDiffArr(diffArr, chosenStock) {
    if (this.state.chartChoice === 1) {
      return <LineSeries data={diffArr[chosenStock]} style={{ stroke: 'blue', strokeWidth: 3 }} />;
    } else {
      return <div />;
    }
  }

  renderBothArr(priceArr, diffArr, chosenStock) {
    if (this.state.chartChoice === 1) {
      return (<div><LineSeries data={priceArr[chosenStock]} style={{ stroke: 'green', strokeWidth: 3 }} />
        <LineSeries data={diffArr[chosenStock]} style={{ stroke: 'blue', strokeWidth: 3 }} /></div>);
    } else {
      return <div />;
    }
  }


  render() {
    let priceArr = makeNormalChart(this.props.dataArr, this.props.chartDays);
    let diffArr = makeDiffChart(this.props.dataArr, this.props.chartDays);
    let chosenStock = this.props.selectedSymbolKey;



    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Stock Price Chart</h1>
        <XYPlot
          width={1000}
          height={500}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <div id="lines">
            {this.renderPriceArr(priceArr, chosenStock)}
            {this.renderDiffArr(diffArr, chosenStock)}
            {this.renderBothArr(priceArr, diffArr, chosenStock)}
          </div>

          <XAxis title="Day" />
          <YAxis title="Price" style={{ fill: 'red' }} />
        </XYPlot>
      </div>
    )
  }
}

export default StockChart;