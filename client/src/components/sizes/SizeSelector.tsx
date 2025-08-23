import { useEffect, useState } from "react";

interface Type {
  clothing: string[];
  cosmetics: string[];
  footwear: string[];
  standart: string[];
  [key: string]: string[];
}

const types: Type = {
  clothing: ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXXXL"],
  cosmetics: ["15ml", "20ml", "25ml", "50ml", "100ml"],
  footwear: [
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
  ],
  standart: ["Standart"],
};

export default function SizeSelector({ sizeType }: { sizeType: string }) {
  const [type, setType] = useState(sizeType);
  useEffect(() => setType(sizeType), [sizeType]);

  return (
    <>
      <option value="none">Select Size</option>
      {type in types
        ? types[type].map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))
        : "Provide proper size type"}
    </>
  );
}
