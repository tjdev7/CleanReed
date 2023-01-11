import React, { useEffect, useState } from 'react'

import '../App.css'

import { BsFillHandThumbsUpFill } from 'react-icons/bs'

function SearchBar2(props) {
    const [articles, setArticles] = useState([])
    const [subreddit, setSubreddit] = useState('all')

    useEffect(() => {
        fetch('https://www.reddit.com/r/all.json').then(
            // fetch("https://www.reddit.com/r/" + subreddit + ".json").then
            (res) => {
                if (res.status !== 200) {
                    console.log('test')
                    return
                }
                res.json().then((data) => {
                    if (data != null) {
                        setArticles(data.data.children)
                    }
                })
            }
        )
    }, [subreddit])

    return (
        <div className="App">
            <input
                type="text"
                placeholder="Reddit search test"
                className="SearchBar input"
                value={subreddit}
                onChange={(e) => setSubreddit(e.target.value)}
            />

            <div className="">
                {articles.map((article, index) => (
                    <li key={index} className="postBox col">
                        {' '}
                        {/* <a href={article.url}>
                                    <img
                                        className="img-fluid"
                                        src={article.thumbnail}
                                        alt="❌"
                                        loading="lazy"
                                    />
                                </a>{' '} */}
                        <span className="postTitle">
                            {/* {article.data} */}
                            <BsFillHandThumbsUpFill /> {article.title}
                        </span>
                        <br />
                        {/* <span className="postAuthorStyle">
                                    By {article.author} From /r/
                                    {article.subreddit}/
                                    <BsFillHandThumbsUpFill /> {
                                        article.ups
                                    }{' '}
                                    upvotes
                                    article={article.data}
                                </span> */}
                    </li>
                ))}
            </div>
        </div>
    )
}

export default SearchBar2
