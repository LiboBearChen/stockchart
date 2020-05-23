import React from 'react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';
import 'react-vis/dist/style.css';
import { fetchDailyData } from './FetchAPI';



class Stock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataArr1: []
        };
    }

    async componentDidMount() {

        let symbol = this.props.symbol1;
        let tempArr = await fetchDailyData(symbol);
        this.setState({ dataArr1: tempArr });

        /* this.fetchStock(this.props.symbol2);
        this.setState({dataArr2:this.makeDataArr()}); */

    }



    render() {

        return (
            <div>
                <h1>Stock Market Chart</h1>
                <XYPlot
                    width={1000}
                    height={500}>
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    <LineSeries
                        data={this.state.dataArr1}
                        style={{ stroke: 'violet', strokeWidth: 3 }} />
                    {/*  <LineSeries
                        data={[this.state.dataArr2]}
                        style={{ stroke: 'red', strokeWidth: 3 }} /> */}

                    <XAxis title="Day" />
                    <YAxis title="Price" style={{ fill: 'red' }} />
                </XYPlot>
            </div>
        )
    }
}

export default Stock;