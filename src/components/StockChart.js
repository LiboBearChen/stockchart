import React, {ReactDOM} from 'react';
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

    handleChartChoiceChange() {

    let priceArr = makeNormalChart(this.props.dataArr, this.props.chartDays);
    let diffArr = makeDiffChart(this.props.dataArr, this.props.chartDays);
    let chosenStock = this.props.selectedSymbolKey
    let lines;

    if (this.state.chartChoice === 0) {
        lines = (<LineSeries data={priceArr[chosenStock]} style={{ stroke: 'green', strokeWidth: 3 }} />);
    }
    else if (this.state.chartChoice === 1) {
        lines = (<LineSeries data={diffArr[chosenStock]} style={{ stroke: 'blue', strokeWidth: 3 }} />);
    }
    else if (this.state.chartChoice === 2) {
        lines = (<div><LineSeries data={priceArr[chosenStock]} style={{ stroke: 'green', strokeWidth: 3 }} />
            <LineSeries data={diffArr[chosenStock]} style={{ stroke: 'blue', strokeWidth: 3 }} /></div>);
    }

    ReactDOM.render(lines, document.getElementById('line'));
}


render() {

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Stock Price Chart</h1>
            <XYPlot
                width={1000}
                height={500}>
                <HorizontalGridLines />
                <VerticalGridLines />
                <div id="line"></div>
                <XAxis title="Day" />
                <YAxis title="Price" style={{ fill: 'red' }} />
            </XYPlot>
        </div>
    )
}
}

export default StockChart;