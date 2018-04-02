import React, {Component} from 'react';
import ShowEpisode from 'components/ShowEpisode';
import Spinner from 'components/Spinner';
import Error from 'components/Error';


class Episodes extends Component {
  render() {
    let sum = 0;
    let averageRating = null;
    if (this.props.episodes !== undefined) { 
      sum = this.props.episodes.data.map(episode => {
        return +episode.imdbRating
      }).reduce((x, y) => x + y, 0);
      if (this.props.episodes.data.length !== 0) { 
        averageRating = <p>
          <i className="fa fa-star fa-lg rating_star" aria-hidden="true"></i>
          {(sum / this.props.episodes.data.length).toFixed(2)}</p>  
      }
    }

    let i = 0;
    return (
      <div className="episodes">
        <div>
          {this.props.episodes.loading ? <Spinner /> : null}
          {this.props.episodes.error ? <Error error={this.props.episodes.error}/> : null }
          <h3>{this.props.searchedParam}</h3>
          <span>{averageRating}</span>
        </div>  
        
        {this.props.episodes.data.map((episode, index) => { 
          i = i+1;
          return <ShowEpisode order={i} key={index} data={episode} />
        })}
      </div>
    )
  }
}


export default Episodes;