import React from "react";
import { Avatar } from "@mui/material";
import "./MessageWrapper.css";

function MessageWrapper(props) {
  return (
    <div className="message">
      <Avatar variant="rounded" sx={{ width: 36, height: 36 }}>
        <img
          className="message__avatar"
          referrerPolicy="no-referrer"
          src={props.photoURL}
          alt="Pic"
        />
      </Avatar>
      <div className="message__content">
        <h2 className="message__username">{props.displayName}</h2>
        <span className="message__username">{props.text}</span>
      </div>
    </div>
  );
}

export default MessageWrapper;
