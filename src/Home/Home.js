import React, { useContext } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { AuthContext } from "../AuthContext/AuthProvider";
import TextEditor from "../TextEditor/TextEditor";
import "./Home.css";
import MessageContent from "../MessageContent/MessageContent";

function Client() {
  const [{ user }, dispatch] = useContext(AuthContext);

  return (
    <>
      <Header />
      <div className="content__container">
        <Sidebar />
        <div className="message_container">
          <MessageContent channelName="users" />
          <TextEditor />
        </div>
      </div>
    </>
  );
}

export default Client;
