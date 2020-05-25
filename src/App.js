import React, { Component } from "react";
import StockChart from "./components/StockChart";
import SymbolPicker from "./components/SymbolPicker";
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stockSymbolArr: ["AAPL","FB","MSFT"],
      chartDays:100
    };
  }

  render() {
    return (
      <div className="App">
        <StockChart stockSymbolArr={this.state.stockSymbolArr} chartDays={this.state.chartDays}/>
        <SymbolPicker stockSymbolArr={this.state.stockSymbolArr}/>
      </div>
    );
  }

}


