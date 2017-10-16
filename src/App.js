import React, { Component } from 'react';
import Topbar from './components/topbar/index'
import { es } from './components/literals'
import './app.scss';

class App extends Component {
  render() {
    const { HOME_TITLE } = es
    return (
      <div className="App">
        <Topbar title='SMSDelicies' />
        <div className="App-header">
          <h2>{HOME_TITLE}</h2>
        </div>
      </div>
    );
  }
}

export default App;
