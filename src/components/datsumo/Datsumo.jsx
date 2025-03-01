import React, { useEffect } from 'react';
import usePrice from '../../hooks/UsePrice';

const priceItems = [
  { price: 10000, label: "1,000円" },
  { price: 20000, label: "2,000円" },
  { price: 30000, label: "3,000円" },
  { price: 40000, label: "4,000円" },
  { price: 50000, label: "5,000円" },
  { price: 60000, label: "6,000円" }
];

const Datsumo = ({ onTotalPriceChange, resetDatsumo }) => {
  const { totalPrice, checkedItems, handleCheckboxChange, resetPrice } = usePrice();

  // リセットフラグがtrueなら内部状態をリセット
  useEffect(() => {
    if (resetDatsumo) {
      resetPrice();
    }
  }, [resetDatsumo, resetPrice]);

  // 内部のtotalPriceが変わるたびに親に通知
  useEffect(() => {
    onTotalPriceChange(totalPrice);
  }, [totalPrice, onTotalPriceChange]);

  return (
    <div id="area1">
      <form className="tableMarginClass" action="/" method="get">
        <div className="courseList">
          <table className="paymentTable" border="1">
            <tbody>
              <tr>
                <td className="gold" rowSpan="2">平日 脱毛</td>
                <td className="sample-td" colSpan="6">回数</td>
              </tr>
              <tr>
                <th className="grey_under">1回</th>
                <th className="grey_under">3回</th>
                <th className="grey_under">6回</th>
                <th className="grey_under">12回</th>
                <th className="grey_under">18回</th>
                <th className="grey_under">24回</th>
              </tr>
              <tr>
                <td rowSpan="2" className="grey05">3部位</td>
                {priceItems.map((item, index) => (
                  <td key={index} className="checkData center_price">
                    <input
                      type="checkbox"
                      id={`checkbox-${item.price}`}
                      className="allPrice datsumoAll datsumo01"
                      data-price={item.price}
                      onChange={(e) => handleCheckboxChange(e, item.price)}
                      checked={checkedItems === item.price}
                      style={{ display: 'none' }}
                    />
                    <label
                      htmlFor={`checkbox-${item.price}`}
                      className={checkedItems === item.price ? 'selected' : ''}
                    >
                      <span className="coursePrice">{item.label}</span>
                    </label>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="under_text"><small>1,000円</small></td>
                <td className="under_text"><small>2,000円</small></td>
                <td className="under_text"><small>3,000円</small></td>
                <td className="under_text"><small>4,000円</small></td>
                <td className="under_text"><small>5,000円</small></td>
                <td className="under_text"><small>6,000円</small></td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
};

export default Datsumo;
