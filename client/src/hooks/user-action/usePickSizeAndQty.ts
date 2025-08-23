import { useState } from "react";

export default function usePickSizeAndQty() {
  const [pickedSize, setPickedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const changeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < 1) {
      setQuantity(1);
      return;
    }

    setQuantity(value);
  };

  const handlePickSize = (e: React.MouseEvent<HTMLInputElement | HTMLButtonElement>) => {
    const target = e.target as HTMLInputElement | HTMLButtonElement;
    setPickedSize(target.textContent || "");
  };

  return { handlePickSize, pickedSize, quantity, changeQuantity };
}
