import { useState } from 'react';
import { Label, Input } from './Filter.Styled';

export default function Filter({ onInput }) {
  const [input, setInput] = useState('');

  const handleInputChange = event => {
    const inputData = event.currentTarget.value;
    setInput(inputData);
    onInput(inputData);
  };

  return (
    <Label htmlFor="">
      Find contacts by name:
      <Input type="text" value={input} onChange={handleInputChange} />
    </Label>
  );
}
