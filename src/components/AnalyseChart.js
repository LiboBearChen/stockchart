import React from 'react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';
import 'react-vis/dist/style.css';
import {makeNormalChart} from './DataAnalyseTools';



class StockChart extends React.Component {

   /*  constructor(props) {
        super(props);
        this.state = {
            dataArr: []
        };
    }


    async  getAllData() {
        let tempArr = [];

        for (var i = 0; i < this.props.stockSymbolArr.length; i++) {

            
            let stockSymbol = this.props.stockSymbolArr[i];
            let tempArrElement = await fetchDailyData(stockSymbol);
            tempArr.push(tempArrElement);
        }

        this.setState({ dataArr: tempArr });
    }

    async componentDidMount() {
        await this.getAllData();
    } */



    render() {
        /* let singelData=makeNormalChart(this.state.dataArr, this.props.chartDays);

        let chosenStock=this.props.selectedSymbolKey */
        
        return (
            <div>
                <h1>Analysis Chart</h1>
                <XYPlot
                    width={1000}
                    height={500}>
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    {/* <LineSeries
                        data={singelData[chosenStock]}
                        style={{ stroke: 'green', strokeWidth: 3 }} /> */}
                    <XAxis title="Day" />
                    <YAxis title="Price" style={{ fill: 'red' }} />
                </XYPlot>
            </div>
        )
    }
}

export default StockChart;