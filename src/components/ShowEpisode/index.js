import React, {Component} from 'react';

class ShowEpisode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'block',
      order: this.props.order
    }
    this.hideInfo = this.hideInfo.bind(this);
  }
  componentDidMount() {
    if (this.state.order % 2 === 0) {
      this.setState({
        background: '#fbfbfb',
      })
    } else { 
      this.setState({
        background: '#f6f6f5'
      })
    }
  }
  hideInfo() { 
    this.setState({ 
      display: 'none'
    })
  }
  render() {
    let episode = this.props.data;
    
    let rating = null;   
    if (episode.imdbRating > 6.5 || episode.imdbRating === 6.5) rating = <span >{episode.imdbRating}</span>
    rating = <span>{episode.imdbRating}</span>
    
    let episodeDisplay = <div className="d-flex episodeDisplay" >
      <div><img alt="broken" width="65px" height="90px" src={episode.Poster} /></div>
      <div className="episodeDescription">
        <h5 className="title">{episode.Title}</h5>
        <p className="episodeText">Episode: {episode.Episode}</p>
        <div style={{ border: '1px dotted #136cb2' }}><i className="fa fa-star rating_star"></i>
          <strong className="rating">{rating}</strong>
          <span className="releaseTime">Released: {episode.Released.split(' ')[1]}</span>
        </div>
        <p className="plot">{episode.Plot}</p>
        <button className="btn btn-success btn-sm hideButton" onClick={this.hideInfo}>hide info</button>
      </div>
    </div>

    return (
      <div style={{display: this.state.display, background: this.state.background}}>
        {episodeDisplay}
      </div >
    )
  }
}


export default ShowEpisode;