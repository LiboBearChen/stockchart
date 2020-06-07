import React, { Component } from "react";
import { fetchDailyData } from './components/FetchAPI';
import StockChart from "./components/StockChart";
import SymbolPicker from "./components/SymbolPicker";
import AnalysePicker from "./components/AnalysePicker";
import AnalyseChart from "./components/AnalyseChart";
import AnalyseTable from "./components/AnalyseTable/AnalyseTable";
import {makerelevanceArr} from './components/DataAnalyseTools';
import styles from './App.module.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stockSymbolArr: ["AAPL", "FB", "MSFT"],
      dataArr: [],
      selectedSymbolKey: 0,
      comparedSymbolKey1: 0,
      comparedSymbolKey2: 0,
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

  /* handleComparedSymbol1Change = (key) => {
    this.setState({ comparedSymbolKey1: key });
  }

  handleComparedSymbol2Change = (key) => {
    this.setState({ comparedSymbolKey2: key });
  } */

  handleAnalyseChange = (key) => {
    this.setState({ analyseKey: key });
  }

  render() {
    return (
      <div className={styles.gridContainer}>
        <div class="styles.gridItem">
          <StockChart dataArr={this.state.dataArr} selectedSymbolKey={this.state.selectedSymbolKey} chartDays={this.state.chartDays} />
        </div>
        <div class="styles.gridItem">
          <SymbolPicker stockSymbolArr={this.state.stockSymbolArr} handleSymbolChange={this.handleSymbolChange} />
        </div>
        <div class="styles.gridItem">
          <AnalyseChart dataArr={this.state.dataArr} selectedSymbolKey={this.state.selectedSymbolKey} chartDays={this.state.chartDays} analyseKey={this.state.analyseKey} />
        </div>
        <div class="styles.gridItem">
          <SymbolPicker stockSymbolArr={this.state.stockSymbolArr} handleSymbolChange={this.handleComparedSymbol1Change} />
          <SymbolPicker stockSymbolArr={this.state.stockSymbolArr} handleSymbolChange={this.handleComparedSymbol2Change} />
          <AnalysePicker handleAnalyseChange={this.handleAnalyseChange} />
          <AnalyseTable relevanceArr={makerelevanceArr(this.state.dataArr, this.state.chartDays)} />
        </div>
      </div>
    );
  }

}


