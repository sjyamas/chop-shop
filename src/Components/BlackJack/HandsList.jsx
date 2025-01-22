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
import { HandInfo } from "./HandInfo.jsx";

import './HandsList.css'

function formatDate(value) {
  let date = new Date(value);
  const day = date.toLocaleString("default", { day: "numeric" });
  const month = date.toLocaleString("default", { month: "numeric" });
  const year = date.toLocaleString("default", { year: "numeric" });
  const time = date.toLocaleTimeString("en-US");
  return month + "/" + day + "/" + year + " @ " + time;
}

export function Outcome({ out }) {
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
        marginTop: 5
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
          Profit: ${profit} &emsp; Games: {gamesPlayed} &emsp; W/L: {PM}
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
