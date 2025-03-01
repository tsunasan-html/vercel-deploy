
import { useState } from 'react';

const UsePrice = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (e, price) => {
    let updatedCheckedItems;
    if (e.target.checked) {
      updatedCheckedItems = [...checkedItems, price];
    } else {
      updatedCheckedItems = checkedItems.filter(item => item !== price);
    }
    setCheckedItems(updatedCheckedItems);
    setTotalPrice(updatedCheckedItems.reduce((acc, item) => acc + item, 0));
  };

  return {
    totalPrice,
    checkedItems,
    handleCheckboxChange
  };
};

export default UsePrice;