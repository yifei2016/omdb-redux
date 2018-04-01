import React, {Component} from 'react';
import ShowEpisode from 'components/ShowEpisode';

class Episodes extends Component {
  render() {
    let sum = 0;
    let averageRating = null;
    if (this.props.episodes !== undefined) { 
      sum = this.props.episodes.map(episode => {
        return +episode.imdbRating
      }).reduce((x, y) => x + y, 0);
      if (this.props.episodes.length !== 0) { 
        averageRating = <p><i className="fa fa-star fa-lg rating_star" aria-hidden="true"></i> {(sum / this.props.episodes.length).toFixed(2)}</p>  
      }
    }

    let i = 0;
    return (
      <div className="episodes">
        <div>
          <div style={{ width: '34px' }}>
            <i className="fa fa-spinner fa-spin" style={{display: this.props.spinner, fontSize: '34px'}}></i>
          </div>
          <div>
            {this.props.error}
          </div>
          <h3>{this.props.searchedParam}</h3>
          <span>{averageRating}</span>
        </div>  
        
        {this.props.episodes.map((episode, index) => { 
          i = i+1;
          return <ShowEpisode order={i} key={index} data={episode} />
        })}
      </div>
    )
  }
}


export default Episodes;