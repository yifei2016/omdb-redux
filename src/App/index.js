import React, { Component } from 'react';
import { SearchShow, Episodes } from 'containers';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="divider"></div>
        <div className="content">  
          <SearchShow />
          <Episodes />
        </div>
      </div>
    );
  }
}

export default App;
