import React from "react";
import todosData from "./todosData";
import ToDoItem from "./Components/ToDoItem";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 1500);
  }

  handleChange = id => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  };

  render() {
    const todoItems = this.state.todos.map(item => (
      <ToDoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));
    return (
      <div>
        <div className="todo-list">{todoItems}</div>
      </div>
    );
  }
}

export default App;
