import React, { Component } from 'react';
import { SearchShow, Episodes } from 'containers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchShow />  
        <Episodes />
      </div>
    );
  }
}

export default App;
