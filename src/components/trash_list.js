import React, { Component } from 'react';
import axios from 'axios';

class List extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    axios.get('https://ironbeer-api.herokuapp.com/beers/all')
      .then((response) => {
        this.setState({ todos: response.data });
      });
  }

  let todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
        </div>
      )
    })
  ) : (
    <p className="center">You have no todo's left, yay!</p>
  );

}

export default List;
