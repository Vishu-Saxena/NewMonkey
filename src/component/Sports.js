import React, { Component } from 'react'
import New from './New'

export default class Sports extends Component {
  render() {
    return (
      <div>
        <New country="in" category="sports" heading = "News Monkey Top Headlines Sports" />
      </div>
    )
  }
}
