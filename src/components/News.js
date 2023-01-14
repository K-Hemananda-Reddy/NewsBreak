import React, { useEffect } from 'react'
import NewsItem from './NewsItem'
import { useState } from 'react'

export default function News() {
  const [articles,setArticles]=useState([]);
  const [page,setPage]=useState(1);

  const fetchData=async()=>{
    let url="https://newsapi.org/v2/everything?q=football&apiKey=4e6edafdf0f34830af7a2e61db34f667&page=1&pageSize=18"
    let data= await fetch(url);

    let pd=data.json();
    
   pd.then((result)=>{
    setArticles(result.articles);
   })
  };

  useEffect(()=>{
    fetchData();
  },[]);

  const handlePrevClick=async()=>{
    let url=`https://newsapi.org/v2/everything?q=football&apiKey=4e6edafdf0f34830af7a2e61db34f667&page=${page-1}&pageSize=18`
    let data= await fetch(url);

    let pd=data.json();
    setPage(page-1);
   pd.then((result)=>{
    setArticles(result.articles);
   })
  }
  const handleNextClick=async()=>{
    let url=`https://newsapi.org/v2/everything?q=football&apiKey=4e6edafdf0f34830af7a2e61db34f667&page=${page+1}&pageSize=18`
    let data= await fetch(url);

    let pd=data.json();
    setPage(page+1);
   pd.then((result)=>{
    setArticles(result.articles);
   })
  }



  return (
    <div className='container my-3'>
      <h1>NewsBreak - Top Headlines</h1>
        <div className="row">

          {articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:"https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/11787/production/_124395517_bbcbreakingnewsgraphic.jpg"} newsUrl={element.url}/>
          </div>
          })}
          
         
        </div>

        <div className="container d-flex justify-content-between">
          <button disabled={page<=1} className='btn btn-dark' onClick={handlePrevClick}>&larr; Previous</button>
          <button className='btn btn-dark' onClick={handleNextClick}>Next &rarr;</button>
        </div>
    </div>
  )
}
