import React, { useState } from 'react';
import ListItem from '../ListItem';
import Form from '../Form';
import SearchBar from '../SearchBar';

const fakeList = [
  {
    id: '3',
    createdAt: 1563490180,
    name: 'name 3',
    status: 'todo',
  },
  {
    id: '4',
    createdAt: 1563490120,
    name: 'name 4',
    status: 'done',
  },
  {
    id: '5',
    createdAt: 1563490060,
    name: 'name 5',
    status: 'done',
  },
  {
    id: '6',
    createdAt: 1563490000,
    name: 'name 6',
    status: 'todo',
  },
];

const List = () => {
  const [list, setList] = useState([...fakeList]);

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

  const HandleSearch = (text) => {
    const updatedList = list.filter(item => item.name.includes(text));
    setList([...updatedList]);
  };


  return (
      <div>
        <SearchBar onSearch={HandleSearch} />   
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
