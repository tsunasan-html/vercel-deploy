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
    { price: 10000, label: "10,000円" },
    { price: 20000, label: "20,000円" },
    { price: 30000, label: "30,000円" },
    { price: 40000, label: "40,000円" },
    { price: 50000, label: "50,000円" },
  ];

  return (
    <section id="skincare01Display">
      <form action="/" method="get">
        <div className="courseList">
          <table className="paymentTable skincare" border="1">
            <tbody>
              <tr>
                <td className="gold" rowSpan="2">スキンケア</td>
                <td className="sample-td" colSpan="6">回数</td>
              </tr>

              <tr>
               
                <th className="grey_under">1回</th>
                <th className="grey_under">3回コース</th>
                <th className="grey_under">6回コース</th>
                <th className="grey_under">12回コース</th>
                <th className="grey_under">18回コース</th>
              </tr>
              <tr>
              <td rowSpan="2" className="grey05">3部位</td>
                {skincareItems.map((item, index) => (
                  <td key={index} className="checkData center_price">
                    <input
                      type="checkbox"
                      id={`skincare-checkbox-${item.price}`}
                      className="allPrice skincare01"
                      data-price={item.price}
                      onChange={(e) => handleCheckboxChange(e, item.price)}
                      checked={checkedItems === item.price}
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
                <td className="under_text"><small>-</small></td>
                <td className="under_text"><small>6,666円</small></td>
                <td className="under_text"><small>5,000円</small></td>
                <td className="under_text"><small>3,333円</small></td>
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
