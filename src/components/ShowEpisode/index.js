import React, {Component} from 'react';

class ShowEpisode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'block'
    }
    this.hideInfo = this.hideInfo.bind(this);
  }
  hideInfo() { 
    this.setState({ 
      display: 'none'
    })
  }
  render() {
    let episode = this.props.data;
    
    let episodeDisplay = <div>
        <p>Episode: {episode.Episode}</p>
        <p>Title: {episode.Title}</p>
          <p>Plot: {episode.Plot}</p>
          <p>Poster: <img src={episode.Poster} /></p>
          <p>Released: {episode.Released.split('-')[1]}</p>
          <button className="btn btn-success" onClick={this.hideInfo}>hide info</button>
        </div>
  
    return (
      <div style={{display: this.state.display}}>
        {episodeDisplay}
      </div >
    )
  }
}


export default ShowEpisode;