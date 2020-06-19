import React, { Component } from 'react';
import styles from './AnalyseTable.module.css';

class AnalyseTable extends Component {


    renderTableData() {
        return this.props.relevanceArr.map((relevanceObj, index) => {
            const { symbol1, symbol2, averDiffPercen } = relevanceObj

            return (
                <tr key="index">
                    <td>{index+1}</td>
                    <td>{this.checkSymbol(symbol1)}</td>
                    <td>{this.checkSymbol(symbol2)}</td>
                    <td>{averDiffPercen}</td>
                </tr>
            )
        })
    }

    checkSymbol = (key) => {
        return this.props.stockSymbolArr[key];
    }


    renderTableHeader() {
        /* let header = Object.keys(this.props.relevanceArr[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        }) */
    }

    render() {
        console.log(this.props.relevanceArr);
        return (
            <div>
                <h1 id='title' className={styles.title}>Analysis Table</h1>
                <table id='relevance' className={styles.relevanceArr}>
                    <tbody>
                        <tr>
                            <th>Ranking</th>
                            <th>Stock1</th>
                            <th>Stock2</th>
                            <th>Index</th>
                        </tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AnalyseTable;

