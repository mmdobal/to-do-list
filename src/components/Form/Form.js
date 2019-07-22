import React, { useCallback, useState } from 'react';

const Form = ({ onAdd, status }) => {
  const [name, setName] = useState('');

  const addItem = useCallback(() => onAdd({ name, status }));

  const onChange = event => setName(event.target.value);
  //const resetInputField = () => setName('');


  return (
    <div>
          <input value={name} onChange={onChange} type="text" placeholder="New task" />
          <button type="submit" onClick={addItem}>Submit</button>
        </div>
  );
};


export default Form;
