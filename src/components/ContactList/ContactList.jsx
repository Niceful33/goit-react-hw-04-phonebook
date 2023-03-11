import React from 'react';
import propTypes from 'prop-types';
import { Item, Button } from './ContacList.Styled';

const ContactList = ({ filter, onDeleteItem }) => {
  //   console.log(filter);
  return (
    <ul>
      {filter.map(({ name, number, id }) => (
        <Item key={id}>
          <span>
            {name}:{number}
          </span>
          <Button type="button" onClick={() => onDeleteItem(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  filter: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  onDeleteItem: propTypes.func.isRequired,
};
