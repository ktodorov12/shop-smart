import requester from "../api/requester";

const endpoints = {
  main: "/data/products",
  singleProduct: (prop) => `/data/products/${prop}`,
  homeProducts: "/data/products?select=_id%2CproductName%2Cprice%2Cstars%2Csublist%2Cimg",
};

export const getAllProducts = () => requester.get(endpoints.homeProducts);

export const getProductById = (prodId) => requester.get(endpoints.singleProduct(prodId));

export function addProduct(data) {
  const check = Object.values(data).some((p) => p == "" || p == "none");
  if (check) {
    throw new Error("missing data");
  }

  const newProd = {
    categoryId: data.categoryId,
    description: data.description,
    img: data.img,
    price: data.price,
    productName: data.productName,
    sizes: data.sizes,
    sublist: data.sublist.toLowerCase(),
    stars: 0,
  };

  return requester.post(endpoints.main, newProd);
}

export function editProduct(data) {
  const check = Object.values(data).some((p) => p == "" || p == "none");
  if (check) {
    throw new Error("missing data");
  }

  const editedProd = {
    _ownerId: data._ownerId,
    categoryId: data.categoryId,
    description: data.description,
    img: data.img,
    price: data.price,
    productName: data.productName,
    sizes: data.sizes,
    sublist: data.sublist.toLowerCase(),
    stars: data.stars,
    _createdOn: data._createdOn,
    _updatedOn: Date.now(),
    _id: data._id,
  };

  return requester.put(endpoints.singleProduct(data._id), editedProd);
}
