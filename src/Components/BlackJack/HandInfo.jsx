import React from "react";
import { Outcome } from "./HandsList.jsx";

export function HandInfo({ hand }) {
  let bet = Math.round((hand.bet / 1000).toFixed(2) * 100) / 100;
  let pm = 0;

  let color = "white";
  let bgcolor = "white";

  if (hand.betPM === 0) {
    pm = "±0";
  } else if (hand.betPM > 0) {
    pm = "+" + hand.betPM;
  } else {
    pm = hand.betPM;
  }

  if (hand.betPM >= 15) {
    bgcolor = "rgba(0, 255, 0, 0.2)";
    color = "white";
  } else if (hand.betPM >= 13) {
    bgcolor = "rgba(0, 255, 0, 0.4)";
    color = "white";
  } else if (hand.betPM >= 11) {
    bgcolor = "rgba(0, 255, 0, 0.6)";
    color = "white";
  } else if (hand.betPM >= 9) {
    bgcolor = "rgba(0, 255, 0, 0.8)";
    color = "white";
  } else if (hand.betPM >= 7) {
    bgcolor = "rgba(0, 255, 0, 1)";
    color = "black";
  } else if (hand.betPM >= 5) {
    bgcolor = "rgba(50, 255, 50, 1)";
    color = "black";
  } else if (hand.betPM >= 3) {
    bgcolor = "rgba(100, 255, 100, 1)";
    color = "black";
  } else if (hand.betPM >= 2) {
    bgcolor = "rgba(150, 255, 150, 1)";
    color = "black";
  } else if (hand.betPM > 0) {
    bgcolor = "rgba(200, 255, 200, 1)";
    color = "black";
  } else if (hand.betPM === 0) {
    bgcolor = "rgba(255, 255, 255, 0.8)";
    color = "black";
  } else if (hand.betPM >= -1) {
    bgcolor = "rgba(255, 200, 200, 1)";
    color = "black";
  } else if (hand.betPM >= -2) {
    bgcolor = "rgba(255, 150, 150, 1)";
    color = "black";
  } else if (hand.betPM >= -3) {
    bgcolor = "rgba(255, 100, 100, 1)";
    color = "black";
  } else if (hand.betPM >= -5) {
    bgcolor = "rgba(255, 50, 50, 1)";
    color = "white";
  } else if (hand.betPM >= -7) {
    bgcolor = "rgba(255, 0, 0, 1)";
    color = "white";
  } else if (hand.betPM >= -9) {
    bgcolor = "rgba(255, 0, 0, 0.8)";
    color = "white";
  } else if (hand.betPM >= -11) {
    bgcolor = "rgba(255, 0, 0, 0.6)";
    color = "white";
  } else if (hand.betPM >= -13) {
    bgcolor = "rgba(255, 0, 0, 0.4)";
    color = "white";
  } else if (hand.betPM >= -15) {
    bgcolor = "rgba(255, 0, 0, 0.2)";
    color = "white";
  } else {
    bgcolor = "rgba(255, 0, 0, 0.1)";
    color = "white";
  }

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "rgba(0,0,0, 0.2)",
        borderRadius: 8,
        // padding: 4,
        paddingBottom: 10,
        paddingTop: 10,
      }}
    >
      <p style={{ margin: 0 }}>{bet}k</p>
      <Outcome out={hand.outcome} />
      <p style={{ margin: 1, paddingBottom: 1 }}>
        ${hand.outBal.toLocaleString()}
      </p>

      <div
        className="label"
        style={{
          backgroundColor: bgcolor,
          color: color,
          borderRadius: 5,
          padding: 1,
          width: "50%",
          display: "inline-block",
          textAlign: "center",
        }}
      >
        {/* <div style={{width: 25,}}> */}
        <p style={{ margin: 0 }}>{pm}</p>
        {/* </div> */}
      </div>
    </div>
  );
}
