import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import axios from "axios";
import tempiconcleanreed from "../img/tempiconcleanreed.png";

export default class dtBPage extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }
  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <li className="postBox col">
            <span className="postImage">
              <img className="postImage" alt="test" src={tempiconcleanreed} />
            </span>
            <br />
            <span className="postTitle">{person.company.catchPhrase}</span>
            <br />
            <span className="postAuthorStyle">{person.username}</span> |
            <span className="postUpvoteStyle">👍 {person.id}</span>
          </li>
        ))}
      </ul>
    );
  }
}
