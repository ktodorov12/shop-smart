import requester from "../api/requester";

const endpoints = {
  homeProducts: "/data/items?select=_id%2CproductName%2Cprice%2Cstars%2Csublist%2Cimg",
};

export const getAllProducts = () => requester.get(endpoints.homeProducts);
