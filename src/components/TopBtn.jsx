import React from "react";

const TopBtn = ({ onClickButton, activeButtons }) => {
  return (
    <div className="topBtnArea">
      <button
        className="firstBtn"
        onClick={() => onClickButton(1)}
        id="btn1"
        style={{
          backgroundColor: activeButtons.includes(1) ? "#fff" : "#7d7b7b",
          color: activeButtons.includes(1) ? "#C75656" : "#fff",
          margin: "0 .3rem",
          width: "140px"
        }}
      >
        脱毛
      </button>
      <button
        className="firstBtn"
        onClick={() => onClickButton(2)}
        id="btn2"
        style={{
          backgroundColor: activeButtons.includes(2) ? "#fff" : "#7d7b7b",
          color: activeButtons.includes(2) ? "#C75656" : "#fff",
          margin: "0 .3rem",
          width: "140px"
        }}
      >
        スキンケア
      </button>
      <button
        className="firstBtn"
        onClick={() => onClickButton(3)}
        id="btn3"
        style={{
          backgroundColor: activeButtons.includes(3) ? "#fff" : "#7d7b7b",
          color: activeButtons.includes(3) ? "#C75656" : "#fff",
          margin: "0 .3rem",
          width: "140px"
        }}
      >
        ＡＧＡ
      </button>
    </div>
  );
};

export default TopBtn;
