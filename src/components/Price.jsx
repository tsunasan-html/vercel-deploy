import React, { useState, useEffect } from 'react';

const CheckboxPrice = ({ id, price }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  useEffect(() => {
    const coursePriceElement = document.getElementById(id);
    if (coursePriceElement && price) {
      coursePriceElement.textContent = `${Number(price).toLocaleString()}円`;
    }
  }, [price]);

  return (
    <div className="checkData">
      <input
        type="checkbox"
        id={id}
        data-price={price}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span id={id} className="coursePrice"></span>
    </div>
  );
};

export default CheckboxPrice;
