import React, { useState, useEffect } from "react";
import HeadComponent from "./components/Head";
import TopBtn from "./components/TopBtn";
import Datsumo from "./components/datsumo/Datsumo"; 
import Skincare from "./components/skincare/Skincare"; 
import Aga from "./components/aga/Aga";
import TotalPrice from "./components/TotalPrice"; 

import "./App.css"; 

const App = () => {
  const [selectedArea, setSelectedArea] = useState(1);
  const [datsumoTotal, setDatsumoTotal] = useState(0);
  const [skincareTotal, setSkincareTotal] = useState(0);
  const [agaTotal, setAgaTotal] = useState(0);
  const [activeButton, setActiveButton] = useState(1);

  const [resetDatsumo, setResetDatsumo] = useState(false);
  const [resetSkincare, setResetSkincare] = useState(false);
  const [resetAga, setResetAga] = useState(false);

  const onDatsumoTotalChange = (newTotalPrice) => {
    setDatsumoTotal(newTotalPrice);
  };

  const onSkincareTotalChange = (newTotalPrice) => {
    setSkincareTotal(newTotalPrice);
  };

  const onAgaTotalChange = (newTotalPrice) => {
    setAgaTotal(newTotalPrice);
  };

  const grandTotal = datsumoTotal + skincareTotal + agaTotal;

  const toggleVisibility = (areaNumber) => {
    setSelectedArea(areaNumber);
    setActiveButton(areaNumber);
  };

  const resetDatsumoTotal = () => {
    setDatsumoTotal(0);
    setResetDatsumo(true);
    setTimeout(() => setResetDatsumo(false), 0);
  };

  const resetSkincareTotal = () => {
    setSkincareTotal(0);
    setResetSkincare(true);
    setTimeout(() => setResetSkincare(false), 0);
  };

  const resetAgaTotal = () => {
    setAgaTotal(0);
    setResetAga(true);
    setTimeout(() => setResetAga(false), 0);
  };


  return (
    <>
      <HeadComponent />
      <div>
        <TopBtn onClickButton={toggleVisibility} activeButton={activeButton} />
        <p style={{ marginLeft: "0.8rem" }}>
          ※料金は全て架空のものとなります。
        </p>
        <div className="flex_main">
          <div className="flex1">
            {selectedArea === 1 && (
              <div id="area1">
                <Datsumo onTotalPriceChange={onDatsumoTotalChange} resetDatsumo={resetDatsumo} />
              </div>
            )}
            {selectedArea === 2 && (
              <div id="area2">
                <Skincare onTotalPriceChange={onSkincareTotalChange} resetSkincare={resetSkincare} />
              </div>
            )}
              {selectedArea === 3 && (
                <div id="area3">
                  <Aga onTotalPriceChange={onAgaTotalChange} resetAga={resetAga} />
                </div>
              )}
          </div>
          <div className="flex2">
            <TotalPrice
              datsumoTotal={datsumoTotal}
              skincareTotal={skincareTotal}
              agaTotal={agaTotal}
              grandTotal={grandTotal}
              resetDatsumoTotal={resetDatsumoTotal}
              resetSkincareTotal={resetSkincareTotal}
              resetAgaTotal={resetAgaTotal}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
