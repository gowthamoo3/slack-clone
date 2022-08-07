import React, { useContext } from "react";
import TagIcon from "@mui/icons-material/Tag";
import "./ChannelWrapper.css";
import { AuthContext } from "../AuthContext/AuthProvider";

function ChannelWrapper(props) {
  const [{ user, message, channels, currentChannelName }, dispatch] =
    useContext(AuthContext);
  const setChannelName = () => {
    dispatch({
      type: "SET_CURRENT_CHANNEL",
      currentChannelName: props.channelName,
    });
    console.log(` channel name: ${currentChannelName}`);
  };
  return (
    <div
      className={`channel__wrapper sidebar_option_list ${
        currentChannelName == props.channelName ? "active_channel" : ""
      }`}
      onClick={setChannelName}
    >
      <TagIcon fontSize="small" className="sidebar_option_icon" />
      <span className="çhannel_name">{props.channelName}</span>
    </div>
  );
}

export default ChannelWrapper;
