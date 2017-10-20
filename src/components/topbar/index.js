import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Topbar extends Component {
  constructor(props) {
    super(props)
    this.handleLanguage = this.handleLanguage.bind(this)
  }

  handleLanguage (culture) {
    return this.props.onCulture(culture)
  }

  static propTypes () {
    return {
      sitetitle: PropTypes.string,
      onCulture: PropTypes.func
    }
  }

  render () {
    return (
      <section className='sms-Topbar'>
        <ul className='sms-Topbar-langSelector'>
          <li className='sms-Topbar-langSelector-item'><button onClick={() => {this.handleLanguage('es')}}> es </button></li>
          <li className='sms-Topbar-langSelector-item'><button onClick={() => {this.handleLanguage('cat')}}> cat </button></li>
        </ul>
        <h2>{this.props.sitetitle}</h2>
      </section>
    )
  }
}
