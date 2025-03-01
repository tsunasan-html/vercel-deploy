import React from 'react';

const TotalPrice = ({ datsumoTotal, skincareTotal, grandTotal, resetDatsumoTotal, resetSkincareTotal }) => {
  const formatPrice = (price) => new Intl.NumberFormat().format(price);

  return (
    <div>
      <div className="resultBox">
        <table className="totalTable">
          <tbody>
            <tr className="border_allprice">
              <th>総合計</th>
            </tr>
            <tr>
              <td className="yen"><span id="totalPrice">{formatPrice(grandTotal)}円</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="accordion_one" style={{ border: "1px solid #707070", margin: "1.2rem .8rem" }}>
        <div className="flex_dis bgcDis1">
          <div className="childDis">脱毛</div>
          <div className="childDis">
            <span className="datsumoAll">{formatPrice(datsumoTotal)}</span>
            <span className="yen">円</span>
          </div>
          <div className="childDis">
            <button onClick={resetDatsumoTotal}>
               Reset
            </button>
          </div>
          
        </div>
        <div className="flex_dis bgcDis1">
          <div className="childDis">スキンケア</div>
          <div className="childDis">
            <span className="skincareAll">{formatPrice(skincareTotal)}</span>
            <span className="yen">円</span>
          </div>
          <div className="childDis">
            <button onClick={resetSkincareTotal}>
                Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalPrice;
