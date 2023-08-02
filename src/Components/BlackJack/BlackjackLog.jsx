import React, { useState, useEffect } from "react";

import "../../Pages/App.css";
import "./Blackjacklog.css"
import HandsList from "./HandsList.jsx";

// import { testHands } from "../../Data/handsData.jsx";
// import CustomButton from "../../Global/CustomButton";
import AddHand from "./AddHand";
import Switch from "../../Global/Switch/Switch";

import {
  Link,
} from "react-router-dom";

export default function BlackjackLog() {
  const [footer, setFooter] = useState(true);
  const [handsData, setHandsData] = useState([

  ]);
  const [currentHand, setCurrentHand] = useState({ outBal: 0, pm: 0 });

  useEffect(() => {
    // localStorage.removeItem("handsData");
    const storedHands = localStorage.getItem("handsData");
    if (storedHands) {
      let sessions = JSON.parse(storedHands);
      setHandsData(sessions);
      console.log("sess", sessions);
      if (sessions.length > 0) {
        let lastHand = sessions[sessions.length - 1]["hands"].at(-1);
        console.log("gang gang", lastHand);
        if (lastHand) {
          setCurrentHand({ outBal: lastHand["outBal"], pm: lastHand["pm"] });
        }
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("handsData", JSON.stringify(handsData));
  }, [handsData]);

  const getLastSession = () => {
    if (handsData) {
      return handsData.at(-1);
    } else {
      alert("No sessions to delete");
    }
  };

  const addSession = (session) => {
    console.log("addSession");
    setHandsData([...handsData, session]);
    setCurrentHand({ outBal: 0, pm: 0 })
  };

  const removeSession = (id = getLastSession().sessionID) => {
    let tempSessions = handsData.filter((i) => i.sessionID !== id);
    setHandsData([...tempSessions]);
  };

  const addHand = (hand) => {
    console.log("addHand before", handsData);

    const newData = [...handsData];
    const index = newData.length - 1;
    const updatedObj = { ...newData[index] };

    updatedObj.hands.push(hand);

    newData[index] = updatedObj;
    setHandsData(newData);
  };

  const removeHand = () => {
    // let lastSession = handsData.at(-1);

    // if (lastSession.get("hands")) {
    //   let tempList = lastSession.get("hands");
    //   tempList.pop();
    //   lastSession["hands"] = tempList;
    //   setHandsData([...handsData.slice(0, -1), lastSession]);
    // }
    const newData = [...handsData];
    const index = newData.length - 1;
    const updatedObj = { ...newData[index] };
    updatedObj.hands.pop();
    newData[index] = updatedObj;
    setHandsData(newData);

    let lastHand = handsData[handsData.length - 1]["hands"].at(-1);

    console.log("gang gang", lastHand);
    if (lastHand) {
      setCurrentHand({ outBal: lastHand["outBal"], pm: lastHand["betPM"] });
    } else {
      setCurrentHand({ outBal: 0, pm: 0 });
    }
  };

  console.log("BEFORE LIST", handsData);

  const footerHeight = 410;

  return (
    <div
      className="bj-page-container"
    >
      {footer && (
        <AddHand
          height={footerHeight}
          addSession={addSession}
          removeSession={removeSession}
          addHand={addHand}
          removeHand={removeHand}
          currentHand={currentHand}
          setCurrentHand={setCurrentHand}
          handsData={handsData}
        />
      )}

      <div
        className="bj-header"
      >
        <div className="back-btn">

          <Link to="/" style={{ color: "white" }}>
            <button className="btn"> Home </button>
          </Link>

        </div>

        <div
          onClick={() => setFooter(!footer)} style={{ display: "flex", fontSize: 18 }}>
          <Switch
            isOn={footer}
            onColor="#EF476F"
          />
          <p>edit/create hand</p>
        </div>
      </div>

      <div
        style={{
          display: "inline-block",
        }}
      >
        {handsData
          .slice(0)
          .reverse()
          .map((value, index) => (
            <HandsList data={value} />
          ))}
      </div>
      <div
        style={{
          paddingBottom: footer ? footerHeight + 60 : 0,
        }}>

      </div>
    </div>
  );
}
