import React, { Component } from 'react';
import { searchShow, getEpisode } from 'searchShow/api';

class SearchShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      episodes: [],
      searchedShow: ''
    }
    this.search = this.search.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  componentDidMount() { 
    let epis;
    searchShow('Silicon Valley')
      .then(result => { 
        if (result === undefined)
          throw new Error('wrong')
       epis = result.Episodes.map(e => {
          let promise = getEpisode(e.imdbID)
            .then(episode => {
              if (episode === undefined)
                throw new Error(`Error`)
              return episode.data
            });
          return promise;
        });
        return Promise.all(epis);
      })
      .then(dataArray => { 
        this.props.updateEpisode(dataArray);
      })
  }
  handleInput(ev) {
    this.setState({
      value: ev.target.value
    });
  }
  search() {
    this.props.showSpinner()
      .then(() => { 
       return searchShow(this.state.value)
      })
      .then((result) => { 
        let epis;
        if (result === undefined)
          throw new Error('wrong')
        this.props.searchedShow(result.Title);
        epis = result.Episodes.map(e => {
          let promise = getEpisode(e.imdbID)
            .then(episode => {
              if (episode === undefined)
                throw new Error(`Error`)
              return episode.data
            });
          return promise;
        });
      return Promise.all(epis);
      })
    
      .then(dataArray => { 
        this.props.updateEpisode(dataArray);
        this.props.hideSpinner();
      })
      .catch(error => {
        this.props.showError(error.message);
      })
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
