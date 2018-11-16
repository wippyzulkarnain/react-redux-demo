import React, { Component } from "react";
import "./App.css";
import Form from "./Components/Form";
import List from "./Components/List";
import { Provider } from "react-redux";
import store from "./store"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <Form />
        <List />
      </div>
      </Provider>
    );
  }
}

export default App;
