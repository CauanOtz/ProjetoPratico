import './search.css'
import {useState} from 'react';

function Search({onSearch}){

    const [inputValue, setInputValue] = useState("")

    const handleChange = (e) => {
        let taskbar = document.getElementById('taskbar').value
        onSearch(taskbar)
    }

    return(
        <>
        <div className="search">
            <input type="search" name="search" id="taskbar" placeholder='Task...'/>
            <input type="submit" value="Add" className='search-btn' onClick={handleChange}/>
        </div>
        </>
    )
}

export default Search;