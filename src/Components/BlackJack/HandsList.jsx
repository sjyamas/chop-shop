import React from "react";

import {
  Push,
  Win,
  Loss,
  DdLoss,
  DdWin,
  DdPush,
  BjWin,
  BjLoss,
  SplitPushPush,
  SplitWinLoss,
  SplitWinWin,
  SplitWinPush,
  SplitLossLoss,
  SplitLossPush,
} from "./Hands.jsx";

function formatDate(value) {
  let date = new Date(value);
  const day = date.toLocaleString("default", { day: "numeric" });
  const month = date.toLocaleString("default", { month: "numeric" });
  const year = date.toLocaleString("default", { year: "numeric" });
  const time = date.toLocaleTimeString("en-US");
  return month + "/" + day + "/" + year + " @ " + time;
}

function HandInfo({ hand }) {
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
  } else if (hand.betPM >= 1) {
    bgcolor = "rgba(200, 255, 200, 1)";
    color = "black";
  } else if (hand.betPM >= 0) {
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

function Outcome({ out }) {
  if (out === "w") {
    return <Win />;
  } else if (out === "l") {
    return <Loss />;
  } else if (out === "p") {
    return <Push />;
  } else if (out === "bw") {
    return <BjWin />;
  } else if (out === "bl") {
    return <BjLoss />;
  } else if (out === "dw") {
    return <DdWin />;
  } else if (out === "dl") {
    return <DdLoss />;
  } else if (out === "dp") {
    return <DdPush />;
  } else if (out === "spp") {
    return <SplitPushPush />;
  } else if (out === "swl") {
    return <SplitWinLoss />;
  } else if (out === "sww") {
    return <SplitWinWin />;
  } else if (out === "swp") {
    return <SplitWinPush />;
  } else if (out === "sll") {
    return <SplitLossLoss />;
  } else if (out === "slp") {
    return <SplitLossPush />;
  }
}

export default function HandsList({ data }) {
  console.log("HandList", data.hands);

  let profit = 0;
  let rawPM = 0;
  let gamesPlayed = 0;
  if (data.hands.length && data.hands.length > 0) {
    profit = (data.hands.at(-1)["outBal"] - data.startMoney).toLocaleString();
    rawPM = data.hands.at(-1).betPM;
    gamesPlayed = data.hands.length;
  }

  let PM = 0;
  if (rawPM === 0) {
    PM = "±0";
  } else if (rawPM > 0) {
    PM = "+" + rawPM;
  } else {
    PM = rawPM;
  }

  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0, 0.2)",
        borderRadius: 8,
        display: "inline-block",
        textAlign: "center",
        padding: 10,
        width: "95%",
        // paddingBottom:100
      }}
    >
      <div style={{ padding: 10 }}>
        <h2 style={{ margin: 0 }}>
          Session {data.sessionID}: {formatDate(data.dateTime)}
        </h2>
        {/* <h3 style={{ margin: 0 }}>
          start: ${data.startMoney.toLocaleString()} {end} &emsp;
        </h3> */}
        <h2 style={{ margin: 0 }}>
          Profit: ${profit} &emsp; Games: {gamesPlayed} &emsp; Plus-Minus: {PM}
        </h2>
        <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap" }}>
          {data.hands.map((value, index) => (
            <div style={{ margin: 4 }}>
              <HandInfo hand={value} />
            </div>
          ))}
          {/* <Helper Arr={data.hands} /> */}
        </div>
      </div>
    </div>
  );
}
