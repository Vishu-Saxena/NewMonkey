
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

export default class NewsItem extends Component {
  static defaultProps = {
    country: 'in',
    category:'business',
    pageSize: 10
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize:PropTypes.number,
  }
        constructor(){
            super()
            this.state = {
                articles : [],
                page : 1,
                articleNo :0,
                loading : true,
                pageSize : 6,
                totalResult : 0
            }
            console.log("constructor");
        }

       async componentDidMount(){
         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.state.pageSize}&page=${this.state.page}&apiKey=39bee7f24dbb4465a88a66f1bd77d4c6`;
         let data = await fetch(url);
         let parsdata = await data.json();
         this.setState({articles:parsdata.articles , articleNo:this.state.articleNo + this.state.pageSize , totalResult : parsdata.totalResults , loading : false , page : this.state.page + 1});
         console.log("cmd");
        }

        fetchMoreData = async ()=>{
          this.setState({page: this.state.page + 1});
          console.log(this.state.page);
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&apiKey=39bee7f24dbb4465a88a66f1bd77d4c6`;
         let data = await fetch(url);
         let parsdata = await data.json();
         let art = parsdata.articles;
         console.log(art);
         this.setState({
          articles: this.state.articles.concat(parsdata.articles),
          articleno :this.state.articleNo + this.state.pageSize
        });
        console.log(parsdata.articles);
        }


  render() {
    console.log("render");
    return (
      <div className='container my-3'>
         {/* {this.state.loading && <Spinner/>} */}
         <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== 32} //i have passed hardcode value because the totalresult was 38 but the browser was only loading 26 results 
          loader={<Spinner/>}
        >
        <div className="container">
          <div className='row my-3'>
              {this.state.articles.map((element)=>{
                  return(
                      <div className="col-md-4 mb-4"  key={element.url?element.url:""}>
                        <div className="card">
                        <span className="position-absolute top-0 start-100 badge rounded-pill bg-danger" style={{transform:"translate(-95%,-50%)"}}>
                                  {element.source.name}
                        </span>
                          <img style={{height:"15rem"}} src={element.urlToImage?element.urlToImage:"https://images.moneycontrol.com/static-mcnews/2021/08/Account-aggregators-featured.jpg"} className="card-img-top" alt="..."/>
                          <div className="card-body">
                              <h5 className="card-title" style={{height:"100px",fontSize:"17px", marginBottom:"10px",overflowY :"hidden"}}>{element.title?element.title:"Trending news"}</h5>
                              <p className="card-text" style={{height:"70px" , overflowY :"hidden"}}>{element.description?element.description:"Click on read more to know more about it."}</p>
                              <a href={element.url} className="btn btn-dark"> Read More </a>
                            </div>
                        </div>
                      </div>)
              })}
          </div>
          </div>
        </InfiniteScroll>
      </div>
    )
  }
}
