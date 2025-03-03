import React, { useState, useEffect } from 'react';

const TotalPrice = ({
  datsumoTotal,
  skincareTotal,
  agaTotal,
  resetDatsumoTotal,
  resetSkincareTotal,
  resetAgaTotal
}) => {
  const [paymentTimes, setPaymentTimes] = useState(''); 
  const [datsumoDivisionTotal, setDatsumoDivisionTotal] = useState(datsumoTotal); 
  const [skincareDivisionTotal, setSkincareDivisionTotal] = useState(skincareTotal); 
  const [agaDivisionTotal, setAgaDivisionTotal] = useState(agaTotal);

  const formatPrice = (price) => new Intl.NumberFormat().format(price);

  // 支払回数の変更ハンドラ
  const handlePaymentTimesChange = (e) => {
    const selectedPaymentTimes = e.target.value;
    setPaymentTimes(selectedPaymentTimes);
  };

  const f = (i, h) => {
    return Math.floor((i * 100 * h * 100) / (100 * 100));
  };

  const g = (i, h) => {
    return (i * 100) / (h * 100);
  };

  useEffect(() => {
    const rate = {
      1: 0,
      3: 1.09,
      6: 1.9,
      12: 3.56,
      18: 5.22,
      24: 6.91,
      36: 10.34,
      48: 13.83,
      60: 17.04,
      84: 24.74,
    };

    let updatedDatsumoDivisionTotal = datsumoTotal;
    if (paymentTimes !== '') {
      const priceSum = datsumoTotal;
      const rateValue = rate[paymentTimes] || 0;

      let o = f(priceSum, 1); 
      const m = f(o, g(rateValue, 100)); 
      const h = o + m; 
      let k = g(h, paymentTimes);
      let finalPrice = Math.floor(g(k, 100)) * 100;

      if (paymentTimes === '1') {
        finalPrice = k;
      }

      updatedDatsumoDivisionTotal = finalPrice;
    }

    let updatedSkincareDivisionTotal = skincareTotal;
    if (paymentTimes !== '') {
      const priceSum = skincareTotal;
      const rateValue = rate[paymentTimes] || 0;

      let o = f(priceSum, 1); 
      const m = f(o, g(rateValue, 100)); 
      const h = o + m; 
      let k = g(h, paymentTimes);
      let finalPrice = Math.floor(g(k, 100)) * 100;

      if (paymentTimes === '1') {
        finalPrice = k;
      }

      updatedSkincareDivisionTotal = finalPrice;
    }

    let updatedAgaDivisionTotal = agaTotal;
    if (paymentTimes !== '') {
      const priceSum = agaTotal;
      const rateValue = rate[paymentTimes] || 0;

      let o = f(priceSum, 1); 
      const m = f(o, g(rateValue, 100)); 
      const h = o + m; 
      let k = g(h, paymentTimes);
      let finalPrice = Math.floor(g(k, 100)) * 100;

      if (paymentTimes === '1') {
        finalPrice = k;
      }

      updatedAgaDivisionTotal = finalPrice;
    }

    setDatsumoDivisionTotal(updatedDatsumoDivisionTotal);
    setSkincareDivisionTotal(updatedSkincareDivisionTotal);
    setAgaDivisionTotal(updatedAgaDivisionTotal);
  }, [paymentTimes, datsumoTotal, skincareTotal, agaTotal]);

  const handleResetDatsumoTotal = () => {
    resetDatsumoTotal();
    setPaymentTimes(''); 
  };

  const handleResetSkincareTotal = () => {
    resetSkincareTotal();
    setPaymentTimes(''); 
  };

  const handleResetAgaTotal = () => {
    resetAgaTotal();
    setPaymentTimes(''); 
  };

  return (
    <div>
      <div className="resultBox">
        <table className="totalTable">
          <tbody>
            <tr className="border_allprice">
              <th>総合計</th>
            </tr>
            <tr>
              <td className="yen">
                <span id="totalPrice">{formatPrice(datsumoTotal + skincareTotal + agaTotal)}円</span>
              </td>
            </tr>
          </tbody>
        </table>
        <table style={{ borderTop: 'none' }}>
          <tbody>
            <tr>
              <th className="total_price contents1">
                <span className="font_Righttext">支払回数</span>
                <br />
                <select value={paymentTimes} onChange={handlePaymentTimesChange}>
                  <option value="1">1回</option>
                  <option value="3">3回</option>
                  <option value="6">6回</option>
                  <option value="12">12回</option>
                  <option value="18">18回</option>
                  <option value="24">24回</option>
                  <option value="36">36回</option>
                  <option value="48">48回</option>
                  <option value="60">60回</option>
                  <option value="84">84回</option>
                </select>
              </th>
              <th className="total_price">
                <span className="font_Righttext">分割料金</span>
                <br />
                <span className="divisionTotal">
                  {formatPrice(datsumoDivisionTotal + skincareDivisionTotal + agaDivisionTotal)}
                </span>
                <span className="yen">円</span>
              </th>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="accordion_one" style={{ border: '1px solid #707070', margin: '1.2rem .8rem' }}>
        <div className="flex_dis bgcDis1">
          <div className="childDis">脱毛</div>
          <div className="childDis">
            <span className="datsumoAll">{formatPrice(datsumoTotal)}</span>
            <span className="yen">円</span>
          </div>
          <div className="childDis">
            <button onClick={handleResetDatsumoTotal}>Reset</button>
          </div>
        </div>

        <div className="flex_dis bgcDis1">
          <div className="childDis">スキンケア</div>
          <div className="childDis">
            <span className="skincareAll">{formatPrice(skincareTotal)}</span>
            <span className="yen">円</span>
          </div>
          <div className="childDis">
            <button onClick={handleResetSkincareTotal}>Reset</button>
          </div>
        </div>

        <div className="flex_dis bgcDis1">
          <div className="childDis">AGA</div>
          <div className="childDis">
            <span className="agaAll">{formatPrice(agaTotal)}</span>
            <span className="yen">円</span>
          </div>
          <div className="childDis">
            <button onClick={handleResetAgaTotal}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalPrice;
