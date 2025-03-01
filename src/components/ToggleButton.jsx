import React, { useState } from 'react';

const ToggleButton = () => {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonNum) => {
    setSelectedButton(buttonNum);
  };

  return (
    <div>
      <button
        id="btn1"
        className={`firstBtn ${selectedButton === 1 ? 'topBtn_selected' : 'topBtn_hidden'}`}
        onClick={() => handleButtonClick(1)}
      >
        ボタン 1
      </button>
      <button
        id="btn2"
        className={`firstBtn ${selectedButton === 2 ? 'topBtn_selected' : 'topBtn_hidden'}`}
        onClick={() => handleButtonClick(2)}
      >
        ボタン 2
      </button>
      <button
        id="btn3"
        className={`firstBtn ${selectedButton === 3 ? 'topBtn_selected' : 'topBtn_hidden'}`}
        onClick={() => handleButtonClick(3)}
      >
        ボタン 3
      </button>

      {/* 表示するエリア */}
      <div
        id="area1"
        className={selectedButton === 1 ? 'topBtn_selected' : 'topBtn_hidden'}
      >
        エリア 1
      </div>
      <div
        id="area2"
        className={selectedButton === 2 ? 'topBtn_selected' : 'topBtn_hidden'}
      >
        エリア 2
      </div>
      <div
        id="area3"
        className={selectedButton === 3 ? 'topBtn_selected' : 'topBtn_hidden'}
      >
        エリア 3
      </div>
    </div>
  );
};

export default ToggleButton;
