import { NativeSelect, FormControl } from '@material-ui/core';
import React from 'react';


class SymbolPicker extends React.Component {

    render() {
        return (
            <FormControl >
                <NativeSelect onChange={(e)=>this.props.handleSymbolChange(e.target.value)}>
                    {this.props.stockSymbolArr.map((symbol, i) => <option key={i} value={symbol}>{symbol}</option>)}
                </NativeSelect>
            </FormControl>
        )
    }
}


export default SymbolPicker;