import React, { Component } from 'react'
import Loading from './Loading.gif'

export default class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
          <img src={Loading} alt="there is an loader" />
      </div>
    )
  }
}
