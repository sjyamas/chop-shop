import React from "react";
import CustomButton from "../../Global/CustomButton";

import { FiChevronsLeft } from "react-icons/fi"

import './Bet.css'


export function Bet({ bet, setBet }) {
  function handleBet(cbet) {
    setBet((bet) => bet + cbet);
    //todo: prevent nevative bets
  }

  return (
    <div className="bar">
      <div className="bar-grid">
        <div>
          <CustomButton
            onClick={() => {
              handleBet(-1000);
            }}
            style={{
              backgroundColor: "rgb(100, 100, 100)",
            }}
          >
            <h2 style={{ margin: 0, whiteSpace: 'now'}}> ◄1K </h2>
          </CustomButton>
        </div>

        <div className="inc-button">
          <CustomButton
            onClick={() => {
              handleBet(-100);
            }}
          >
            <h2 style={{ margin: 0 }}> ◄100 </h2>
          </CustomButton>
        </div>

        <div>
          <CustomButton
            onClick={() => {
              handleBet(-50);
            }}
          >
            <h2 style={{ margin: 0 }}> ◄50 </h2>
          </CustomButton>
        </div>

        <div
          style={{
            width: 100,
          }}
        >
          {/* <h2 style={{ margin: 0 }}> ${bet} </h2> */}
          <input class="styled-input" type='text' onChange={(i) => { setBet(Number(i.target.value)); }} value = {bet} size='5' />
        </div>

        <div>
          <CustomButton
            onClick={() => {
              handleBet(50);
            }}
          >
            <h2 style={{ margin: 0 }}> 50► </h2>
          </CustomButton>
        </div>

        <div className="inc-button">
          <CustomButton
            onClick={() => {
              handleBet(100);
            }}
          >
            <h2 style={{ margin: 0 }}> 100► </h2>
          </CustomButton>
        </div>

          <div>
          <CustomButton
            onClick={() => {
              handleBet(1000);
            }}
          >
            <h2 style={{ margin: 0 }}> 1K► </h2>
          </CustomButton>
          </div>
        </div>
        <div className="set-bet inc-button">
          <CustomButton
            onClick={() => {
              setBet(0);
            }}
          >
            <h2 style={{ margin: 0 }}> 0 </h2>
          </CustomButton>
          

          <CustomButton
            onClick={() => {
              setBet(500);
            }}
          >
            <h2 style={{ margin: 0 }}> 500 </h2>
          </CustomButton>

          <CustomButton
            onClick={() => {
              setBet(1000);
            }}
          >
            <h2 style={{ margin: 0 }}> 1K </h2>
          </CustomButton>

          <CustomButton
            onClick={() => {
              setBet(3000);
            }}
          >
            <h2 style={{ margin: 0 }}> 3K </h2>
          </CustomButton>

          <CustomButton
            onClick={() => {
              setBet(5000);
            }}
          >
            <h2 style={{ margin: 0 }}> 5K </h2>
          </CustomButton>

          <CustomButton
            onClick={() => {
              setBet(15000);
            }}
          >
            <h2 style={{ margin: 0 }}> 15K </h2>
          </CustomButton>
          </div>
      
    </div>
  );
}
