import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import axios from 'axios'
import { BsFillHandThumbsUpFill } from 'react-icons/bs'
export default class AllPage extends React.Component {
    constructor(props) {
        super()
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        axios.get(`https://www.reddit.com/r/all.json`).then((res) => {
            const data = res.data.data.children.map((obj) => obj.data)
            this.setState({ data })
        })
    }

    // componentDidMount() {
    //     fetch(`https://www.reddit.com/r/${query}.json`).then((res) => {
    //         const data = res.data.data.children.map((obj) => obj.data)
    //         this.setState({ data })
    //     })
    // }
    render() {
        const { data } = this.state
        return (
            <ul>
                <input
                    className="SearchBar"
                    placeholder="Search a subreddit here"
                />
                <br />
                <br />

                {data.map((recentPost) => (
                    <li key={recentPost.permalink} className="postBox col">
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
