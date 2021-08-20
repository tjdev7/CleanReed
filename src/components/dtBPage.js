import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import axios from 'axios'

export default class dtBPage extends React.Component {
    constructor(props) {
        super()
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        axios
            .get(`https://www.reddit.com/r/dataisbeautiful.json`)
            .then((res) => {
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
                            classname="img-fluid"
                            src={recentPost.thumbnail}
                            alt=""
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
                    </li>
                ))}
            </ul>
        )
    }
}
