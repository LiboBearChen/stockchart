import React, { Component } from "react";
import Stock from "./components/Stock";
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stockSymbol1: "WMT",
      stockSymbol2: "AMZN",
      stocksData: {}
    };
  }

  render() {
    return (
      <div className="App">
        <Stock symbol1={this.state.stockSymbol1} symbol2={this.state.stockSymbol2}/>
      </div>
    );
  }

}


