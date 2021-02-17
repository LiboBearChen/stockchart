import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import React from "react";

class AnalysePicker extends React.Component {
  render() {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">
          <h3>Chart Options</h3>
        </FormLabel>
        <RadioGroup
          defaultValue="0"
          onChange={(e) => this.props.handleChartChoiceChange(e.target.value)}
        >
          <FormControlLabel value="0" control={<Radio />} label="Price" />
          <FormControlLabel value="1" control={<Radio />} label="Fluctuation" />
          <FormControlLabel value="2" control={<Radio />} label="Both" />
        </RadioGroup>
      </FormControl>
    );
  }
}

export default AnalysePicker;
