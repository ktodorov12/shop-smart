import requester from "../api/requester";

const endpoints = {
  category: "/data/categories",
  sublist: (params) => `/data/sublist?${params}`,
};

export const getCategories = async () => requester.get(endpoints.category);

export async function getSublist(categoryId) {
  const params = new URLSearchParams({
    where: `categoryId="${categoryId}"`,
  });

  return await requester.get(endpoints.sublist(params));
}
