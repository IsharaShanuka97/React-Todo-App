import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <div className="container">
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">Todo List</h3>
          {items.map(item => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              ></TodoItem>
            );
          })}

          <button
            onClick={clearList}
            className="btn btn-danger btn-block text-capitalize mt-5"
          >
            Clear list
          </button>
        </ul>{" "}
      </div>
    );
  }
}

export default TodoList;
