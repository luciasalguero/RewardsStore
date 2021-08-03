import React from "react";
import "./Header.css";
import { useContext } from "react";

import Logo from "../../Images/aerolab-logo.svg";
import Coins from "../../Images/coin.svg";


import { UserContext } from "../../context/userContext";



 export const Header = () => {
  //extracting data from Provider UserContext
  const { userPoints, userName } = useContext(UserContext);
  /* --------------------------------- */
  //it renders header function
  return (
    <header>
        <img src={Logo} alt="Store Logo" />
      <nav className="user-info">
        <MainInformation userInfo={userName} />
        <div className="points">
          <MainInformation userInfo={userPoints} />
          <span className="coins-logo">
            <img src={Coins} alt="coins" />
          </span>
        </div>
      </nav>
    </header>
  );
};


const MainInformation = ({ userInfo }) => {
  const { loading, error, data } = userInfo;
  if (loading === true) {
    return (
      //It renders loading message
      <h4>Loading...</h4>
    );
  }

  if (error) {
    return (
      //It renders notification of error
      <h4>{error}</h4>
    );
  }
  //it renders user information
  return <h4>{data}</h4>;
};
