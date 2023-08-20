import React from 'react'

function QuoteItem(props) {
  return (
    <div className="card text-center my-4 border-warning">
    <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>{props.content}</p>
      <footer className="blockquote-footer"><cite title="Source Title">{props.author}</cite></footer>
    </blockquote>
    </div>
    <div className="card-footer text-muted">
      <p>tags: {props.tags.map((item,index)=>{return index===props.tags.length-1 ? item : item+","})} <span className="text-warning">|</span><span>time : {props.dateAdded}</span></p>
    </div>
  </div>
  )
}

export default QuoteItem