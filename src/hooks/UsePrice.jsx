import { useState, useCallback } from 'react';

const usePrice = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkedItems, setCheckedItems] = useState(null); 

  const handleCheckboxChange = (e, price) => {
    if (e.target.checked) {
      setCheckedItems(price);
      setTotalPrice(price);
    } else {
      setCheckedItems(null);
      setTotalPrice(0);
    }
  };

  // 内部状態をリセットする関数
  const resetPrice = useCallback(() => {
    setCheckedItems(null);
    setTotalPrice(0);
  }, []);

  return {
    totalPrice,
    checkedItems,
    handleCheckboxChange,
    resetPrice
  };
};

export default usePrice;
