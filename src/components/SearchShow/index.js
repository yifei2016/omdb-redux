import React, { Component } from 'react';
import { searchShow, getEpisode } from 'searchShow/api';

class SearchShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
      value: ''
    }
    this.search = this.search.bind(this);
    this.handleInput = this.handleInput.bind(this);

  }
  componentDidMount() { 
    searchShow('Silicon Valley')
      .then(result => { 
        if (result === undefined)
          throw new Error('wrong')
        result.Episodes.forEach(e => { 
          getEpisode(e.imdbID)
            .then(episode => { 
              if (episode === undefined)
                throw new Error(`Error`)
              this.props.addEpisode(episode.data)
            })
        })
      })
  }
  handleInput(ev) {
    this.setState({
      value: ev.target.value
    });
  }
  search() {
    this.setState({ loading: false, display: 'block' })
    this.props.emptyEpisode();
    searchShow(this.state.value)
      .then(result => {
        if (result === undefined)
          throw new Error(`No result found`)
        this.props.searchedShow(result.Title);
        this.setState({ display: 'none' })
        result.Episodes.forEach(e => {
          getEpisode(e.imdbID)
            .then(episode => {
              if (episode === undefined)
                throw new Error(`Error`)
              this.props.addEpisode(episode.data);
            })
        })
        // return searchEpisode(result[0].imdbID) 
      })
      .catch(error => {
        this.setState({ error: error.message, display: 'none' })
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
              <button className="btn btn-outline-secondary searchButton" type="button" onClick={this.search}><i className="fa fa-search" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
      </div>    
    )
  }
}

export default SearchShow;
