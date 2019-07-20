import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
    name: 'listen to music',
    status: 'done',
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
  },[]);
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
    //axios.post('http://5d2faa1928465b00146aa7be.mockapi.io/api/tasks/', { name, status })
    //.then(response => console.log(response))
    list.push({ name, status, id: 15 });
    setList([...list]);
  };

  const handleDelete = (id) => {
    //axios.delete(`http://5d2faa1928465b00146aa7be.mockapi.io/api/tasks/${id}`)
    //.then(console.log("deleted"))
    const updatedList = list.filter(item => item.id !== id);
    console.log(updatedList);
    setList([...updatedList]);
  };

  /*
  const handleToggle = (item) => {
    console.log(item);
    //console.log("id do item",item.id);
    if (item.status === 'done') {
      axios.patch(`http://5d2faa1928465b00146aa7be.mockapi.io/api/tasks/${item.id}`,   
      JSON.stringify(
        { id: item.id, createdAt: item.createdAt, name: item.name, status: "todo" })
      );
    } else if (item.status === 'todo') {
      //console.log("id do item",item.id); 
      axios.patch(`http://5d2faa1928465b00146aa7be.mockapi.io/api/tasks/${item.id}`,  
      JSON.stringify({ id: item.id, createdAt: item.createdAt, name: item.name, status: "done" }))
    };  
    //console.log(`status done ${item.id}`) :console.log('nada')
  };
  */
  const handleToggle = (id) => {
    const updatedList = list.map((item) => {      
      //console.log('a', item);
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
