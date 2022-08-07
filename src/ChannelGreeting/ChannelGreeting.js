import React from "react";
import "./ChannelGreeting.css";
import TagIcon from "@mui/icons-material/Tag";
import MessageWrapper from "../MessageWrapper/MessageWrapper";

function ChannelGreeting(props) {
  return (
    <div className="channel__greeting">
      <div className="channel__greeting_content">
        <div className="channel__greeting_title">
          <TagIcon sx={{ height: 28, width: 28 }} />
          <span className="channel__greeting_channelName">
            {props.channelName}
          </span>
        </div>
        <div>
          <span className="channel__greeting_channelDescription">
            {props.text} This is the very beginning of the{" "}
            <b>{props.channelName}</b> channel
          </span>
        </div>
      </div>
      <hr />
      <div className="channel__greeting_joinedMsg">
        <MessageWrapper
          photoURL={props.photoURL}
          displayName={props.displayName}
          text={`joined ${props.channelName}`}
        />
      </div>
    </div>
  );
}

export default ChannelGreeting;
