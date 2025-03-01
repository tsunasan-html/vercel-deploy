import React, { useState } from "react";
import HeadComponent from "./components/Head";
import TopBtn from "./components/TopBtn";
import Datsumo from "./components/datsumo/Datsumo"; 
import Skincare from "./components/skincare/Skincare"; 
import TotalPrice from "./components/TotalPrice"; 

import "./app.css"; 

const App = () => {
  const [selectedAreas, setSelectedAreas] = useState([1]);  // 初期選択エリア
  const [datsumoTotal, setDatsumoTotal] = useState(0); 
  const [skincareTotal, setSkincareTotal] = useState(0); 

  // Datsumoの合計を更新
  const onDatsumoTotalChange = (newTotalPrice) => {
    setDatsumoTotal(newTotalPrice);
  };

  // Skincareの合計を更新
  const onSkincareTotalChange = (newTotalPrice) => {
    setSkincareTotal(newTotalPrice);
  };

  // 総合計 (脱毛 + スキンケア)
  const grandTotal = datsumoTotal + skincareTotal;

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
                <Datsumo onTotalPriceChange={onDatsumoTotalChange} />
              </div>
            )}
            {selectedAreas.includes(2) && (
              <div id="area2">
                <Skincare onTotalPriceChange={onSkincareTotalChange} />
              </div>
            )}
          </div>
          <div className="flex2">
            <TotalPrice 
              datsumoTotal={datsumoTotal} 
              skincareTotal={skincareTotal} 
              grandTotal={grandTotal} 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
