import React, { Component } from "react";

class TodoInput extends Component {
  render() {
    let button;
    const { item, handleChange, handleSubmit, editItem } = this.props;
    if (editItem) {
      button = (
        <button type="submit" className="btn btn-block btn-success mt-3">
          Edit Item
        </button>
      );
    } else {
      button = (
        <button type="submit" className="btn btn-block btn-primary mt-3">
          Add Item
        </button>
      );
    }
    return (
      <div className="card card-body my-3 ">
        <form onSubmit={handleSubmit}>
          <div className=" input-group ">
            <div className="input-group-prepend  ">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <div>
              <input
                type="text"
                className="form-control text-capitalize "
                placeholder="Add a Todo Item "
                value={item}
                onChange={handleChange}
              />
            </div>
          </div>

          {button}
        </form>
      </div>
    );
  }
}

export default TodoInput;
