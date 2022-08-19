import React, { Component } from 'react'
import New from './New'

export default class Home extends Component {

  render() {
    return (
      <div>
        <New country="us" category="entertainment" heading = "News Monkey Top Headlines" />
      </div>
    )
  }
}
