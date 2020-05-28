import { FormControl ,FormLabel, RadioGroup, FormControlLabel,Radio} from '@material-ui/core';
import React from 'react';


class AnalysePicker extends React.Component {

    render() {
        return (
            
            <FormControl component="fieldset">
                <FormLabel component="legend">Analysis Options</FormLabel>
                <RadioGroup defaultValue="0" onChange={(e) => this.props.handleAnalyseChange(e.target.value)}>
                    <FormControlLabel value="0" control={<Radio />} label="Difference" />
                    <FormControlLabel value="1" control={<Radio />} label="Percentage" />
                    <FormControlLabel value="2" control={<Radio />} label="Difference of Percentage" />
                </RadioGroup>
            </FormControl>
        )
    }
}


export default AnalysePicker;