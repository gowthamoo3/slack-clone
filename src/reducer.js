export const initialState = {
  user: null,
  message: [{}],
  messageSent: false,
  channels: [],
  currentChannelName: "fc-random",
};

export default function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "REMOVE_USER":
      return { ...state, user: null };
    case "SET_MESSAGES":
      return {
        ...state,
        message: action.message,
      };
    case "MESSAGE_SENT":
      return {
        ...state,
        messageSent: action.messageSent,
      };
    case "SET_CHANNELS":
      return {
        ...state,
        channels: action.channelList,
      };
    case "SET_CURRENT_CHANNEL":
      return {
        ...state,
        currentChannelName: action.currentChannelName,
      };
    default:
      return state;
  }
}
