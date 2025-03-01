import React, { useState, useEffect } from 'react';

const TotalPrice = ({ datsumoTotal, skincareTotal, resetDatsumoTotal, resetSkincareTotal }) => {
  const [paymentTimes, setPaymentTimes] = useState(''); // 初期値を空に設定
  const [divisionTotal, setDivisionTotal] = useState(datsumoTotal); // 初期値はdatsumoTotalで開始

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

  // divisionTotalの更新
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

    let updatedDivisionTotal = datsumoTotal;

    if (paymentTimes !== '') {
      const priceSum = datsumoTotal;
      const rateValue = rate[paymentTimes] || 0;

      let o = f(priceSum, 1); // oはfで調整された価格
      const m = f(o, g(rateValue, 100)); // 利率を掛けてさらに調整
      const h = o + m; // 基本価格 + 追加料金
      let k = g(h, paymentTimes); // 支払回数で調整
      let finalPrice = Math.floor(g(k, 100)) * 100; // 最終的に100で丸める

      if (paymentTimes === '1') {
        finalPrice = k;
      }

      updatedDivisionTotal = finalPrice;
    }

    setDivisionTotal(updatedDivisionTotal);
  }, [paymentTimes, datsumoTotal]);

  // リセットボタンがクリックされたときの処理
  const handleResetDatsumoTotal = () => {
    resetDatsumoTotal();
    setPaymentTimes(''); // 支払回数を初期化
  };

  const handleResetSkincareTotal = () => {
    resetSkincareTotal();
    setPaymentTimes(''); // 支払回数を初期化
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
              <td className="yen"><span id="totalPrice">{formatPrice(datsumoTotal + skincareTotal)}円</span></td>
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
                <span className="divisionTotal">{formatPrice(divisionTotal)}</span>
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
      </div>
    </div>
  );
};

export default TotalPrice;
