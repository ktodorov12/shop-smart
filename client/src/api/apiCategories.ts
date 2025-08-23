import requester from "./requester";

import type { Category, Sublist } from "../types/categories";

const endpoints = {
  category: "/data/categories",
  sublist: (params: URLSearchParams) => `/data/sublist?${params}`,
  singleSublist: (sublistId: string) => `/data/sublist/${sublistId}`,
};

export const getCategories = async (): Promise<Category[]> => requester.get(endpoints.category);

export async function getSublist(searchParam: string, searchValue: string): Promise<Sublist[]> {
  const params = new URLSearchParams({
    where: `${searchParam}="${searchValue}"`,
  });

  return requester.get(endpoints.sublist(params));
}

export async function updateSublistValue(sublist: Sublist, type: string): Promise<Sublist> {
  const updatedValue = type === "reduce" ? Number(sublist.amount) - 1 : Number(sublist.amount) + 1;

  const updatedSublist = { ...sublist, amount: updatedValue };

  return requester.put(endpoints.singleSublist(sublist._id), updatedSublist, true);
}
