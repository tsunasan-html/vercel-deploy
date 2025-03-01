import React from "react";

const TopBtn = ({ onClickButton }) => {
  return (
    <div className="topBtnArea">
      <button className="firstBtn" onClick={() => onClickButton(1)} id="btn1">脱毛</button>
      <button className="firstBtn" onClick={() => onClickButton(2)} id="btn2">スキンケア</button>
      <button className="firstBtn" onClick={() => onClickButton(4)} id="btn4">ＡＧＡ</button>
      {/* <button className="firstBtn" onClick={() => onClickButton(5)} id="btn5">ダイエット</button>
      <button className="firstBtn" onClick={() => onClickButton(6)} id="btn6">わきが・多汗症</button>
      <button className="firstBtn" onClick={() => onClickButton(3)} id="btn3">コスメティクス</button>
      <button className="firstBtn" onClick={() => onClickButton(8)} id="btn8">ホームケア</button>
      <button className="firstBtn" onClick={() => onClickButton(7)} id="btn7">CP</button> */}
    </div>
  );
};

export default TopBtn;
