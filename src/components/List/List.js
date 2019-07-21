import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListItem from '../ListItem';
import Form from '../Form';
import SearchBar from '../SearchBar';


const List = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('https://fast-caverns-36778.herokuapp.com/api/tasks/')
      .then((response) => {
        setList(response.data);
      })
      .catch(err => console.log(err));
  });


  const handleAdd = (name) => {
    axios.post('https://fast-caverns-36778.herokuapp.com/api/tasks', { name })
      .then(response => console.log(response));
  };

  const handleDelete = (id) => {
    axios.delete(`https://fast-caverns-36778.herokuapp.com/api/tasks/${id}`)
      .then(console.log('deleted'));
  };


  const handleToggle = (item) => {
    if (item.status === 'done') {
      axios.put(`https://fast-caverns-36778.herokuapp.com/api/tasks/${item._id}`,
        { status: 'todo' })
        .then(response => console.log(response));
    } else if (item.status === 'todo') {
      axios.put(`https://fast-caverns-36778.herokuapp.com/api/tasks/${item._id}`,
        { status: 'done' })
        .then(response => console.log(response));
    }
  };


  const handleSearch = (input) => {
    console.log(input);
    const updatedList = list.filter(item => item.name.includes(input.searchValue));
    console.log(updatedList);
    setList([...updatedList]);
  };




  /*    if (input.searchValue.length === 1) {
      axios.get('https://fast-caverns-36778.herokuapp.com/api/tasks/')
        .then((response) => {
          setList(response.data);
        })
        .catch(err => console.log(err));
    }*/


  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Form onAdd={handleAdd} status="todo" />
      <div className="list">
          <h2>Todo</h2>
          <ul>
            {
                list.filter(item => item.status === 'todo').map(item => (
                  <ListItem key={item._id} item={item} onDelete={handleDelete} onToggle={handleToggle} />
                ))}
          </ul>
        </div>
      <hr />
      <div className="list">

          <h2>Done</h2>
          <ul>
              {list.filter(item => item.status === 'done').map(item => (
            <ListItem key={item._id} item={item} onDelete={handleDelete} onToggle={handleToggle} />
          ))}
            </ul>
        </div>
    </div>
  );
};

export default List;
