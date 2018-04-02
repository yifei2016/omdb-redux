import React, { Component } from 'react';

class Spinner extends Component {
  constructor(props) { 
    super(props);
  }
  render() {
    return (<div style={{ width: '34px' }}>
      <i className="fa fa-spinner fa-spin"
        style={{ fontSize: '34px' }}></i>
    </div>)
  }
}

export default Spinner;
