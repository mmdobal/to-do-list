import React, { useCallback} from 'react';

const SearchBar = ({ onSearch }) => {
  const searchItem = useCallback(() => onSearch(event.target.value));

  const onChange = () => searchItem();


  return (
    <div>
      <input onChange={onChange} type="text" placeholder="Search task" />
    </div>
  );
};

export default SearchBar;
