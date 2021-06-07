import React, { useState, useEffect } from 'react'

export const SearchTodo = (props) => {

    function submit(e) {
        if(query){
            e.preventDefault();
            props.queryValue(query)
            setQuery('')
        }
        else{alert('Searchbar can not be empty!')}
    }


    const [query, setQuery] = useState('');
    useEffect(() => {
        setQuery(query)
    }, [query])



    return (
        <div>
            <form className="container my-5" onSubmit={submit}>
                <input className="form-control me-2" type="search" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-3" type="submit">Search</button>
            </form>            
        </div>
    )
}