import React from 'react';

class AnalyseTable extends React.Component {


    render() {


        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Analysis Table</h1>
                <table style={{width:'100%'}}>
                    <tr>
                        <th style={{ textAlign: 'center' }}>Relation Ranking</th>
                        <th style={{ textAlign: 'center' }}>Stock Names</th>
                        <th style={{ textAlign: 'center' }}>Average Index</th>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'center' }}>1</td>
                        <td style={{ textAlign: 'center' }}>FB, APPL</td>
                        <td style={{ textAlign: 'center' }}>90%</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'center' }}>2</td>
                        <td style={{ textAlign: 'center' }}>FB, MSFT</td>
                        <td style={{ textAlign: 'center' }}>50%</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'center' }}>3</td>
                        <td style={{ textAlign: 'center' }}>APPL, MSFT</td>
                        <td style={{ textAlign: 'center' }}>20%</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default AnalyseTable;