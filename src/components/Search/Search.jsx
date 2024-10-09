import './search.css'

function Search(){
    return(
        <>
        <div className="search">
            <input type="search" name="search" id=""/>
            <input type="submit" value="Add" className='search-btn'/>
        </div>
        </>
    )
}

export default Search;