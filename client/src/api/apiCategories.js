import requester from "../api/requester";

const endpoints = {
  category: "/data/categories",
  sublist: (params) => `/data/sublist?${params}`,
};

export const getCategories = async () => requester.get(endpoints.category);

export async function getSublist(searchParam, searchValue) {
  const params = new URLSearchParams({
    where: `${searchParam}="${searchValue}"`,
  });

  return requester.get(endpoints.sublist(params));
}

}
