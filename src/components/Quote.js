import React, { useState, useEffect, useRef } from 'react'
import QuoteItem from './QuoteItem'
import Spinner from './Spinner'

function Quote() {
    const [quotes, setQuotes] = useState([])
    const [count, setCount] = useState(0)
    const [totalCount, setTotalCount] = useState(0)
    const [page, setPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [tags, setTags] = useState("")
    const [loading, setLoading] = useState(true)
    const inputRef = useRef();
    //if generate button pressed
    const handleFetchQuotes = async (event) => {
        setLoading(true)
        let url = page === 0 ? `https://api.quotable.io/quotes?page=1` : `https://api.quotable.io/quotes?page=${page}`
        if (tags !== "") { url += `&tags=${tags}` }
        const apiResult = await fetch(url)
        const parsedData = await apiResult.json()
        setCount(parsedData.count)
        setTotalCount(parsedData.totalCount)
        setPage(parsedData.page)
        setTotalPages(parsedData.totalPages)
        setQuotes(parsedData.results)
        setLoading(false)
    }
    //if anyone want's go previous page
    const handlePreviousClick = () => {
        setPage(page - 1)
    }
    //if anyone want's to next page
    const handleNextClick = () => {
        setPage(page + 1)
    }
    //as the tag changes handleFetchQuotes wiil be invoked because of useEffect.set page to 1 for new tag based result
    const handlerOnChange = (event) => {
        setPage(1)
        setTags(event.target.value)
    }

    useEffect(() => { handleFetchQuotes(); }, [page, tags])

    return (
        <>
            {loading && <Spinner />}
            <div className='text-center' id="top">
                <form className="m-4">
                    <label htmlFor="quotetagsid" className="form-label">Enter the tags (Ex: Education)</label>
                    <input ref={inputRef} onChange={handlerOnChange} type="text" className="form-control mx-auto my-2 w-50" id="quotetagsid" placeholder="" />

                </form>

                <p>Total quotes generated : {totalCount}</p>
                {/*show top paginators only there is ateleast one result*/}
                {count === 0 ? '' : <div className='d-flex justify-content-between'><button disabled={page === 1 ? true : false} onClick={handlePreviousClick} className="btn btn-warning text-dark">&larr; Previous</button>
                    <button disabled={page === totalPages} onClick={handleNextClick} className="btn btn-warning text-dark">Next &rarr;</button></div>}


                {quotes.map((item, index) => {
                    return <QuoteItem key={index} author={item.author} content={item.content} dateAdded={item.dateAdded} tags={item.tags} />
                })}


                {/*show bottom paginators only there is ateleast one result*/}
                {count === 0 ? '' : <div className='d-flex justify-content-between'><button disabled={page === 1 ? true : false} onClick={handlePreviousClick} className="btn btn-warning text-dark">&larr; Previous</button>
                    <button disabled={page === totalPages} onClick={handleNextClick} className="btn btn-warning text-dark">Next &rarr;</button></div>}
            </div>

           
        </>
    )
}

export default Quote
