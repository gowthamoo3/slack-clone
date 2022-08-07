import React, { useContext } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { getAuth } from "firebase/auth";
import CloseIcon from "@mui/icons-material/Close";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase_config";
import "./Channel.css";
import { AuthContext } from "../AuthContext/AuthProvider";
function Channel() {
  const [open, setOpen] = React.useState(false);
  const [channelName, setChannelName] = React.useState("");
  const [{ message, channels, currentChannelName }, dispatch] =
    useContext(AuthContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = async () => {
    console.log(channelName);
    console.log("Creating channel");
    const auth = getAuth();
    const { uid, photoURL, displayName } = auth.currentUser;
    const options = {
      year: "2-digit",
      month: "short",
      day: "numeric",
    };
    const messageObject = [
      {
        text: `${displayName} created this channel on ${new Date().toLocaleDateString(
          "en",
          options
        )}`,
        createdAt: `${Math.floor(Date.now() / 1000)}`,
        channelCreated: true,
        channelName,
        uid,
        photoURL,
        displayName,
      },
    ];
    await setDoc(doc(db, "slack", channelName), { message: messageObject });
    dispatch({
      type: "SET_CURRENT_CHANNEL",
      currentChannelName: channelName,
    });
    setChannelName("");
    setOpen(false);
  };

  const handleOnchange = (event) => {
    setChannelName(event.target.value);
  };

  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

  return (
    <div className="sidebar_channels">
      <ArrowDropDownIcon className="sidebar_channels__dropdown" />
      <span className="sidebar_channels__channel_text">Channels</span>
      <AddIcon
        className="sidebar_channels__addIcon"
        onClick={handleClickOpen}
      />
      <Dialog open={open}>
        <BootstrapDialogTitle
          sx={{ fontWeight: 800, fontSize: 28 }}
          onClose={handleClose}
        >
          Create a channel
        </BootstrapDialogTitle>
        <DialogContent>
          <DialogContentText>
            Channels are where your team communicates. They’re best when
            organized around a topic — #marketing, for example.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            placeholder="e.g. plan-budget"
            type="text"
            fullWidth
            variant="outlined"
            value={channelName}
            onChange={handleOnchange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCreate} variant="contained" color="success">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Channel;
