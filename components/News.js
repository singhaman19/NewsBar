import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import ScrollToTop from "react-scroll-to-top";

export class News extends Component {
    static defaultProps={
        country: 'in',
        pageSize: 5,
        category:'general'
    }
    static propTypes={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    capitalizeFirstLetter = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title=`NewsBar-${this.capitalizeFirstLetter(this.props.category)}`
    }
    async updateNews(){
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=20e9dec6eb844659ab819e072bda47ea`;
        let url=`https://gnews.io/api/v4/search?q=${this.props.topic}&country=${this.props.country}&token=305ac9460d646d57fd9ee172bffd9df0`;
                this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles ,
            totalResults: parsedData.totalResults,
            loading: false })
    }
    async componentDidMount() {
        // console.log("before url")
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=20e9dec6eb844659ab819e072bda47ea`;
        //console.log("before fetch url")
        // this.setState({loading: true})
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log("pdata");
        // this.setState({ articles: parsedData.articles ,
        //     totalResults: parsedData.totalResults,
        //     loading: false })
        //console.log("aftersetState")
        this.updateNews();
    }
    handlePrevClick = async () => {
        // console.log("Previous")
        //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=20e9dec6eb844659ab819e072bda47ea&page=${this.state.page - 1}&pageSize=10`;
        //     this.setState({loading: true})
        //     let data=await fetch(url);
        //     let parsedData=await data.json()
        //     this.setState({
        //         page: this.state.page - 1,
        //         articles: parsedData.articles,
        //         loading: false
        //       })
        this.setState({page:this.state.page-1});
        this.updateNews();
    }
    handleNextClick = async () => {
    //     console.log("Next")
    //     if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/10))){

    //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=20e9dec6eb844659ab819e072bda47ea&page=${this.state.page + 1}&pageSize=10`;
    //     this.setState({loading: true})
    //     let data=await fetch(url);
    //     let parsedData=await data.json()
    //     this.setState({
    //       page: this.state.page + 1,
    //       articles: parsedData.articles,
    //       loading: false
    //     })
    
    // }
    this.setState({page:this.state.page+1});
    this.updateNews();
}
    render() {
        return (
            <div className="container my-3">
            <ScrollToTop smooth top="100" color="blue"/>
                <h1 className="text-center" style={{margin: '30px 0px', marginTop: '70px'}}>NewsBar - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className="row">

                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.image} newsurl={element.url} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button mx-2" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button mx-2" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/10)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
