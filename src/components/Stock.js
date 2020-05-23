import React from 'react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';
import 'react-vis/dist/style.css';
import { fetchDailyData } from './FetchAPI';



class Stock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataArr1: [],
            dataArr2: [],
            dataArr3: []
        };
    }

    async componentDidMount() {

        let symbol = this.props.symbol1;
        let tempArr = await fetchDailyData(symbol);
        this.setState({ dataArr1: tempArr });



    }



    render() {
        const {dataArr1, dataArr2, dataArr3}=this.state;

        return (
            <div>
                <h1>Stock Market Chart</h1>
                <XYPlot
                    width={1000}
                    height={500}>
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    <LineSeries
                        data={dataArr1}
                        style={{ stroke: 'green', strokeWidth: 3 }} />
                     <LineSeries
                        data={dataArr2}
                        style={{ stroke: 'red', strokeWidth: 3 }} />
                    <LineSeries
                        data={dataArr3}
                        style={{ stroke: 'blue', strokeWidth: 3 }} />

                    <XAxis title="Day" />
                    <YAxis title="Price" style={{ fill: 'red' }} />
                </XYPlot>
            </div>
        )
    }
}

export default Stock;