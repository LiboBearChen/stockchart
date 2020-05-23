import React, { Component } from "react";
import Stock from "./components/Stock";
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stockSymbolArr: ["AAPL","FB","MSFT"],
      stocksData: {}
    };
  }

  render() {
    return (
      <div className="App">
        <Stock stockSymbolArr={this.state.stockSymbolArr} />
      </div>
    );
  }

}


