import React from "react";
import "./SidebarOptions.css";

function SidebarOptions(props) {
  return (
    <div className="sidebar_option_list">
      <i className="sidebar_option_icon">{props.component} </i>
      <span className="sidebar_option_text">{props.optionText}</span>
    </div>
  );
}

export default SidebarOptions;
