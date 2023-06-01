import React, { useState } from "react";
import CustomButton from "../../Global/CustomButton";
import Switch from "../../Global/Switch/Switch";
import './styles.css'
import './AddHand.css'
import { Bet } from "./Bet";

function Footer({ children, height }) {
  let style = {
    backgroundColor: "rgba(50,50,55, 1)",
    textAlign: "center",
    // padding: "20px",
    position: "fixed",
    // left: "0",
    bottom: "0",
    height: height,
    width: "100%",
  };

  return (
    <div>
      <div style={style}>{children}</div>
    </div>
  );
}

export default function AddHand({
  showFooter,
  height,
  addSession,
  removeSession,
  addHand,
  removeHand,
  currentHand,
  setCurrentHand,
  handsData,
}) {
  const [bet, setBet] = useState(0);
  const [unsafe, setUnsafe] = useState(false);

  let two = ["sww", "dw"];
  let oneHalf = ["bw"];
  let one = ["w", "swp"];
  let zero = ["p", "dp", "swl", "spp"];
  let minusOne = ["l", "bl", "slp"];
  let minusTwo = ["dl", "sll"];

  function outHandler(outcome) {
    console.log("Outcome", outcome);

    let outBal = 0;
    let pm = 0;

    if (currentHand["outBal"]) {
      outBal = currentHand["outBal"];
    } else {
      if (
        handsData.at(-1) &&
        handsData.at(-1).hands &&
        handsData.at(-1).hands.at(-1)
      ) {
        outBal = handsData.at(-1).hands.at(-1).outBal;
      }
    }
    if (currentHand["pm"]) {
      pm = currentHand["pm"];
    } else {
      if (
        handsData.at(-1) &&
        handsData.at(-1).hands &&
        handsData.at(-1).hands.at(-1)
      ) {
        pm = handsData.at(-1).hands.at(-1).betPM;
      }
    }

    if (two.includes(outcome)) {
      pm += 2;
      outBal += bet * 2;
    } else if (oneHalf.includes(outcome)) {
      pm += 1.5;
      outBal += bet * 1.5;
    } else if (one.includes(outcome)) {
      pm += 1;
      outBal += bet;
    } else if (zero.includes(outcome)) {
    } else if (minusOne.includes(outcome)) {
      pm -= 1;
      outBal -= bet;
    } else if (minusTwo.includes(outcome)) {
      pm -= 2;
      outBal -= bet * 2;
    }

    setCurrentHand({ outBal: outBal, pm: pm });
    addHand({ bet: bet, outcome: outcome, outBal: outBal, betPM: pm });
  }

  return (
    <Footer height={height}>
      <div
        style={{
          display: "inline-block",
          width: "90%",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CustomButton
            bgcolor="rgba(120, 120, 50)"
            onClick={() => {
              let t = new Date();
              let z = t.getTimezoneOffset() * 60 * 1000;
              let tLocal = t - z;
              tLocal = new Date(tLocal);
              let iso = tLocal.toISOString();
              iso = iso.split(".")[0];
              iso = iso.replace("T", " ");
              console.log(iso);
              let sesh = 1;
              if (handsData[handsData.length - 1]) {
                sesh = handsData[handsData.length - 1].sessionID + 1;
              }
              addSession({
                sessionID: sesh,
                startMoney: 0,
                dateTime: iso,
                hands: [],
              });
            }}
          >
            New Session
          </CustomButton>
          <CustomButton onClick={() => removeHand()}>
            {" "}
            Remove Last Hand{" "}
          </CustomButton>
          <CustomButton
            onClick={() => {
              if (unsafe) removeSession();
            }}
          >
            {" "}
            Remove Session (must be on →){" "}
          </CustomButton>
          <Switch handleToggle={() => setUnsafe(!unsafe)} />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Bet bet={bet} setBet={setBet} />
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "30%",
              backgroundColor: "rgba(90, 50, 50)",
              borderRadius: 8,
              margin: 5,
            }}
          >
            <h3 style={{ margin: 0 }}> Loss </h3>
            <div style={{ display: "flex",}}>
              <div
                style={{
                  width: "50%",
                }}
              >
                <h3 style={{ margin: 0 }}> -2 </h3>

                <button
                  className="btn btn-lbl"
                  onClick={() => outHandler("dl")}
                  style={{ width: "100%" }}
                >
                  Double Down: Loss
                </button>

                <button
                className="btn btn-lbl"
                  onClick={() => outHandler("sll")}
                  style={{ width: "100%" }}
                >
                  Split: Loss-Loss
                </button>
              </div>
              <div
                style={{
                  width: "50%",
                }}
              >
                <h3 style={{ margin: 0 }}> -1 </h3>
                <button
                className="btn btn-lbl btn-loss"
                  onClick={() => outHandler("l")}
                  style={{ width: "100%" }}
                >
                  Loss
                </button>
                <button
                className="btn btn-lbl"
                  onClick={() => outHandler("bl")}
                  style={{ width: "100%" }}
                >
                  Loss (Dealer Blackjack)
                </button>
                <button
                className="btn btn-lbl"
                  onClick={() => outHandler("slp")}
                  style={{ width: "100%" }}
                >
                  Split: Loss-Push
                </button>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "20%",
              backgroundColor: "rgba(100, 100, 100)",
              borderRadius: 8,
              margin: 5,
            }}
          >
            <h3 style={{ margin: 0 }}> Even </h3>
            <div
              style={{
                width: "100%",
              }}
            >
              <h3 style={{ margin: 0 }}> ±0 </h3>
              <button
                className="btn btn-lbl"
                onClick={() => outHandler("p")}
                bgcolor="rgb(30,30,30)"
                style={{ width: "100%" }}
              >
                Push
              </button>
              <button
                className="btn btn-lbl"
                onClick={() => outHandler("dp")}
                // bgcolor="rgb(30,30,30)"
                style={{ width: "100%" }}
              >
                Double Down: Push
              </button>
              <button
                className="btn btn-lbl"
                onClick={() => outHandler("swl")}
                style={{ width: "100%" }}
              >
                Split: Win-Loss
              </button>
              <button
                className="btn btn-lbl"
                onClick={() => outHandler("spp")}
                style={{ width: "100%" }}
              >
                Split: Push-Push
              </button>
            </div>
          </div>
          <div
            style={{
              width: "40%",
              backgroundColor: "rgba(50, 90, 50)",
              borderRadius: 8,
              margin: 5,
            }}
          >
            <h3 style={{ margin: 0 }}> Win </h3>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "33%",
                }}
              >
                {" "}
                <h3 style={{ margin: 0 }}> +1 </h3>{" "}
                <button
                className="btn btn-lbl btn-win"
                  onClick={() => outHandler("w")}
                  style={{ width: "100%" }}
                >
                  Win
                </button>
                <button
                className="btn btn-lbl"
                  onClick={() => outHandler("swp")}
                  style={{ width: "100%" }}
                >
                  Split: Win-Push
                </button>
              </div>
              <div
                style={{
                  width: "33%",
                }}
              >
                <h3 style={{ margin: 0 }}> +1.5 </h3>
                <button
                className="btn btn-lbl"
                  onClick={() => outHandler("bw")}
                  style={{ width: "100%" }}
                >
                  Blackjack
                </button>
              </div>
              <div
                style={{
                  width: "33%",
                }}
              >
                <h3 style={{ margin: 0 }}> +2 </h3>
                <button
                className="btn btn-lbl"
                  onClick={() => outHandler("dw")}
                  style={{ width: "100%" }}
                >
                  Double Down: Win{" "}
                </button>
                <button
                className="btn btn-lbl"
                  onClick={() => outHandler("sww")}
                  style={{ width: "100%" }}
                >
                  Split: Win-Win{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}
