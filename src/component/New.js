import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'



export default class New extends Component {
  static defaultProps = {
    country: 'in',
    category:'business',
    pageSize: 10,
    heading : "News Monkey Top Headlines"
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize:PropTypes.number,
    heading : PropTypes.string
  }
  render() {
    return (
      <div className='container'>
        <h1 className='text-center my-5'>{this.props.heading} </h1>
          <NewsItem country = {this.props.country} category={this.props.category}/>
      </div>
    )
  }
}
