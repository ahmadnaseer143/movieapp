import React from 'react'

const SearchBox = (props) => {
    
    return (
        <div class="input-group rounded">
            <input type="search" class="form-control input-group-lg rounded" value={props.value} onChange={(e)=>props.setSearch(
                e.target.value
            )} placeholder="Search Away..." />
        </div> 
    )
}

export default SearchBox
