import React, { Component } from 'react';
import SearchShow  from 'components/SearchShow';
import Episodes  from 'components/Episodes';
 
class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      searchedShow: '',
      display: 'none'
    }
    this.updateEpisode = this.updateEpisode.bind(this);
    this.searchedShow = this.searchedShow.bind(this);
    this.showError = this.showError.bind(this);
    this.showSpinner = this.showSpinner.bind(this);
    this.hideSpinner = this.hideSpinner.bind(this);
  }
  updateEpisode(episode) {
    this.refs.epi.updateEpisode(episode);
  }
  searchedShow(show) { 
    this.setState({
      searchedShow: show
    })
  }
  showError(error) { 
    this.setState({
      error: error
    })
  }
  showSpinner() { 
    let promise = new Promise((resolve, reject) => { 
      this.setState({
        display: 'block'
      }, () => { 
        resolve()
      })
    })
    return promise;
  }
  hideSpinner() { 
    debugger
    this.setState({
      display: 'none'
    })
  }
  render() {
    return (
      <div className="App">
        <div className="content">  
          <SearchShow updateEpisode={this.updateEpisode} searchedShow={this.searchedShow} 
            showError={this.showError}
            showSpinner={this.showSpinner} hideSpinner={this.hideSpinner}
           />
          <Episodes ref='epi' searchedShow={this.state.searchedShow} error={this.state.error} spinner={this.state.display}/>
        </div>
      </div>
    );
  }
}

export default App;
