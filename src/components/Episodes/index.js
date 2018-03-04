import React, {Component} from 'react';
import ShowEpisode from 'components/ShowEpisode';

class Episodes extends Component {
  render() {
    return (
      <div>
        {this.props.episodes.map(episode => { 
          return <ShowEpisode data={episode}/>
        })}
      </div >
    )
  }
}


export default Episodes;