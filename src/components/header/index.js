import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Header extends Component {
  static propTypes () {
    return {
      hometitle: PropTypes.string,
      subtitle: PropTypes.string
    }
  }

  render() {
    return (
      <section className='sms-Header'>
        <div className='sms-Header--title'>
          <h1>{this.props.hometitle}</h1>
          <p>{this.props.subtitle}</p>
        </div>
      </section>
    )
  }
}