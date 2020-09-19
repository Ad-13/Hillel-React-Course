import React, { Component } from 'react'
import './AppInput.css';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';

export default class AppInput extends Component {

  state = {
    errors: [],
    touched: false
  }

  componentDidMount() {
    this.doValidation();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.doValidation();
    }
  }
  
  doValidation() {
    const errors = this.props.validators
      .map(validator => validator(this.props.value, this.props.name) )
      .filter(x => x );
    this.setState({ errors: errors })
    this.props.onValidation(errors, this.props.name);
  }

  touchInput = () => {
    this.setState({ touched: true });
  }

  render() {
    const { variant, value, onChange, label, name, placeholder } = this.props;
    const { touched } = this.state;

    return (
      <FormControl variant={variant}>
        <InputLabel className="label">{label}</InputLabel>
        <OutlinedInput
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={this.touchInput}
          error={touched && !!this.state.errors.length}
        />
        {
          this.state.errors.map((x, i) => touched && <FormHelperText error key={i}>{x}</FormHelperText>)
        }
        
      </FormControl>
    )
  }
}