import requester from "../api/requester";

const endpoints = {
  category: "/classes/Category",
  sub: "/classes/Subcategories",
  items: "/classes/Items",
  fetchSublist: (catId) => `/classes/Subcategories?where={"categoryId":{"__type":"Pointer","className":"Category","objectId":"${catId}"}}`,
};

export async function getAllCategoriesAndSublists() {
  const { results } = await requester.get(endpoints.category);
  results.map(async (cat) => {
    const res = await requester.get(endpoints.fetchSublist(cat.objectId));
    cat.sublist = res.results;
  });

  return results;
}
