import React, { createContext, useState } from "react";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [state, setState] = useState({
    video: false,
    audio: false,
    screen: false,
    showModal: false,
    screenAvailable: false,
    messages: [],
    message: "",
    newmessages: 0,
    askForUsername: true,
    username: "some-user-name",
  });

  return (
    <VideoContext.Provider
      value={{ state, setState}}
    >
      {children}
    </VideoContext.Provider>
  );
};

export { VideoContext, VideoProvider };
