import React, { Component } from "react";
import axios from "axios";

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  };
  constructor(props) {
    super(props);

    this.state = {
      jokes: []
    };
  }

  async componentDidMount() {
    // debugger;
    console.log("in component did mount");
    //load jokes
    let jokes = [];
    console.log(jokes);
    while (jokes.length < this.props.numJokesToGet) {
      let res = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      });

      jokes.push(res.data.joke);
    }
    this.setState({ jokes: jokes });
  }
  render() {
    return (
      <div className="JokeList">
        <h1>Joke List</h1>
        <div className="Jokelist-jokes">
          {this.state.jokes.map(joke => (
            <div>{joke}</div>
          ))}
        </div>
      </div>
    );
  }
}
export default JokeList;
