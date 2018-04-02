import React, {Component} from 'react';

const Error = (props) => (
  <div>
    <p>{props.error.message}</p>
  </div>
);

export default Error;