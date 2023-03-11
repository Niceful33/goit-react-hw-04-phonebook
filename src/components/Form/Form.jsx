import React from 'react';
import { nanoid } from 'nanoid';
import { Label, Submit, InputForm } from './Form.Styled';

class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };
  handleInputChange = event => {
    // console.log(event);
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.onSubmit(contact);

    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <Label htmlFor="">
            Name
            <InputForm
              type="text"
              value={this.state.name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleInputChange}
            />
          </Label>
          <Label htmlFor="">
            Number
            <InputForm
              type="tel"
              value={this.state.number}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleInputChange}
            />
          </Label>
          <Submit type="submit">Add contacts</Submit>
        </form>
      </>
    );
  }
}
export default Form;
