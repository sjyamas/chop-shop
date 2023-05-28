import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../Global/CustomButton.jsx";

import bjchart from "../Assets/Images/bjchart.png";

export default function Pages() {
  return (
    <div>
      <div className="App-header">
        <div style={{ display: "flex" }}>
          <div>
            <CustomButton>
              <Link to="chop-shop" style={{ color: "white" }}>
                <h1> Chop Shop </h1>
              </Link>
            </CustomButton>
            <CustomButton>
              <Link to="Blackjack-Log" style={{ color: "white" }}>
                <h1> Blackjack Log</h1>
              </Link>
            </CustomButton>
          </div>
          <div>
            <h2 style={{ margin: 0 }}>
              MOTD:
            </h2>
            <h3> you look mighty fine </h3>
          </div>
          <img src={bjchart} alt="bjchart" style={{ width: "30%" }} />
        </div>
      </div>
    </div>
  );
}
