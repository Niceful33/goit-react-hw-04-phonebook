import React from 'react';
import { Label, Input } from './Filter.Styled';

class Filter extends React.Component {
  state = {
    input: '',
  };
  handleInputChange = event => {
    this.setState({ input: event.currentTarget.value });
    this.props.onInput(event.currentTarget.value);
  };
  render() {
    return (
      <Label htmlFor="">
        Find contacts by name:
        <Input
          type="text"
          value={this.state.input}
          onChange={this.handleInputChange}
        />
      </Label>
    );
  }
}
export default Filter;
