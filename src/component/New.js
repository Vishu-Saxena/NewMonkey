import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class New extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='text-center my-5'>News Monkey Top Headlines </h1>
          <NewsItem/>
      </div>
    )
  }
}
