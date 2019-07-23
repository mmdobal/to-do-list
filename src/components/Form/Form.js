import React, { useCallback, useState } from 'react';

const Form = ({ onAdd }) => {
  const [name, setName] = useState('');

  const addItem = useCallback(() => {
    onAdd(name);
    setName('');
  });

  const onChange = event => setName(event.target.value);


  return (
    <div>
      <input value={name} onChange={onChange} type="text" placeholder="New task" />
      <button className="add-button" type="submit" onClick={addItem}>add</button>
    </div>
  );
};


export default Form;
