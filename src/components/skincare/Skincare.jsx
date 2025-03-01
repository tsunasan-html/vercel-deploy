import React, { useEffect } from 'react';
import usePrice from '../../hooks/UsePrice';

const Skincare = ({ onTotalPriceChange, resetSkincare }) => {
  const { totalPrice, checkedItems, handleCheckboxChange, resetPrice } = usePrice();

  useEffect(() => {
    if (resetSkincare) {
      resetPrice();
    }
  }, [resetSkincare, resetPrice]);

  useEffect(() => {
    onTotalPriceChange(totalPrice);
  }, [totalPrice, onTotalPriceChange]);

  const skincareItems = [
    { price: 10000, label: "1,000円" },
    { price: 20000, label: "2,000円" },
    { price: 30000, label: "3,000円" },
    { price: 40000, label: "4,000円" },
    { price: 50000, label: "5,000円" }
  ];

  return (
    <section id="skincare01Display">
      <form action="/" method="get">
        <div className="courseList">
          <table className="paymentTable skincare" border="1">
            <tbody>
              <tr>
                <td className="gold"  colSpan="4" rowSpan="2">スキンケア</td>
                <td className="sample-td" colSpan="6">回数</td>
              </tr>
              <tr className="skincare01__tr">
               
                <th className="grey_under">1回</th>
                <th className="grey_under">3回コース</th>
                <th className="grey_under">6回コース</th>
                <th className="grey_under">12回コース</th>
                <th className="grey_under">18回コース</th>
              </tr>
              <tr>
                <td colSpan="4" rowSpan="2" className="grey05">
                  <span className="Block05">ハイドラ毛穴洗浄</span>
                </td>
                {skincareItems.map((item, index) => (
                  <td key={index} className="checkData center_price">
                    <input
                      type="checkbox"
                      id={`skincare-checkbox-${item.price}`}
                      className="allPrice skincare01"
                      data-price={item.price}
                      onChange={(e) => handleCheckboxChange(e, item.price)}
                      checked={checkedItems === item.price}
                      style={{ display: 'none' }}
                    />
                    <label
                      htmlFor={`skincare-checkbox-${item.price}`}
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
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </section>
  );
};

export default Skincare;
