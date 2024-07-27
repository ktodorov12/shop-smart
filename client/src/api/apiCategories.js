import requester from "../api/requester";

const endpoints = {
  category: "/data/categories",
};

export async function getAllCategoriesAndSublists() {
  const result = await requester.get(endpoints.category);

  return result;
}
