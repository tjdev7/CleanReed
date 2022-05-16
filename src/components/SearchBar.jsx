import React, {useState} from 'react'

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

    // const [query, setQuery] = useState('');
    // const reqTest = (event) => {
    //     if (event.key === "Enter") {
    //         fetch(`https://www.reddit.com/r/${query}.json`).then((res) => {
    //         const data = res.data.data.children.map((obj) => obj.data)
    //         this.setState({ data })
    //     })
    //     }
    // }
    
        return (
            
            <div>
                <input 
                className="SearchBar" 
                placeholder="Search a subreddit here" 
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyPress={reqTest}

                />

                <ul>

                    <h1>{rdtData.subreddit}</h1>
</ul>

                {/*
                
                 {
                     
                     (
                        if rdtData ==== "undefined"
                        <span>CleanReed: An cleaner browsing experience for Reddit</span>
                     )
                     :
                     (
                     if rdtData. === null ? : (
                    <span>:(</span>
                    <h1>Sorry. It doesn't look like that Reddit page exists</h1>
                    )
                    :
                    (
                     if rdtData. === null ? : (
                    <span>:(</span>
                    <h1>Sorry. It doesn't look like that Reddit page exists</h1>
                    ) 
                    : 
                    : 
                    ( 
                    if rdtData.error === "403"                    
                    <h1>Sorry. It looks like this Reddit page is restricted</h1>
                    <span>:/</span>
                )} 
                
                */}
            
            </div>
        )
    }



export default SearchBar;
