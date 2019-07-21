import React, { useCallback, useState } from 'react';

/*
const SearchBar = ({ onSearch }) => { 
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChanges = (e) => { setSearchValue(e.target.value); };

  const resetInputField = () => { setSearchValue(''); };

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <form className="search">
      <input value={searchValue} onChange={handleSearchInputChanges} type="text" />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>);
};

*/
const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  //const searchItem = useCallback(() => onSearch({ searchValue }));

  const onChange = (event) => {
    setSearchValue(event.target.value);
    onSearch({searchValue});
  };

  return (
    <div>
          <input onChange={onChange} type="text" placeholder="Search task" />
          
        </div>
  );
};

export default SearchBar;
