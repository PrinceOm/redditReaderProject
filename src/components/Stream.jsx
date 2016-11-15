import React from 'react';
import StreamEntries from './StreamEntries.jsx'

class Stream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [{data: 'data'}],
      subscribed: this.props.subscribed
    }
  }

  componentWillReceiveProps(){
    for(var key in this.state.subscribed){
      fetch(`https://reddit.com${key}.json`, {
        method: 'get'
      }).then(response => response.json())
      .then(response => {
        this.setState( {posts: response.data.children})
      })
      .catch(function(err) {
        console.log(err);
      });
    }
  }

  componentWillMount(){
    for(var key in this.state.subscribed){
      fetch(`https://reddit.com${key}.json`, {
        method: 'get'
      }).then(response => response.json())
      .then(response => {
        this.setState( {posts: response.data.children})
      })
      .catch(function(err) {
        console.log(err);
      });
    }
  }

  render() {
    return (
      <div className="mainComponent">
        {this.state.posts.map((post, key) =>
          <StreamEntries item={post.data} key={key} subscribed={this.state.subscribed}/>
        )}
      </div>
    );
  }
}

export default Stream;
