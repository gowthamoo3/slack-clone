import React, { useState, useContext } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  setDoc,
  doc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { db } from "../Firebase/firebase_config";
import { AuthContext } from "../AuthContext/AuthProvider";
import SendIcon from "@mui/icons-material/Send";
import "./TextEditor.css";

function TextEditor() {
  const [formValue, setFormValue] = useState("");
  const [{ user, message, messageSent, currentChannelName }, dispatch] =
    useContext(AuthContext);
  const handleOnchange = (event) => {
    setFormValue(event.target.value);
  };
  const handleOnSubmit = (event) => {
    console.log(` submit pressed ${event.target.value}`);
    if (event.keyCode == 13) {
      sendMessage(event);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    const { uid, photoURL, displayName } = auth.currentUser;

    try {
      setFormValue("");
      const msg_data = {
        text: formValue,
        createdAt: `${Math.floor(Date.now() / 1000)}`,
        uid,
        photoURL,
        displayName,
      };
      const new_arr = [...message];
      new_arr.push(msg_data);
      const docRef = collection(db, "slack");
      await setDoc(doc(docRef, currentChannelName), { message: new_arr });
      // const docRef = await addDoc(collection(db, "users"), {
      //   text: formValue,
      //   createdAt: serverTimestamp(),
      //   uid,
      //   photoURL,
      //   displayName,
      // });

      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className="text_editor">
      <TextField
        autoFocus
        fullWidth
        id="fullWidth"
        value={formValue}
        onChange={handleOnchange}
        onKeyUp={handleOnSubmit}
        className="texteditor"
      />
      <Button
        onClick={sendMessage}
        variant="contained"
        color="success"
        className="channel__send_button"
      >
        <SendIcon fontSize="medium" />
      </Button>
    </div>
  );
}

export default TextEditor;
