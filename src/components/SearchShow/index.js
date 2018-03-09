import React, { Component } from 'react';
import { searchShow, getEpisode } from 'searchShow/api';

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
        reject(new Error('fail'))
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
    this.props.emptyEpisode();
    this.props.displaySpinner();
    searchShow(this.state.value)
      .then(result => { 
        if (result === undefined)
          throw new Error(`No result found`)
        this.props.searchedShow(result.Title);
        
        let episodes = result.Episodes.map(e => {
          let promise = getEpisode(e.imdbID)
            .then(episode => {
              if (episode === undefined) throw new Error(`Error`);
              // return Promise.resolve(episode.data);
              return episode.data;
            });
          return promise;
        });
        // episodes is array of promises, Promise.all(iterable) method returns a single Promise
        return Promise.all(episodes)
      })
      .then(dataArray => { 
        this.props.setEpisodes(dataArray);
        this.props.hideSpinner();
      })
      .catch(error => {
        this.props.showError(error.message)
      })
    //   .finally(() => {
    //     this.setState({ display: 'none' })
    //  })
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
