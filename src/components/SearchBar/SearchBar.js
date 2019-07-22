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
  //const [searchValue, setSearchValue] = useState('');

  const searchItem = useCallback(() => onSearch( event.target.value ));

  const onChange = (event) => {
    //let searchValue = event.target.value;
    //setSearchValue(event.target.value);
    searchItem();
  };

  return (
    <div>
          <input onChange={onChange} type="text" placeholder="Search task" />
          
        </div>
  );
};

export default SearchBar;
