import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import "../../CSS/nav.css";
const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("auth");
    setIsNavExpanded(false);
  };
  const auth = localStorage.getItem("user");
  return (
    <>
      {auth ? (
        <nav className="navigation">
          <a href="/" className="brand-name">
            <div className="capwizard">
              <SmartToyRoundedIcon />
              CHATUTOPIA
            </div>
          </a>
          <button
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            {!isNavExpanded ? <MenuRoundedIcon /> : <MenuOpenRoundedIcon />}
          </button>
          <div
            className={
              isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
          >
            <ul>
              <li>
                <Link to="/home" onClick={logout}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <nav className="navigation">
          <a href="/" className="brand-name">
            <div className="capwizard">
              <SmartToyRoundedIcon />
              CHATUTOPIA
            </div>
          </a>
          <button
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            {!isNavExpanded ? <MenuRoundedIcon /> : <MenuOpenRoundedIcon />}
          </button>
          <div
            className={
              isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
          >
            <ul>
              <li>
                <Link to="/home" onClick={() => setIsNavExpanded(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/signup" onClick={() => setIsNavExpanded(false)}>
                  SignUp
                </Link>
              </li>
              <li>
                <Link to="/login" onClick={() => setIsNavExpanded(false)}>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Nav;
