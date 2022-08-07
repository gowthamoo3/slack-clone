import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../Firebase/firebase_config";
import MessageWrapper from "../MessageWrapper/MessageWrapper";
import "./MessageContent.css";
import ChannelGreeting from "../ChannelGreeting/ChannelGreeting";

function MessageContent(props) {
  const [{ user, message, messageSent, currentChannelName }, dispatch] =
    useContext(AuthContext);
  useEffect(() => {
    scrollToBottom();
  }, [message]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    dispatch({
      type: "SET_MESSAGES",
      message: [],
    });
    getAllMessagesFromACollection();
  }, [props.channelName, messageSent, currentChannelName]);
  const getAllMessagesFromACollection = async () => {
    try {
      // const usersRef = collection(db, "users");
      const usersRef = doc(db, "slack", currentChannelName);
      console.log(` current channel name ${currentChannelName}`);
      // Create a query against the collection.
      // const queryByTimestamp = query(usersRef, orderBy("createdAt"));
      const unsubscribe = onSnapshot(usersRef, (doc) => {
        console.log("onSnapshot called");
        console.log(doc.data());
        console.log("After sorting");
        if (Object.keys(doc.data()["message"]).length > 1) {
          console.log(
            doc.data()["message"].sort(function (x, y) {
              return x.createdAt.seconds > y.createdAt.seconds;
            })
          );
        }
        dispatch({
          type: "SET_MESSAGES",
          message: doc.data()["message"].sort(function (x, y) {
            return x.createdAt.seconds > y.createdAt.seconds;
          }),
        });
      });
    } catch (e) {
      console.error("Error reading document: ", e);
    }
  };

  return (
    <div className="message__content__container">
      {message.map((v, i) => {
        if (i == 0 && v.channelCreated) {
          return (
            <ChannelGreeting
              channelName={message[i].channelName}
              text={message[i].text}
              createdAt={message[i].createdAt}
              photoURL={message[i].photoURL}
              displayName={message[i].displayName}
            />
          );
        }
        return (
          <MessageWrapper
            photoURL={message[i].photoURL}
            displayName={message[i].displayName}
            text={message[i].text}
          />
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default MessageContent;
