import React from "react";
import ReactDOM from "react-dom";
import "./index.sass";
import * as serviceWorker from "./serviceWorker";

class Tweet extends React.Component {
  render() {
    const date = new Date().toString();
    return (
      <div>
        <strong>Aleksander Walczuk</strong>@contact.pl -<time>{date}</time>
        <p>Hello world!</p>
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
