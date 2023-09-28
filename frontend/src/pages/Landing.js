import React from "react";
import { useNavigate } from "react-router-dom";
import chat from "../usables/chat.gif";
import privacy from "../usables/privacy.gif";
import group_chat from "../usables/group_chat.gif";
import "../CSS/landing.css";
const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <ul className="cover_box">
        <li>
          <img className="landing_cover" alt="this is a gif" src={chat}></img>
        </li>
        <li className="quote">
          <h1>Elevate your life with Chatutopia.</h1>
          <p>
            " Connect instantly, collaborate efficiently, and communicate
            powerfully. Join now and experience the pinnacle of meaningful,
            real-time communication."
          </p>
          <button
            className="joinusButton"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Join Us
          </button>
        </li>
      </ul>
      <div className="services">
        <ul className="box">
          <li className="box_text">
            <h1>Group chat at its finest</h1>
            <p>
              "Connect with multiple voices, brainstorm ideas, and collaborate
              on the go. Fuel your teamwork and communication today."
            </p>
          </li>
          <li>
            <img alt="this is a gif" src={group_chat}></img>
          </li>
        </ul>
        <ul className="box ">
          <li>
            <img alt="this is a gif" src={privacy}></img>
          </li>
          <li className="box_text">
            <h1>Privacy is paramount with Chatutopia</h1>
            <p>
              " Your data is safeguarded, your information stays confidential.
              Rest easy, knowing your privacy is our priority.* *Experience
              secure communication,always."
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Landing;
