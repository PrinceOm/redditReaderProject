import React from 'react';

class StreamEntries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
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

  render() {
    return (
      <div className="mainComponent">
        {this.state.posts.map((item, key) =>
          <div id='posts' key={key}>
            <p> User: {item.data.author} </p>
            <p> {item.data.selftext} </p>
            <p> Subreddit: {item.data.subreddit} </p>
            <p> Score: {item.data.score}</p>
          </div>
        )}
      </div>
    );
  }
}

export default StreamEntries;
