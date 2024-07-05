import React from 'react'
import axios from 'axios'

import { BsFillHandThumbsUpFill } from 'react-icons/bs'

import 'bootstrap/dist/css/bootstrap.css'

export default class AllPage extends React.Component {
    constructor(props) {
        super()
        this.state = {
            data: [],
        }
    }

    // EZ finish -- you ALREADY did this
    // 1) API or json data
    // var URL = "https://pixabay.com/api/?key="+{API_KEY}+"&q="+encodeURIComponent('red roses');
    // var URL = "https://pixabay.com/api/?key="+{API_KEY}+"&q="+encodeURIComponent('red roses');
    // var URL = "https://pixabay.com/api/?key="+{API_KEY}+"&q="+encodeURIComponent('red roses');
    // (`https://www.reddit.com/r/${query}.json`)

    // 2) states (setState(''), loading, useState('data render'))
    // 3) Fetch data (3 to 4 lines of code)
    // 4) data.map to show all data
    // 5) css to style it.

    // componentDidMount() {
    //     axios.get(`https://www.reddit.com/r/all.json`).then((res) => {
    //         const data = res.data.data.children.map((obj) => obj.data)
    //         this.setState({ data })
    //     })
    // }

    // componentDidMount() {
    //     fetch(`https://www.reddit.com/r/${query}.json`).then((res) => {
    //         const data = res.data.data.children.map((obj) => obj.data)
    //         this.setState({ data })
    //     })
    // }

    // componentWillUpdate() {
    //     fetch(`https://www.reddit.com/r/${query}.json`).then((res) => {
    //         const data = res.data.data.children.map((obj) => obj.data)
    //         this.setState({ data })
    //     })
    // }    // componentUnmount() {
    //     fetch(`https://www.reddit.com/r/${query}.json`).then((res) => {
    //         const data = res.data.data.children.map((obj) => obj.data)
    //         this.setState({ data })
    //     })
    // }

    render() {
        const { data, loading } = this.state
        return (
            <ul>
                <input
                    className="SearchBar"
                    placeholder="Search for a subreddit here"
                />
                <br />
                <br />

                {data.map((recentPost) => (
                    <li
                        key={recentPost.permalink}
                        loading={isLoading}
                        className="postBox col"
                    >
                        {' '}
                        <a href={recentPost.url}>
                            <img
                                classname="img-fluid"
                                src={recentPost.thumbnail}
                                alt="[No img is available for the selected post]"
                                loading="lazy"
                            />
                        </a>{' '}
                        <br />
                        <span className="postTitle">
                            {recentPost.title.slice(0, 75)}
                        </span>
                        <br />
                        <span className="postAuthorStyle">
                            By {recentPost.author} From /r/
                            {recentPost.subreddit}/
                            <BsFillHandThumbsUpFill /> {recentPost.ups} upvotes
                        </span>
                    </li>
                ))}
            </ul>
        )
    }
}
