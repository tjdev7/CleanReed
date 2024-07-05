import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import axios from 'axios'

export default class MoviesSub extends React.Component {
    constructor(props) {
        super()
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        axios.get(`https://www.reddit.com/r/movies.json`).then((res) => {
            const data = res.data.data.children.map((obj) => obj.data)
            this.setState({ data })
        })
    }
    render() {
        const { data } = this.state
        return (
            <ul className="">
                {data.map((recentPost) => (
                    <li key={recentPost.permalink} className="postBox">
                        {' '}
                        <a href={recentPost.url}>
                            <img
                                className="img-fluid"
                                src={recentPost.thumbnail}
                                alt="[No img available]"
                                loading="lazy"
                            />
                        </a>{' '}
                        <br />
                        <span className="postTitle">
                            {recentPost.title.slice(0, 75)}
                        </span>
                        <br />
                        <span className="postAuthorStyle">
                            by {recentPost.author} |
                        </span>
                        <span className="postUpvoteStyle">
                            👍 {recentPost.ups} upvotes |
                        </span>
                        <br />
                        <span className="postUpvoteStyle">
                            From /r/{recentPost.subreddit}/
                        </span>
                    </li>
                ))}
            </ul>
        )
    }
}
