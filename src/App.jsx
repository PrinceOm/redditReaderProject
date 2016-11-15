import React from 'react';
import Main from './Main.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-xs-12">
        <header id="header">
          <p>RedditReader</p>
        </header>
        <div id="main">
          < Main/>
        </div>
        <footer id="footer">
          <p>© 2016 RedditReader, Inc.</p>
        </footer>
      </div>
    );
  }
}

export default App;
