import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person",
  },
  likes: 2,
  retweets: 0,
  timestamp: "2016-07-30 21:24:37",
};

const Avatar = () => {
  return (
    <img
      src="https://www.gravatar.com/avatar/nothing"
      className="avatar"
      alt="avatar"
    />
  );
};

const Message = () => {
  return <div className="message">This is less than 40 characters</div>;
};

const NameWithHandle = () => {
  return (
    <span className="name-with-handle">
      <span className="name">Your name</span>
      <span className="handle">@yourhandle</span>
    </span>
  );
};

const Time = () => {
  return <span className="time">3h ago</span>;
};

const ReplyButton = () => {
  return <i className="fa fa-reply reply-button" />;
};

const RetweetButton = () => {
  return <i className="fa fa-retweet retweet-button" />;
};

const LikeButton = () => {
  return <i className="fa fa-heart like-button" />;
};

const MoreOptionsButton = () => {
  return <i className="fa fa-ellipsis-h more-options-button" />;
};

const Tweet = ({ tweet }) => {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle />
        <Time />
        <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
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
