import React, {Component} from 'react';
import ShowEpisode from 'components/ShowEpisode';

class Episodes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: [],
      error: this.props.error
    }
    this.updateEpisode = this.updateEpisode.bind(this);
  }
  updateEpisode(episodes) {
    this.setState({
      episodes: episodes
    });
  }
  render() {
    let sum = 0;
    let averageRating = null;
    let episodes = null;
    if (this.state.episodes.length !== 0) { 
      sum = this.state.episodes.map(episode => {
        return +episode.imdbRating
      }).reduce((x, y) => x + y, 0);
      if (this.state.episodes.length !== 0) { 
        averageRating = <p><i className="fa fa-star fa-lg rating_star" aria-hidden="true"></i>
          {(sum / this.state.episodes.length).toFixed(2)}</p>  
      }

      episodes = this.state.episodes.map((episode, index) => { 
        i = i+1;
        return <ShowEpisode order={i} key={index} data={episode} />
      })
    }
    let i = 0;
    
    return (
      <div className="episodes">
        <div>
          <div style={{ width: '34px' }}>
            <i className="fa fa-spinner fa-spin" style={{ display: this.props.spinner, fontSize: '34px' }}></i>
          </div>
          <div>
            {this.state.error}
          </div>
          <h3>{this.props.searchedShow}</h3>
          <span>{averageRating}</span>
        </div>
        {episodes}
      </div>
    )
  }
}


export default Episodes;