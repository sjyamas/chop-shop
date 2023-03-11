import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../Global/CustomButton.jsx";

export default function Pages() {
  return (
    <div>
      <div className="App-header">
        <CustomButton>
          <Link to="chop-shop" style={{ color: "white" }}>
            Chop Shop
          </Link>
        </CustomButton>
        <CustomButton>
          <Link to="Blackjack-Log" style={{ color: "white" }}> Blackjack Log </Link>
        </CustomButton>
      </div>
    </div>
  );
}
