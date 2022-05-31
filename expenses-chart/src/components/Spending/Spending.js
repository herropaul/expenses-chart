import React from "react";
import "./Spending.css";

const Spending = () => {
  return (
    <div className="spending-container">
      <div>
        <h2>Spending - Last 7 Days</h2>
      </div>
      <div className="graph-container">
        <div className="bar" style={{ height: "25%" }} price="$17.45"></div>
        <div className="bar" style={{ height: "50%" }} price="$34.91"></div>
        <div
          className="bar blue"
          style={{ height: "80%" }}
          price="$52.36"
        ></div>
        <div className="bar" style={{ height: "45%" }} price="$31.07"></div>
        <div className="bar" style={{ height: "30%" }} price="$23.39"></div>
        <div className="bar" style={{ height: "60%" }} price="$43.28"></div>
        <div className="bar" style={{ height: "35%" }} price="$25.48"></div>
      </div>
      <div className="days-container">
        <p className="days">mon</p>
        <p className="days">tue</p>
        <p className="days">wed</p>
        <p className="days">thu</p>
        <p className="days">fri</p>
        <p className="days">sat</p>
        <p className="days">sun</p>
      </div>
      <hr />
      <div className="total-spending-container">
        <div className="total-month">
          <h3>Total Spending</h3>
          <h1>$478.33</h1>
        </div>
        <div className="from-last-month">
          <p>+2.4%</p>
          <p>from last month</p>
        </div>
      </div>
    </div>
  );
};

export default Spending;
