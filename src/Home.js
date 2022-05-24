import React, { useState } from "react";
import { Input, Button } from "@material-ui/core";
import "./Home.css";

const Home = () => {
  const [url, setUrl] = useState("");
  const handleChange = (e) => setUrl(e.target.value);

  const join = () => {
    if (url !== "") {
      var new_url = url.split("/");
      window.location.href = `/${new_url[new_url.length - 1]}`;
    } else {
      var new_url_other = Math.random().toString(36).substring(2, 7);
      window.location.href = `/${new_url_other}`;
    }
  };
  return (
    <div className="container2">
      <div>
        <h1 style={{ fontSize: "45px" }}>We Call - Video Chat</h1>
        <p style={{ fontWeight: "200" }}>
          Video conference website that lets you stay in touch with all your
          friends.
        </p>
      </div>

      <div
        style={{
          background: "white",
          width: "30%",
          height: "auto",
          padding: "20px",
          minWidth: "400px",
          textAlign: "center",
          margin: "auto",
          marginTop: "100px",
        }}
      >
        <p style={{ margin: 0, fontWeight: "bold" }}>
          Enter you custom code to start or join a meeting
        </p>
        <Input placeholder="URL" onChange={(e) => handleChange(e)} />
        <Button
          variant="contained"
          color="primary"
          onClick={join}
          style={{ margin: "20px" }}
        >
          Go
        </Button>
      </div>
    </div>
  );
};

export default Home;
