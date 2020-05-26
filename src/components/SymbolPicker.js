import { NativeSelect, FormControl } from '@material-ui/core';
import React from 'react';


class SymbolPicker extends React.Component {

    render() {
        return (
            <FormControl >
                <NativeSelect defaultValue="FB" onChange={(e)=>this.props.handleSymbolChange(e.target.key)}>
                    {this.props.stockSymbolArr.map((symbol, i) => <option key={i} value={symbol}>{symbol}</option>)}
                </NativeSelect>
            </FormControl>
        )
    }
}


export default SymbolPicker;