import React, { useCallback, useState } from 'react';

const Form = ({ onAdd }) => {
  const [name, setName] = useState('');

  const addItem = useCallback(() => onAdd(name));

  const onChange = event => setName(event.target.value);
  //const resetInputField = () => setName('');


  return (
    <div>
          <input value={name} onChange={onChange} type="text" placeholder="New task" />
          <button className="btn" type="submit" onClick={addItem}>add</button>
        </div>
  );
};


export default Form;
