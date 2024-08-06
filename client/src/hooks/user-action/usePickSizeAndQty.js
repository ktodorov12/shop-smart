import { useState } from "react";

export default function usePickSizeAndQty() {
  const [pickedSize, setPickedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const changeQuantity = (e) => {
    const { value } = e.target;
    if (value < 1) {
      setQuantity(1);
      return;
    }

    setQuantity(value);
  };

  const handlePickSize = (e) => setPickedSize(e.target.textContent);

  return { handlePickSize, pickedSize, quantity, changeQuantity };
}
