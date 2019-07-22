import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
=======
import axios from 'axios';
>>>>>>> cafe3b8ff1b3474852ca1e3b73e86c3ffc0c2c26
import ListItem from '../ListItem';
import Form from '../Form';
import SearchBar from '../SearchBar';

const fakeList = [
  {
    id: '3',
    createdAt: 1563490180,
    name: 'study python',
    status: 'todo',
  },
  {
    id: '4',
    createdAt: 1563490120,
<<<<<<< HEAD
    name: 'name 4',
    status: 'done',useEffect
=======
    name: 'listen to music',
    status: 'done',
>>>>>>> cafe3b8ff1b3474852ca1e3b73e86c3ffc0c2c26
  },
  {
    id: '5',
    createdAt: 1563490060,
    name: 'study javascript',
    status: 'done',
  },
  {
    id: '6',
    createdAt: 1563490000,
    name: 'be awesome',
    status: 'todo',
  },
];

const List = () => {

  const [list, setList] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
   axios.get('http://5d2faa1928465b00146aa7be.mockapi.io/api/tasks')
    .then((response) => {
      setList(response.data);
    })
    .catch(err => console.log(err));
  }, []);
  /*

  useEffect(async () => {
    const fetchData = async () => {
      const result = await axios(
        'http://5d2faa1928465b00146aa7be.mockapi.io/api/tasks',
      );

      setList(result.data);
    };

    fetchData();
  });

  useEffect(() => {    
    fetch('http://5d2faa1928465b00146aa7be.mockapi.io/api/tasks')    
    .then(response => response.json())      
    .then(jsonResponse => {        
      setList([...jsonResponse.data]);     
    });  
  }, []);
  */


  const handleAdd = ({ name, status }) => {
    list.push({ name, status, id: 15 });
    setList([...list]);
  };

  const handleDelete = (id) => {
    const updatedList = list.filter(item => item.id !== id);
    console.log(updatedList);
    setList([...updatedList]);
  };

  const handleToggle = (id) => {
    const updatedList = list.map((item) => {      
      console.log('a', item);
      if (item.id === id) {
        item.status = item.status === 'done' ? 'todo' : 'done';
      }
      return item;
    });
    setList([...updatedList]);
  };

  const handleSearch = (input) => {
    console.log(input);
    const updatedList = list.filter(item => item.name.includes(input.searchValue));
    console.log(updatedList);
    setList([...updatedList]);
    if (input.searchValue.length === 1){
      setList([...fakeList]);
    }
  };


  return (
      <div>
        <SearchBar onSearch={handleSearch} />   
        <Form onAdd={handleAdd} status="todo" />
        <div className="list">
        <h2>Todo</h2>
          <ul>
              {
                list.filter(item => item.status === 'todo').map(item => (
                  <ListItem item={item} onDelete={handleDelete} onToggle={handleToggle} />
              ))}
          </ul>
        </div>
          <hr></hr>
          <div className="list">

        <h2>Done</h2>
        <ul>
              {list.filter(item => item.status === 'done').map(item => ( 
                  <ListItem item={item} onDelete={handleDelete} onToggle={handleToggle} />
              ))}
          </ul>
          </div>
        </div>
  );
};

export default List;
