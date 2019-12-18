import React from "react";
import ReactDOM from "react-dom";
import "./index.sass";
import * as serviceWorker from "./serviceWorker";

const TweetTime = () => <time>18th December</time>;
const TweetUser = () => (
  <span>
    <strong>Aleksander Walczuk</strong>@contact.pl - 
  </span>
)
class Tweet extends React.Component {
  render() {
    return (
      <div>
        <TweetUser/>
        <TweetTime/>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Tweet />
    <Tweet />
    <Tweet />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
