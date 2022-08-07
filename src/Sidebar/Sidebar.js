import React from "react";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import FilterNoneOutlinedIcon from "@mui/icons-material/FilterNoneOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import "./Sidebar.css";
import Channel from "../Channels/Channel";
import SidebarOptions from "../SidebarOptions/SidebarOptions";
import ChannelList from "../ChannelList/ChannelList";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <span className="sidebar_header__team_name">Coders Buzz</span>
        <KeyboardArrowDownIcon
          fontSize="small"
          className="sidebar_header__dropdown"
        />
        <EditRoundedIcon className="sidebar_header__edit_icon" />
      </div>
      <div className="sidebar_menu">
        <SidebarOptions
          component={<MessageOutlinedIcon className="sidebar_options_icon" />}
          optionText="Threads"
        />
        <SidebarOptions
          component={<ForumOutlinedIcon className="sidebar_options_icon" />}
          optionText="All DMs"
        />
        <SidebarOptions
          component={
            <TurnedInNotOutlinedIcon className="sidebar_options_icon" />
          }
          optionText="Saved Items"
        />
        <SidebarOptions
          component={
            <ManageSearchOutlinedIcon className="sidebar_options_icon" />
          }
          optionText="Channel browser"
        />
        <SidebarOptions
          component={
            <FilterNoneOutlinedIcon className="sidebar_options_icon" />
          }
          optionText="File browser"
        />
        <SidebarOptions
          component={
            <AccountBoxOutlinedIcon className="sidebar_options_icon" />
          }
          optionText="People & user groups"
        />
        <SidebarOptions
          component={<AppsOutlinedIcon className="sidebar_options_icon" />}
          optionText="Apps"
        />
        <SidebarOptions
          component={<MoreVertOutlinedIcon className="sidebar_options_icon" />}
          optionText="More"
        />
      </div>
      <Channel />
      <ChannelList />
    </div>
  );
}

export default Sidebar;
