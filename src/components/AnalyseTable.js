import React, { Component } from 'react';

class AnalyseTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            relevance: [
                { id: 1, symbol1: 'FB', symbol2: 'APPL', index: 90 },
                { id: 2, symbol1: 'FB', symbol2: 'MSFT', index: 50 },
                { id: 3, symbol1: 'APPL', symbol2: 'MSFT', index: 20 },
            ]
        }
    }


    renderTableData() {
        return this.state.relevance.map((relevance) => {
            const { id, symbol1, symbol2, index } = relevance
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


    render() {

        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Analysis Table</h1>
                <table id='relevance'>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AnalyseTable;