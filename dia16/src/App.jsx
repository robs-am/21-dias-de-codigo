import api from "./api";
import React, { Component } from "react";

class App extends Component {

  state= {
    obras: [],
    
  }

  async componentDidMount() {
    const response = await api.get('');
    console.log(response.data);

    this.setState({obras: response.data});
  }

  render() {
    return (
      <div>
        <h1>Lista</h1>
      </div>
    );
  }
}

export default App;
