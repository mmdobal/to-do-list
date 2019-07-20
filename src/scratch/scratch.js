import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      name: '',
      status: 'todo',
    };
    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('http://5d2faa1928465b00146aa7be.mockapi.io/api/tasks')
      .then((response) => {
        const todos = response.data;
        this.setState({ todos });
      })
      .catch(err => console.log(err));
  }

  updateState(e) {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value }, () => {
      console.log(this.state);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post('http://5d2faa1928465b00146aa7be.mockapi.io/api/tasks', { name: this.state.name, status: 'todo' })
      .then((response) => {
        console.log(response);
      });
  }

  handleDelete(item) {
    axios.delete(`http://5d2faa1928465b00146aa7be.mockapi.io/api/tasks/${item.id}`)
      .then(console.log("deleted"));
  }

  handleUpdate(item) {
    axios.put(`http://5d2faa1928465b00146aa7be.mockapi.io/api/tasks/${item.id}`)
      .then();
  }


  render() {
    const todoList = this.state.todos.map((todo) => {
      if (todo.status === 'todo') {
        return (
          <div className="active-item" key={todo.id}>
            <h4>{todo.name}</h4>
            <button onClick={this.handleDelete(todo)}>DELETE</button>
            <button onClick={this.handleUpdate(todo)}>DONE</button>

          </div>
        );
      } return (
        <div className="done-item" key={todo.id}>
          <h4>{todo.name}</h4>
        </div>
      );
    });
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p className="control">
            <input className="input" onChange={e => this.updateState(e)} value={this.state.name} type="text" placeholder="Name" name="name" />
          </p>
          <button type="submit">Submit</button>
        </form>
        <div className="todos collection">
          {todoList}
        </div>
      </div>
    );
  }
}

export default Home;
