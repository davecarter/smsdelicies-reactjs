import React, { Component } from 'react';
import Topbar from './components/topbar/index'
import Header from './components/header/index'
import { database } from './firebase'
import { cat } from './components/literals/cat'
import { es } from './components/literals/es'
import './app.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      culture: es
    }
    this.updateCulture = this.updateCulture.bind(this)
  }

  componentDidMount() {
    database.ref().on('value', (snapshot) => {
      this.setState({data: snapshot.val()})
    })
  }

  updateCulture (culture) {
    if(culture === 'es'){
      this.setState({ culture: es })
      database.ref()
        .child('literals/es')
        .set(this.state.culture)
    }

    if(culture === 'cat'){
      this.setState({ culture: cat })
      database.ref()
        .child('literals/cat')
        .set(this.state.culture)
    }
  }
  
  render() {
    const { SITE_TITLE, HOME_TITLE, HOME_SUBTITLE } = this.state.culture
    return (
      <div className="App">
        <Topbar sitetitle={SITE_TITLE} onCulture={this.updateCulture}/>
        <Header hometitle={HOME_TITLE} subtitle={HOME_SUBTITLE} />
      </div>
    );
  }
}

export default App;
