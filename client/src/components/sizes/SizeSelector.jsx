import { useEffect, useState } from "react";

const types = {
  clothing: ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXXXL"],
  cosmetics: ["15ml", "20ml", "25ml", "50ml", "100ml"],
  footwear: ["38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50"],
  none: []
};

export default function SizeSelector({ sizeType }) {
  const [type, setType] = useState(sizeType);
  useEffect(() => setType(sizeType), [sizeType]);

  return (
    <>
      <option value="none">Select Size</option>
      {types[type].map((t) => (
        <option key={t} value={t}>
          {t}
        </option>
      ))}
    </>
  );
}
