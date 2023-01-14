import React, { useEffect } from 'react'
import NewsItem from './NewsItem'
import { useState } from 'react'
import Spinner from './Spinner';
import '../App.css';

export default function News(props) {
  const [articles,setArticles]=useState([]);
  const [page,setPage]=useState(1);
  const [loading,setLoading]=useState(false);

  const fetchData=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4e6edafdf0f34830af7a2e61db34f667&pageSize=18`
    setLoading(true);
    let data= await fetch(url);

    let pd=data.json();
    
   pd.then((result)=>{
    setArticles(result.articles);
   })
   setLoading(false);
  };

  useEffect(()=>{
    fetchData();
  },[]);

  const handlePrevClick=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4e6edafdf0f34830af7a2e61db34f667&page=${page-1}&pageSize=18`
    setLoading(true);
    let data= await fetch(url);

    let pd=data.json();
    setPage(page-1);
   pd.then((result)=>{
    setArticles(result.articles);
   })
   setLoading(false);
  }
  const handleNextClick=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4e6edafdf0f34830af7a2e61db34f667&page=${page+1}&pageSize=18`
    setLoading(true);
    let data= await fetch(url);

    let pd=data.json();
    
   pd.then((result)=>{
    setArticles(result.articles);
   })
   setLoading(false);
  }

  const handleSearch=async()=>{
    let value=document.getElementById('pls_search').value;
    let url =`https://newsapi.org/v2/everything?apiKey=4e6edafdf0f34830af7a2e61db34f667&q=${value}`
    setLoading(true);
    let data= await fetch(url);

    let pd=data.json();
    
   pd.then((result)=>{
    setArticles(result.articles);
   })
   setLoading(false);
  }



  return (
    <div className='container my-3'>
      <h1 className='text-center my-5'>NewsBreak - Top Headlines</h1>
      <div className="d-flex justify-content-between w-50 align-items-center m-auto">
      <input  id="pls_search" type="text" className='form-control w-75 my-2 border border-dark' />
      <button onClick={handleSearch}  className='btn btn-success'>Search</button>
      </div>
      
      {loading && <div className="text-center container">
      <Spinner/>
      </div>}
      
        <div className="row">

          {!loading && articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:"https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/11787/production/_124395517_bbcbreakingnewsgraphic.jpg"} newsUrl={element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt} source={element.source.name}/>
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

News.defaultProps={
  category:'general',
};
