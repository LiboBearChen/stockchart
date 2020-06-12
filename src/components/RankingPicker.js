import { NativeSelect, FormControl } from '@material-ui/core';
import React from 'react';


class RankingPicker extends React.Component {

    render() {
        return (
            
            <FormControl >
                <h3>Choose Ranking</h3>
                <NativeSelect onChange={(e)=>this.props.handleRangkingChange(e.target.value)}>
                    {this.props.rankingArr.map((obj, i) => <option key={i} value={i}>{i+1}. {obj.symbol1} and {obj.symbol2}</option>)}
                </NativeSelect>
            </FormControl>
        )
    }
}


export default RankingPicker;