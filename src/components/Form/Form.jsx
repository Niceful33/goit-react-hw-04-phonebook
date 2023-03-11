import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Label, Submit, InputForm } from './Form.Styled';

export default function Form({ onSubmit }) {
  const [user, setUser] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'user':
        setUser(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name: user,
      number: number,
    };

    onSubmit(contact);

    reset();
  };

  const reset = () => {
    setUser('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="">
          Name
          <InputForm
            type="text"
            value={user}
            name="user"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleInputChange}
          />
        </Label>
        <Label htmlFor="">
          Number
          <InputForm
            type="tel"
            value={number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleInputChange}
          />
        </Label>
        <Submit type="submit">Add contacts</Submit>
      </form>
    </>
  );
}
