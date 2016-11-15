import React from 'react';
import Stream from './Stream.jsx'

class AddSubreddits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subscribed: { '/r/homepage': '/r/homepage'},
    }
  }

  add(url){
    var current = this.state.subscribed;
    current[url] = url;
    this.setState({
      subscribed: current,
    })
  }

  render() {
    return (
      <div className="mainComponent">
        <div className="col-xs-12 col-md-8" id="stream">
          <Stream subscribed={this.state.subscribed}/>
        </div>
        <div className="col-xs-12 col-md-4" id="subs">
          <p> Please click any subreddit to add to stream </p>
          {this.props.list.map((item, key) =>
            <li onClick={this.add.bind(this, item.data.url)} key={key}>{item.data.url}</li>)}
        </div>
      </div>
    );
  }
}

export default AddSubreddits;
