import React, { Component } from 'react';


class SearchShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.search = this.search.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  componentDidMount() {
    // let promise1 = Promise.resolve();
    // setState callback async
    let promise = new Promise((resolve, reject) => {
      this.setState({
        value: 'Silicon Valley'
      }, () => {
        resolve('Success!')
      })
    });
    promise.then((str) => { 
        this.search();
      })
      .catch(error => {
        this.props.showError(error.message)
      })
  }
  handleInput(ev) {
    this.setState({
      value: ev.target.value
    });
  }
  search() {
    this.setState({ loading: false })
   
    // this.props.searchEpisodes(this.state.value);
    this.props.searchEpisodesThunk(this.state.value);
  }
  render() {
    return (
      <div className="d-flex header">
        <div className="d-flex justify-content-center flex-column">
          <img src="../imdb.jpg" alt="broken" width="120px" height="40px"/>
        </div>  
        <div className="input-group mb-3 d-flex flex-column searchField">
          <div className="d-flex">
            <input type="text" className="form-control" placeholder="Silicon Valley"
              aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.handleInput} />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary searchButton" type="button" onClick={this.search}>
                <i className="fa fa-search" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
      </div>    
    )
  }
}

export default SearchShow;
