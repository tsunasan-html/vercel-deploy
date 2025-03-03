import React, { useState, useEffect } from "react";
import HeadComponent from "./components/Head";
import TopBtn from "./components/TopBtn";
import Datsumo from "./components/datsumo/Datsumo"; 
import Skincare from "./components/skincare/Skincare"; 
import Aga from "./components/aga/Aga";
import TotalPrice from "./components/TotalPrice"; 
import Login from "./components/Login"; 

import "./App.css"; 

const App = () => {
  const [datsumoTotal, setDatsumoTotal] = useState(0);
  const [skincareTotal, setSkincareTotal] = useState(0);
  const [agaTotal, setAgaTotal] = useState(0);
  const [activeButtons, setActiveButtons] = useState([1]);
  const [resetDatsumo, setResetDatsumo] = useState(false);
  const [resetSkincare, setResetSkincare] = useState(false);
  const [resetAga, setResetAga] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

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

  useEffect(() => {
    setActiveButtons([1]); 
  }, []);

  const toggleVisibility = (areaNumber) => {
    setActiveButtons((prevActiveButtons) => {
      if (prevActiveButtons.includes(areaNumber)) {
        const updatedButtons = prevActiveButtons.filter((button) => button !== areaNumber);
        
        if (areaNumber === 1) setDatsumoTotal(0); 
        if (areaNumber === 2) setSkincareTotal(0);
        if (areaNumber === 3) setAgaTotal(0);
        
        return updatedButtons;
      } else {
        return [...prevActiveButtons, areaNumber];
      }
    });
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

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); 
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false); 
  };

  return (
    <>
      <HeadComponent />
      <div>
        {isLoggedIn ? (
          <>
          <div className="inTable">
            <TopBtn onClickButton={toggleVisibility} activeButtons={activeButtons} />
            <p style={{ marginLeft: "0.8rem" }}>
              ※料金は全て架空のものとなります。
            </p>
            <div className="flex_main">
              <div className="flex1">
                {activeButtons.includes(1) && (
                  <div id="area1">
                    <Datsumo onTotalPriceChange={onDatsumoTotalChange} resetDatsumo={resetDatsumo} />
                  </div>
                )}

                {activeButtons.includes(2) && (
                  <div id="area2">
                    <Skincare onTotalPriceChange={onSkincareTotalChange} resetSkincare={resetSkincare} />
                  </div>
                )}

                {activeButtons.includes(3) && (
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
                <div style={{ margin: '1.2rem 0.8rem', textAlign: 'right' }}>
                  <button onClick={handleLogout} style={{ padding: '10px' }}>
                    Logout
                  </button>
                </div>
              </div>
            </div>

          </div>
          </>
        ) : (
          <Login onLoginSuccess={handleLoginSuccess} /> 
        )}
      </div>
    </>
  );
};

export default App;
