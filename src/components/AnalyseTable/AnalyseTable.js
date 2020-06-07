import React, { Component } from 'react';
import styles from './AnalyseTable.module.css';

class AnalyseTable extends Component {


    renderTableData() {
        return this.props.relevanceArr.map((relevanceArr) => {
            const { id, symbol1, symbol2, index } = relevanceArr
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{symbol1}</td>
                    <td>{symbol2}</td>
                    <td>{index}</td>
                </tr>
            )
        })
    }


    renderTableHeader() {
        let header = Object.keys(this.props.relevanceArr[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render() {

        return (
            <div>
                <h1 id='title' className={styles.title}>Analysis Table</h1>
                <table id='relevance' className={styles.relevanceArr}>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AnalyseTable;

