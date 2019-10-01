import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      id: uuid(),
      item: "",
      editItem: false
    };
  }

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    });
  };

  clearList = () => {
    this.setState({
      items: []
    });
  };

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id != id);
    this.setState({
      items: filteredItems
    });
  };

  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id != id);
    const selectedItem = this.state.items.find(item => item.id == id);

    this.setState({
      items: filteredItems,
      editItem: true,
      item: selectedItem.title,
      id : id
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className=" col-10 mx-auto colmd-8 mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            ></TodoInput>
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            ></TodoList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
