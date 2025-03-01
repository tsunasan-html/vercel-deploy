import React, { useState } from "react";
import HeadComponent from "./components/Head";
import TopBtn from "./components/TopBtn";
import Datsumo from "./components/datsumo/Datsumo"; 
import Skincare from "./components/skincare/Skincare"; 
import TotalPrice from "./components/TotalPrice"; 
import ParentComponent from "./components/ParentComponent"; 

import "./app.css"; 

const App = () => {
  const [selectedAreas, setSelectedAreas] = useState([1]);  // 初期選択エリア
  const [datsumoTotalPrice, setDatsumoTotalPrice] = useState(0);  // 脱毛の合計金額
  const [skincareTotalPrice, setSkincareTotalPrice] = useState(0);  // スキンケアの合計金額

  // 脱毛の合計金額を更新する関数
  const onDatsumoTotalPriceChange = (newTotalPrice) => {
    setDatsumoTotalPrice(newTotalPrice);
  };

  // スキンケアの合計金額を更新する関数
  const onSkincareTotalPriceChange = (newTotalPrice) => {
    setSkincareTotalPrice(newTotalPrice);
  };

  // 合計金額を計算する
  const totalPrice = datsumoTotalPrice + skincareTotalPrice;

  // エリアを表示するための関数
  const toggleVisibility = (areaNumber) => {
    setSelectedAreas((prevSelectedAreas) => {
      if (prevSelectedAreas.includes(areaNumber)) {
        return prevSelectedAreas.filter((area) => area !== areaNumber);
      } else {
        return [...prevSelectedAreas, areaNumber];
      }
    });
  };

  return (
    <>
      <HeadComponent />
      <div>
        <TopBtn onClickButton={toggleVisibility} />
        <p style={{ marginLeft: "0.8rem" }}>※料金は全て架空のものとなります。</p>
        
        <div className="flex_main">
          <div className="flex1">
            {selectedAreas.includes(1) && (
              <div id="area1">
                <Datsumo onTotalPriceChange={onDatsumoTotalPriceChange} />
              </div>
            )}
            {selectedAreas.includes(2) && (
              <div id="area2">
                <Skincare onTotalPriceChange={onSkincareTotalPriceChange} />
              </div>
            )}
          </div>
          <div className="flex2">
            <TotalPrice totalPrice={totalPrice} />
            <ParentComponent 
              datsumoTotalPrice={datsumoTotalPrice} 
              skincareTotalPrice={skincareTotalPrice}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
