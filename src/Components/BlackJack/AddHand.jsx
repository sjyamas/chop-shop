import React, { useState } from "react";
import CustomButton from "../../Global/CustomButton";
import Switch from "../../Global/Switch/Switch";
import './styles.css'

function Bet({ bet, setBet }) {
  function handleBet(cbet) {
    setBet((a) => a + cbet);
    //todo: prevent nevative bets
  }

  return (
    <div
      style={{
        backgroundColor: "rgb(100, 100, 100)",
        flexDirection: "row",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        borderRadius: 8,
        // width: "80%",
        justifyContent: "center",
        // display: "inline-block",
      }}
    >
      <CustomButton
        onClick={() => {
          handleBet(-1000);
        }}
        style={{
          backgroundColor: "rgb(100, 100, 100)",
        }}
      >
        <h2 style={{ margin: 0 }}> ◄ 1K </h2>
      </CustomButton>
      <CustomButton
        onClick={() => {
          handleBet(-100);
        }}
      >
        <h2 style={{ margin: 0 }}> ◄ 100 </h2>
      </CustomButton>
      <CustomButton
        onClick={() => {
          handleBet(-50);
        }}
      >
        <h2 style={{ margin: 0 }}> ◄ 50 </h2>
      </CustomButton>
      <div
        style={{
          // display: "inline-block",
          width: 100,
          // backgroundColor: "rgb(100, 100, 100)",
        }}
      >
        {/* <h2 style={{ margin: 0 }}> ${bet} </h2> */}
        <input class="styled-input" type='text' onChange={(i)=>{setBet(Number(i.target.value))}} placeholder={bet} size='5' />
      </div>
      <CustomButton
        onClick={() => {
          handleBet(50);
        }}
      >
        <h2 style={{ margin: 0 }}> 50 ► </h2>
      </CustomButton>
      <CustomButton
        onClick={() => {
          handleBet(100);
        }}
      >
        <h2 style={{ margin: 0 }}> 100 ► </h2>
      </CustomButton>
      <CustomButton
        onClick={() => {
          handleBet(1000);
        }}
      >
        <h2 style={{ margin: 0 }}> 1K ► </h2>
      </CustomButton>
      <div style={{ paddingLeft: 20 }} />
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
      {/* <CustomButton
        onClick={() => {
          setBet(10000);
        }}
      >
        <h2 style={{ margin: 0 }}> 10K </h2>
      </CustomButton> */}
      <CustomButton
        onClick={() => {
          setBet(15000);
        }}
      >
        <h2 style={{ margin: 0 }}> 15K </h2>
      </CustomButton>
      {/* <div style={{ paddingRight: 10 }} /> */}
    </div>
  );
}

function Footer({ children, height }) {
  var style = {
    backgroundColor: "rgba(50,50,55, 1)",
    // borderTop: "1px solid #67E7E7",
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
          {/* <h3 style={{ margin: 4 }}> EDITOR </h3> */}
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
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "50%",
                }}
              >
                <h3 style={{ margin: 0 }}> -2 </h3>
                <CustomButton
                  onClick={() => outHandler("dl")}
                  style={{ width: "100%" }}
                >
                  Double Down: Loss
                </CustomButton>
                <CustomButton
                  onClick={() => outHandler("sll")}
                  style={{ width: "100%" }}
                >
                  Split: Loss-Loss
                </CustomButton>
              </div>
              <div
                style={{
                  width: "50%",
                }}
              >
                <h3 style={{ margin: 0 }}> -1 </h3>
                <CustomButton
                  onClick={() => outHandler("l")}
                  bgcolor="rgb(40,30,30)"
                  style={{ width: "100%" }}
                >
                  Loss
                </CustomButton>
                <CustomButton
                  onClick={() => outHandler("bl")}
                  style={{ width: "100%" }}
                >
                  Loss (Dealer Blackjack)
                </CustomButton>
                <CustomButton
                  onClick={() => outHandler("slp")}
                  style={{ width: "100%" }}
                >
                  Split: Loss-Push
                </CustomButton>
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
              <CustomButton
                onClick={() => outHandler("p")}
                bgcolor="rgb(30,30,30)"
                style={{ width: "100%" }}
              >
                Push
              </CustomButton>
              <CustomButton
                onClick={() => outHandler("dp")}
                // bgcolor="rgb(30,30,30)"
                style={{ width: "100%" }}
              >
                Double Down: Push
              </CustomButton>
              <CustomButton
                onClick={() => outHandler("swl")}
                style={{ width: "100%" }}
              >
                Split: Win-Loss
              </CustomButton>
              <CustomButton
                onClick={() => outHandler("spp")}
                style={{ width: "100%" }}
              >
                Split: Push-Push
              </CustomButton>
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
                <CustomButton
                  onClick={() => outHandler("w")}
                  bgcolor="rgb(30,40,30)"
                  style={{ width: "100%" }}
                >
                  Win
                </CustomButton>
                <CustomButton
                  onClick={() => outHandler("swp")}
                  style={{ width: "100%" }}
                >
                  Split: Win-Push
                </CustomButton>
              </div>
              <div
                style={{
                  width: "33%",
                }}
              >
                <h3 style={{ margin: 0 }}> +1.5 </h3>
                <CustomButton
                  onClick={() => outHandler("bw")}
                  style={{ width: "100%" }}
                >
                  Blackjack
                </CustomButton>
              </div>
              <div
                style={{
                  width: "33%",
                }}
              >
                <h3 style={{ margin: 0 }}> +2 </h3>
                <CustomButton
                  onClick={() => outHandler("dw")}
                  style={{ width: "100%" }}
                >
                  Double Down: Win{" "}
                </CustomButton>
                <CustomButton
                  onClick={() => outHandler("sww")}
                  style={{ width: "100%" }}
                >
                  Split: Win-Win{" "}
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}
