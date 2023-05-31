import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../Global/CustomButton.jsx";

import bjchart from "../Assets/Images/bjchart.png";

import './Pages.css'

export default function Pages() {
  return (
      <div className="App-header front-body">
        <div className="front-title">
          <h1 style={{textAlign: 'center'}}>Boofman's website for all yotti things</h1>
        
        </div>
        <div style={{padding: 20}}>
          <hr style={{width: "90%", }}/>
        </div>
        <div className="front-body">
          <div className="front-col">
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
          <div className="front-col">
            <div>
              <h2 style={{ margin: 0, }}>
                MOTD:
              </h2>
              <h3 style={{ margin: 0, paddingBottom: 50}}> you look mighty fine </h3>
            </div>   
            <div className="front-col-text">
              <h2 style={{ margin: 0 }}>BlackJack Chart:</h2>
              <h3 style={{ margin: 0 }}>Failure to use chart will result in suboptimal results</h3>

              <img src={bjchart} alt="BlackJack standard strategy chart" width="372" hight ='526' />
            </div>
          </div>
        </div>
      </div>
  );
}
