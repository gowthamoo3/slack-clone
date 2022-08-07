import React, { useContext } from "react";
import "./Header.css";
import Search from "../Search/Search";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CircleIcon from "@mui/icons-material/Circle";
import { Avatar } from "@mui/material";
import { AuthContext } from "../AuthContext/AuthProvider";

function Header() {
  const [{ user }, dispatch] = useContext(AuthContext);
  return (
    <div className="header">
      <div className="header__sidebar">
        <AccessTimeIcon className="header__icon" />
      </div>
      <Search />
      <div className="header__right">
        <HelpOutlineIcon className="header__icon header__helpIcon" />
        <Avatar variant="rounded" sx={{ width: 28, height: 28 }}>
          <img
            className="header__avatar"
            referrerPolicy="no-referrer"
            src={user && user.photoURL}
            alt="Pic"
          />
        </Avatar>

        <CircleIcon className="header__statusIcon" fontSize="small" />
      </div>
    </div>
  );
}

export default Header;
