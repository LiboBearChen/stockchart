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

  handleSymbolChange=(symbol)=>{
    let arr=[];
    arr.push(symbol);
    this.setState({stockSymbolArr:arr});
}

  render() {
    return (
      <div className="App">
        <StockChart stockSymbolArr={this.state.stockSymbolArr} chartDays={this.state.chartDays}/>
        <SymbolPicker stockSymbolArr={this.state.stockSymbolArr} handleSymbolChange={this.handleSymbolChange}/>
      </div>
    );
  }

}


