import React, { useCallback, useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [name, setName] = useState('');

  const searchItem = useCallback(() => onSearch({ name }));

  const onChange = event => setName(event.target.value);


  return (
    <div>
          <input onChange={onChange} type="text" placeholder="Search task" />
          <button type="submit" onClick={searchItem}>Search</button>
        </div>
  );
};


export default SearchBar;