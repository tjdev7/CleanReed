import React, {useState} from 'react'
import { BsFillHandThumbsUpFill } from "react-icons/bs";

function SearchBar() {
    
    const [rdtData, setRdtData] = useState([{}]);
    const [query, setQuery] = useState('');

    const reqTest = (event) => {
        if (event.key === "Enter") {
            fetch(`https://www.reddit.com/r/${query}.json`)
            .then (
                response => response.json()
            ).then (
                data => {
                    setRdtData(data)
                    setQuery("")
                }
                
            )
        }
    }

        return (
            
            <div>
               

                <ul>
                <input 
                className="SearchBar" 
                placeholder="Search a subreddit here" 
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyPress={reqTest}

                />
                <br/>
                <br/>
                    <li key = {rdtData.permalink} className="postBox col">{rdtData.subreddit}</li>

</ul>
            </div>
        )
    }



export default SearchBar;