import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imageurl,newsurl,date,source}=this.props
        return (
            <div className="my-3">
                <div className="card" style={{width:"18rem"}}>
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left:'90%', zIndex:'1'}}> {source}
                </span>
  <img src={!imageurl?"https://images.news18.com/ibnlive/uploads/2021/11/chile-desert-163612757116x9.png":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">On {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
  </div>
            </div>
        )
    }
}

export default NewsItem
