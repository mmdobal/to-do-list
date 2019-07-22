import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListItem from '../ListItem';
import Form from '../Form';
import SearchBar from '../SearchBar';


const List = () => {
  const [list, setList] = useState([]);
  const [aux, setAux] = useState([]);

  useEffect(() => {
    axios.get('https://fast-caverns-36778.herokuapp.com/api/tasks/')
      .then((response) => {
        setList(response.data);
      })
      .catch(err => console.log(err));
  }, [aux]);


  const handleAdd = (name) => {
    axios.post('https://fast-caverns-36778.herokuapp.com/api/tasks', { name })
      .then(response => setAux(response.data));
  };

  const handleDelete = (id) => {
    axios.delete(`https://fast-caverns-36778.herokuapp.com/api/tasks/${id}`)
      .then(response => setAux(response.data));
  };


  const handleToggle = (item) => {
    if (item.status === 'done') {
      axios.put(`https://fast-caverns-36778.herokuapp.com/api/tasks/${item._id}`,
        { status: 'todo' })
        .then(response => setAux(response.data));
    } else if (item.status === 'todo') {
      axios.put(`https://fast-caverns-36778.herokuapp.com/api/tasks/${item._id}`,
        { status: 'done' })
        .then(response => setAux(response.data));
    }
  };


  const handleSearch = (input) => {
    if (input === '') {
      axios.get('https://fast-caverns-36778.herokuapp.com/api/tasks/')
        .then((response) => {
          setList(response.data);
          setAux(response.data);
        })
        .catch(err => console.log(err));
    }
    axios.get(`https://fast-caverns-36778.herokuapp.com/api/tasks/filter/${input}`)
      .then((response) => {
        setList(response.data);
      })
      .catch(err => console.log(err));
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
    <h1>ToDo List</h1>
      <div className="upper">

      <SearchBar onSearch={handleSearch} />
      <Form onAdd={handleAdd} status="todo" />
      </div>
      <div className="list">
          <h2>Todo</h2>
          <ul>
            {
                list.filter(item => item.status === 'todo').map(item => (
                  <ListItem key={item._id} item={item} onDelete={handleDelete} onToggle={handleToggle} />
                ))}
          </ul>
        </div>
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
