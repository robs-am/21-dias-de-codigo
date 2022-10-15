 import api from "./api"; 
 import React, { Component } from "react"; 

 class App extends Component {

  state= {
    artist: []
    
  }

  async componentDidMount() {
    const response = await api.get('');
    console.log(response.data);

    this.setState({artist: response.data});
  }

  render() {
    const  {artist} = this.state;

    return (
      <div>
        <h1>Lista</h1>
        {console.log(artist)}
      </div>
    );
  }
}

export default App; 
