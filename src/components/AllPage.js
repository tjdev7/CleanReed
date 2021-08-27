import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import axios from 'axios'

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
    render() {
        const { data } = this.state
        return (
            <ul>
                {data.map((recentPost) => (
                    <li key={recentPost.permalink} className="postBox col">
                        <img
                            classname="img-fluid autogenImg"
                            src={recentPost.thumbnail}
                            alt="[No available img]"
                        />
                        <br />
                        <span className="postTitle">{recentPost.title}</span>
                        <br />
                        <span className="postAuthorStyle">
                            by {recentPost.author}
                        </span>
                        <br />
                        <span className="postUpvoteStyle">
                            👍 {recentPost.ups} upvotes
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
