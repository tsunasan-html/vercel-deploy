import React from "react";

const TopBtn = ({ onClickButton, activeButton }) => {
  return (
    <div className="topBtnArea">
      <button
        className="firstBtn"
        onClick={() => onClickButton(1)}
        id="btn1"
        style={{ backgroundColor: activeButton === 1 ? "#F4F4F4" : "#7d7b7b" , margin: "0 .3rem", width: "140px"}}
      >
        脱毛
      </button>
      <button
        className="firstBtn"
        onClick={() => onClickButton(2)}
        id="btn2"
        style={{ backgroundColor: activeButton === 2 ? "#F4F4F4" : "#7d7b7b" , margin: "0 .3rem", width: "140px"}}
      >
        スキンケア
      </button>
      <button
        className="firstBtn"
        onClick={() => onClickButton(3)}
        id="btn3"
        style={{ backgroundColor: activeButton === 3 ? "#F4F4F4" : "#7d7b7b" , margin: "0 .3rem", width: "140px"}}
      >
        ＡＧＡ
      </button>
    </div>
  );
};

export default TopBtn;
