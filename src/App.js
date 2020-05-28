import React, { Component } from "react";
import StockChart from "./components/StockChart";
import SymbolPicker from "./components/SymbolPicker";
import AnalysePicker from "./components/AnalysePicker";
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stockSymbolArr: ["AAPL", "FB", "MSFT"],
      selectedSymbolKey: 0,
      comparedSymbolKey1: 0,
      comparedSymbolKey2: 0,
      analyseKey:0,
      chartDays: 100
    };
  }

  handleSymbolChange = (key) => {
    this.setState({ selectedSymbolKey: key });
  }

  handleComparedSymbol1Change = (key) => {
    this.setState({ comparedSymbolKey1: key });
  }

  handleComparedSymbol2Change = (key) => {
    this.setState({ comparedSymbolKey2: key });
  }

  handleAnalyseChange = (key) => {
    this.setState({ analyseKey: key });
  }

  render() {
    return (
      <div className="App">
        <StockChart stockSymbolArr={this.state.stockSymbolArr} selectedSymbolKey={this.state.selectedSymbolKey} chartDays={this.state.chartDays} />
        <SymbolPicker stockSymbolArr={this.state.stockSymbolArr} handleSymbolChange={this.handleSymbolChange} />
        <SymbolPicker stockSymbolArr={this.state.stockSymbolArr} handleSymbolChange={this.handleComparedSymbol1Change}/>
        <SymbolPicker stockSymbolArr={this.state.stockSymbolArr} handleSymbolChange={this.handleComparedSymbol2Change}/>
        <AnalysePicker handleAnalyseChange={this.handleAnalyseChange}/>
      </div>
    );
  }

}


