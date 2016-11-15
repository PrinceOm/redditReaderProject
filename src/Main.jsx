import React from 'react';
import AddSubreddits from './components/AddSubreddits.jsx';
import Stream from './components/Stream.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    }
  }
  componentWillMount(){
    fetch('https://reddit.com/subreddits/popular.json', {
      method: 'get'
    }).then(response => response.json())
    .then(response => this.setState({list: response.data.children}))
    .catch(function(err) {
      console.log(err);
    });
  }

  render() {

    return (
      <div>
        <div className="col-xs-12">
            <AddSubreddits list={this.state.list}/>
        </div>
      </div>
    );
  }
}

export default Main;
