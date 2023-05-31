import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../Global/CustomButton.jsx";

import bjchart from "../Assets/Images/bjchart.png";

export default function Pages() {
  return (
      <div className="App-header" style={{display: 'flex', flexDirection: 'column'}}>
        <div style ={{display: "flex", justifyContent: "center"}}>
          <h1 style={{textAlign: 'center'}}>Boofman's website for all yotti things</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div style={{ display: "flex", flexDirection: 'column', padding: 5}}>
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
          <div style={{ display: "flex", flexDirection: 'column', padding: 5}}>
            <div>
              <h2 style={{ margin: 0 }}>
                MOTD:
              </h2>
              <h3 style={{ margin: 0, paddingBottom: 50}}> you look mighty fine </h3>
            </div>   
            <div style={{display: "inline-block", overflow: "break-word", inlineSize:"372px"}}>
              <h2 style={{ margin: 0 }}>BlackJack Chart:</h2>
              <h3 style={{ margin: 0 }}>Failure to use chart will result in suboptimal results</h3>

              <img src={bjchart} alt="BlackJack standard strategy chart" width="372" hight ='526' />
            </div>
          </div>
        </div>
      </div>
  );
}
