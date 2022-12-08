import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { FaRetweet, FaHeart, FaReply, FaEllipsisH } from "react-icons/fa";
import { formatTimeAgo } from "./utils";
import { getRetweetCount } from "./helpers";

const testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person",
  },
  likes: 2,
  retweets: 5,
  timestamp: "2016-07-30 21:24:37",
};

const Avatar = ({ hash }) => {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return <img src={url} className="avatar" alt="avatar" />;
};

const Message = ({ text }) => {
  return <div className="message">{text}</div>;
};

const NameWithHandle = ({ author }) => {
  const { name, handle } = author;
  return (
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
};

const Time = ({ time }) => {
  const date = new Date(time);

  const timeString = formatTimeAgo(date);

  return <span className="time">{timeString}</span>;
};

const ReplyButton = () => {
  return <FaReply className=" reply-button" />;
};

const RetweetButton = ({ count }) => {
  return (
    <spn className="retweet-button">
      <FaRetweet />
      {getRetweetCount(count)}
    </spn>
  );
};

const LikeButton = ({ count }) => {
  return (
    <span className="like-button">
      <FaHeart />
      {count > 0 && <span className="like-count">{count}</span>}
    </span>
  );
};

const MoreOptionsButton = () => {
  return <FaEllipsisH className="more-options-button" />;
};

const Tweet = ({ tweet }) => {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <NameWithHandle author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Tweet tweet={testTweet} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
