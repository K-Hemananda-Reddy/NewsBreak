import React from 'react'

export default function NewsItem(props) {
  return (
    <div className='my-3'>
      <div className="card" >
        <img src={props.imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.title}...    &nbsp;&nbsp;<span class="badge rounded-pill text-bg-danger mx-1"><small>{props.source}</small></span></h5>
          
          <p className="card-text">{props.description}...</p>
          <p className='card-text'><small className='text-muted'>By {props.author} on {new Date(props.date).toLocaleDateString()} {new Date(props.date).toLocaleTimeString()}</small></p>
          <a href={props.newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )
}
