import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {VideoProvider} from "./VideoProvider";

ReactDOM.render(
  <VideoProvider>
    <App />
  </VideoProvider>,
  document.getElementById("root")
);
