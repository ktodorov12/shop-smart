import requester from "../api/requester";

const endpoints = {
  category: "/data/categories",
  sublist: (params) => `/data/sublist?${params}`,
  singleSublist: (sublistId) => `/data/sublist/${sublistId}`,
};

export const getCategories = async () => requester.get(endpoints.category);

export async function getSublist(searchParam, searchValue) {
  const params = new URLSearchParams({
    where: `${searchParam}="${searchValue}"`,
  });

  return requester.get(endpoints.sublist(params));
}

export async function updateSublistValue(sublist, type) {
  const updatedValue = type === "reduce" ? Number(sublist.amount) - 1 : Number(sublist.amount) + 1;

  const updatedSublist = { ...sublist, amount: updatedValue };

  return requester.put(endpoints.singleSublist(sublist._id), updatedSublist, true);
}
