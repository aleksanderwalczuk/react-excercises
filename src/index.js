import React from "react";
import ReactDOM from "react-dom";
import "./index.sass";
import * as serviceWorker from "./serviceWorker";
import PropTypes from "prop-types";

class TweetForm extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <button>Tweetuj!</button>
      </div>
    );
  }
}

const TweetData = [
  {
    id: 1,
    user: {
      name: "Aleksander Walczuk",
      handle: "contact.pl"
    },
    date: new Date(),
    text: "Hello World"
  },
  {
    id: 2,
    user: {
      name: "Aleksander Walczuk",
      handle: "contact.pl"
    },
    date: new Date(),
    text: "Hello Again!"
  },
  {
    id: 3,
    user: {
      name: "Aleksander Walczuk",
      handle: "contact.pl"
    },
    date: new Date(),
    text: "Such a warm welcome!"
  }
];

const TweetTime = props => {
  const date = `${props.date.getDate()}
   ${props.date.toLocaleString("pl-pl", { month: "long" })}`;
  return <time>{date}</time>;
};

TweetTime.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired
};
const TweetUser = ({ name, handle }) => (
  <span>
    <strong>{name}</strong>@{handle}
  </span>
);

TweetUser.propTypes = {
  handle: PropTypes.string.isRequired,
  name: PropTypes.string
};
TweetUser.defaultProps = {
  name: "Anonymous"
};

class Tweet extends React.Component {
  render() {
    const { user, text, date } = this.props.tweet;

    return (
      <>
        <TweetUser name={user.name} />
        <TweetTime date={date} />
        <p>{text}</p>
      </>
    );
  }
}

Tweet.propTypes = {
  tweet: PropTypes.shape({
    user: PropTypes.shape({
      handle: PropTypes.string.isRequired,
      name: PropTypes.string
    }),
    date: PropTypes.instanceOf(Date).isRequired,
    text: PropTypes.string.isRequired
  })
};

const TweetList = ({ tweets }) => {
  return (
    <>
      {tweets.map(item => (
        <Tweet tweet={item} key={item.id} />
      ))}
    </>
  );
};
TweetList.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.object)
};

ReactDOM.render(
  <div>
    <TweetForm />
    <TweetList tweets={TweetData} />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
