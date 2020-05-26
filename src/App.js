import React, { Component } from "react";
import StockChart from "./components/StockChart";
import SymbolPicker from "./components/SymbolPicker";
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stockSymbolArr: ["AAPL","FB","MSFT"],
      selectedSymbolKey: 0,
      chartDays:100
    };
  }

  handleSymbolChange=(key)=>{
    console.log(key);
    this.setState({selectedSymbolKey:key});
}

  render() {
    return (
      <div className="App">
        <StockChart stockSymbolArr={this.state.stockSymbolArr} selectedSymbolKey={this.state.selectedSymbolKey} chartDays={this.state.chartDays}/>
        <SymbolPicker stockSymbolArr={this.state.stockSymbolArr} handleSymbolChange={this.handleSymbolChange}/>
      </div>
    );
  }

}


