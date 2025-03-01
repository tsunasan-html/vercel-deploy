import React, { useState, useEffect } from 'react';
import usePrice from '../../hooks/UsePrice';

const Skincare = ({ onTotalPriceChange }) => {
  const { totalPrice, checkedItems, handleCheckboxChange } = usePrice();

  useEffect(() => {
    onTotalPriceChange(totalPrice);  // totalPriceを親に渡す
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
              <tr className="skincare01__tr">
                <td className="gold gold__skincare" rowSpan="" colSpan="4">スキンケア 平日</td>
                <th className="grey_under">1回</th>
                <th className="grey_under">3回コース</th>
                <th className="grey_under">6回コース</th>
                <th className="grey_under">12回コース</th>
                <th className="grey_under">18回コース</th>
              </tr>
              <tr>
                <td rowSpan="2" colSpan="4" className="grey05">
                  <span className="Block05">ハイドラ毛穴洗浄</span>
                </td>
                {skincareItems.map((item, index) => (
                  <td key={index} className="checkData center_price">
                    <input
                      type="checkbox"
                      id={`skincare-checkbox-${item.price}`}
                      className="allPrice skincare01 skincare_ClickGroup101"
                      data-price={item.price}
                      onChange={(e) => handleCheckboxChange(e, item.price)}  
                      style={{ display: 'none' }}
                    />
                    <label
                      htmlFor={`skincare-checkbox-${item.price}`}
                      className={checkedItems.includes(item.price) ? 'selected' : ''} 
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
      
      {/* 合計金額の表示部分 */}
      {/* <div className="total-price">
        <h3>合計金額: {totalPrice.toLocaleString()}円</h3>
      </div> */}
    </section>
  );
};

export default Skincare;
