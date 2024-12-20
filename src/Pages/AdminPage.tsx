import { Link } from "react-router-dom";
import CustomButton from "../Global/CustomButton.js";

import bjchart from "../Assets/Images/bjchart.png";

import "./Pages.css";

export default function AdminPage() {
  return (
    <div className="App-header front-body">
      <div className="front-title">
        <h1 style={{ textAlign: "center" }}>Test Page</h1>
      </div>
      <hr style={{ width: "90%" }} />
      <div className="front-body">
        <div className="front-col padding-col">
          <CustomButton>
            <Link to="/" style={{ color: "white" }}>
              <h1> Home Page </h1>
            </Link>
          </CustomButton>
          <CustomButton>
            <Link to="/chop-shop" style={{ color: "white" }}>
              <h1> Chop Shop </h1>
            </Link>
          </CustomButton>
          <CustomButton>
            <Link to="/Blackjack-Log" style={{ color: "white" }}>
              <h1> Blackjack Log</h1>
            </Link>
          </CustomButton>
          <CustomButton>
            <Link to="/secret" style={{ color: "white" }}>
              <h1> Blackjack (test)</h1>
            </Link>
          </CustomButton>
          <CustomButton>
            <Link to="/chrono" style={{ color: "white" }}>
              <h1> Chrono </h1>
            </Link>
          </CustomButton>
          <CustomButton>
            <Link to="/traffic-light" style={{ color: "white" }}>
              <h1> Traffic Light </h1>
            </Link>
          </CustomButton>
          <CustomButton>
            <Link to="/portal-map" style={{ color: "white" }}>
              <h1> Portal Map </h1>
            </Link>
          </CustomButton>
        </div>
        <div className="front-col padding-col">
          <div>
            <h2 style={{ margin: 0 }}>MOTD:</h2>
            <h3 style={{ margin: 0, paddingBottom: 50 }}>Some message</h3>
          </div>
          <div className="front-col-text">
            <img
              src={bjchart}
              alt="BlackJack standard strategy chart"
              width="372"
              hight="526"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
