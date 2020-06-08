import React, { Component } from "react";
import "../css/App.css";
import { Container, Row, Col } from "reactstrap";
import InputBar from "./InputBar";
import TabBar from "./TabBar";
import TodoList from "./TodoList";

class App extends Component {
  state = {
    todos: [],
  };

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];

    this.setState({
      todos: todos,
    });
  };

  deleteTodo = (id) => {
    let todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({
      todos: todos,
    });
  };

  changeStatus = (id) => {
    let todos = this.state.todos.map((todo) => {
      const todoId = todo.id;
      const todoMessage = todo.message;

      if (todoId === id) {
        const todoStatus =
          todo.status === "Incompleted" ? "Completed" : "Incompleted";
        return {
          id: todoId,
          message: todoMessage,
          status: todoStatus,
        };
      }

      return {
        id: todoId,
        message: todoMessage,
        status: todo.status,
      };
    });

    this.setState({
      todos: todos,
    });
  };

  show = (status) => {
    this.setState({
      active: status,
    });
  };

  filteredList = () => {
    const filter = (status) => {
      return this.state.todos.filter((todo) => {
        return todo.status === status;
      });
    };

    const active = this.state.active;

    return active === "Completed" || active === "Incompleted"
      ? filter(active)
      : this.state.todos;
  };

  render() {
    return (
      <Container className="themed-container" fluid="md">
        <Row>
          <Col sm="12" md={{ size: 6, offset: 4 }}>
            <h1>TODO LIST</h1>
          </Col>
        </Row>
        <InputBar addTodo={this.addTodo} />
        <TabBar show={this.show} />
        <TodoList
          changeStatus={this.changeStatus}
          deleteTodo={this.deleteTodo}
          todos={this.filteredList()}
        />
      </Container>
    );
  }
}

export default App;
