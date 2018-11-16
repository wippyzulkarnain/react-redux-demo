import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../Actions/todoAction";
class List extends Component {
  componentDidMount() {
      this.props.fetchData()
  }
  render() {
    return (
      <div>
        <hr />
        <h1>Todo List</h1>
        {this.props.todo_list.map((todo,index)=>
            <div key ={index}> {todo.description} -- {JSON.stringify(todo.done)} </div>)}
        <hr />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  todo_list: state.todo.todo_list
});

export default connect(
  mapStateToProps,
  {fetchData}
)(List);
// export default List;
