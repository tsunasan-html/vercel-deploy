import React, { useEffect } from 'react';
import usePrice from '../../hooks/UsePrice';

const Aga = ({ onTotalPriceChange, resetAga }) => {
  const { totalPrice, checkedItems, handleCheckboxChange, resetPrice } = usePrice();

  useEffect(() => {
    if (resetAga) {
      resetPrice();
    }
  }, [resetAga, resetPrice]);

  useEffect(() => {
    onTotalPriceChange(totalPrice);
  }, [totalPrice, onTotalPriceChange]);

  const agaItems = [
    { price: 10000, label: "10,000円" },
    { price: 20000, label: "20,000円" },
    { price: 30000, label: "30,000円" },
    { price: 40000, label: "40,000円" }
  ];

  return (
    <section id="aga01Display">
      <form action="/" method="get">
        <div className="courseList">
          <table className="paymentTable aga" border="1">
            <tbody>
              <tr>
                <th className="gold AGAPadding" rowSpan="2" colSpan="2">AGAセットコース</th>
                <td className="sample-td" colSpan="6">回数</td>
              </tr>
              <tr>
                <th className="grey_under">トライアル</th>
                <th className="grey_under">1か月</th>
                <th className="grey_under">6か月</th>
                <th className="grey_under">12か月</th>
              </tr>

              <tr>
                <td className="backWhiteAGA" rowSpan="6">STOP•STRONG<span className="Block05">維持の治療</span></td>
                <td className="secondAGA" rowSpan="2"><span>•フィナステリド内服薬<br />•ミノキシジル内服薬</span></td>

                {agaItems.map((item, index) => (
                  <td key={index} className="checkData center_price">
                    <input
                      type="checkbox"
                      id={`aga-checkbox-${item.price}`}
                      className="allPrice aga01"
                      data-price={item.price}
                      onChange={(e) => handleCheckboxChange(e, item.price)}
                      checked={checkedItems === item.price}
                      style={{ display: 'none' }}
                    />
                    <label
                      htmlFor={`aga-checkbox-${item.price}`}
                      className={checkedItems === item.price ? 'selected' : ''}
                    >
                      <span className="coursePrice">{item.label}</span>
                    </label>
                  </td>
                ))}
              </tr>
              <tr>
              <td className="under_text"><small>-</small></td>
                <td className="under_text"><small>6,666円</small></td>
                <td className="under_text"><small>5,000円</small></td>
                <td className="under_text"><small>3,333円</small></td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </section>
  );
};

export default Aga;
