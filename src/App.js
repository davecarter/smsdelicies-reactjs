import React, { Component } from 'react';
import Topbar from './components/topbar'
import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar title='SMSDelicies' />
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
