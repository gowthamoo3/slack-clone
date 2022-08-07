import React, { useEffect, useContext } from "react";
import ChannelWrapper from "../ChannelWrapper/ChannelWrapper";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase_config";
import { AuthContext } from "../AuthContext/AuthProvider";
import "./ChannelList.css";

function ChannelList() {
  const [{ message, channels, currentChannelName }, dispatch] =
    useContext(AuthContext);

  useEffect(() => {
    getAllChannels();
  }, [currentChannelName]);

  const getAllChannels = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "slack"));
      const _channelList = [{}];
      let i = 0;
      querySnapshot.forEach((doc) => {
        _channelList[i] = doc.id;
        i++;
        console.log(doc.id, " => ", doc.data());
      });
      console.log(_channelList);
      dispatch({
        type: "SET_CHANNELS",
        channelList: _channelList,
      });
      console.log(channels);
    } catch (e) {
      console.error("Error reading document: ", e);
    }
  };

  return (
    <div className="channel__list">
      {channels &&
        channels.map((channelName) => {
          return <ChannelWrapper channelName={channelName} />;
        })}
    </div>
  );
}

export default ChannelList;
