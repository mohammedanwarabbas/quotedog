import React, { useState } from 'react'
import Spinner from './Spinner'

function RandomQuote() {

  //sate variable and state setting method for loader/spinner
  const [loading,setLoading] = useState(false)
  const [quoteObj,setQuoteObj] = useState({})

  //function to fetch one random quote
  const handleFetchQuotes = async (event)=>{
    setLoading(true)
    let url = `https://api.quotable.io/random`
    const apiResult = await fetch(url)
    const parsedData = await apiResult.json()
    setQuoteObj(parsedData)
    setLoading(false)
}

  return (
    <>
    {/* if loading is true show the spinner/loader */}
    {loading && <Spinner/>}

    <div className='m-4 text-center'>
      <h1>Get a random quote on each click</h1>
      <button onClick={handleFetchQuotes} className='btn btn-warning rounded-pill m-4'>generate quote for me</button>

      <div className="card text-center my-4 border-warning">
    <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>{quoteObj.content}</p>
      <footer className="blockquote-footer"><cite title="Source Title">{quoteObj.author}</cite></footer>
    </blockquote>
    </div>
    <div className="card-footer text-muted">
      <p>tags: {quoteObj.tags && quoteObj.tags.map((item,index)=>{return index===quoteObj.tags.length-1 ? item : item+","})} <span className="text-warning">|</span><span>time : {quoteObj.dateAdded}</span></p>
    </div>
  </div>
    </div>
    </>
  )
}

export default RandomQuote
