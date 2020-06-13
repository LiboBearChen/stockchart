import React, { Component } from "react";
import { fetchDailyData } from './components/FetchAPI';
import StockChart from "./components/StockChart";
import SymbolPicker from "./components/SymbolPicker";
import RankingPicker from "./components/RankingPicker";
import AnalysePicker from "./components/AnalysePicker";
import AnalyseChart from "./components/AnalyseChart";
import AnalyseTable from "./components/AnalyseTable/AnalyseTable";
import {makerelevanceArr} from './components/DataAnalyseTools';
import styles from './App.module.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stockSymbolArr: ["AAPL", "FB", "MSFT", "NFLX", "GOOGL"],
      dataArr: [],
      ranking: 0,
      selectedSymbolKey: 0,
      analyseKey: 0,
      chartDays: 100
    };
  }


  //fetch all data for all stocks from API
  async  getAllData() {
    let tempArr = [];
    for (let i = 0; i < this.state.stockSymbolArr.length; i++) {
      let stockSymbol = this.state.stockSymbolArr[i];
      let tempArrElement = await fetchDailyData(stockSymbol);
      tempArr.push(tempArrElement);
    }
    this.setState({ dataArr: tempArr });
  }

  async componentDidMount() {
    await this.getAllData();
  }

  handleSymbolChange = (key) => {
    this.setState({ selectedSymbolKey: key });
  }

  handleAnalyseChange = (key) => {
    this.setState({ analyseKey: key });
  }

  handleRangkingChange = (key) => {
    this.setState({ ranking: key });
  }

  render() {
    let tableData=makerelevanceArr(this.state.dataArr, this.state.chartDays);

    return (
      <div className={styles.gridContainer}>
        <div className="styles.gridItem">
          <StockChart dataArr={this.state.dataArr} selectedSymbolKey={this.state.selectedSymbolKey} chartDays={this.state.chartDays} />
        </div>
        <div className="styles.gridItem">
          <SymbolPicker stockSymbolArr={this.state.stockSymbolArr} handleSymbolChange={this.handleSymbolChange} />
        </div>
        <div className="styles.gridItem">
          <AnalyseChart dataArr={this.state.dataArr} selectedSymbolKey={this.state.selectedSymbolKey} chartDays={this.state.chartDays} analyseKey={this.state.analyseKey} />
        </div>
        <div className="styles.gridItem">
          <RankingPicker rankingArr={tableData} handleRangkingChange={this.handleRangkingChange} stockSymbolArr={this.state.stockSymbolArr}/>
          <AnalysePicker handleAnalyseChange={this.handleAnalyseChange} />
          <AnalyseTable relevanceArr={tableData} stockSymbolArr={this.state.stockSymbolArr}/>
        </div>
      </div>
    );
  }

}


