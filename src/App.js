import React, { Component } from "react";
import Stock from "./components/Stock";
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stockSymbol: "WMT",
      stockSymbo2: "AMZN",
      stocksData: {}
    };
  }

  render() {
    return (
      <div className="App">
        <Stock symbol1={this.state.stockSymbo1} symbol2={this.state.stockSymbol2}/>
      </div>
    );
  }

}


