import React from 'react'

export default function NewsItem(props) {
  return (
    <div className='my-3'>
      <div className="card" style={{width:'18rem'}}>
        <img src={props.imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}...</p>
          <a href={props.newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )
}
