import requester from "./requester";

import type { AddProduct, EditProduct, ProdData, ProdInBag, Product } from "../types/products";

const endpoints = {
  main: "/data/products",
  singleProduct: (prop: string) => `/data/products/${prop}`,
  homeProducts:
    "/data/products?select=_id%2CproductName%2Cprice%2Cstars%2Csublist%2Cimg%2C_ownerId",
  forProfile: (ownerId: string) => `/data/products?where=_ownerId%3D%22${ownerId}%22`,
  byCategory: (catId: string, sublist: string) =>
    `/data/products?where=sublist%20LIKE%20%22${sublist}%22%20AND%20categoryId%3D%22${catId}%22`,
};

export const getAllProducts = (): Promise<ProdData[]> => requester.get(endpoints.homeProducts);

export const getProductById = (prodId: string): Promise<Product> =>
  requester.get(endpoints.singleProduct(prodId));

export const removeProduct = (prodId: string): Promise<void> =>
  requester.del(endpoints.singleProduct(prodId));

export const getProductsProfile = (ownerId: string): Promise<ProdData[]> =>
  requester.get(endpoints.forProfile(ownerId));

export const getProductsByCategory = (catId: string, sublist: string): Promise<ProdData[]> =>
  requester.get(endpoints.byCategory(catId, sublist));

export const reduceQtyCheckout = (id: string, prod: ProdInBag): Promise<ProdInBag> =>
  requester.put(endpoints.singleProduct(id), prod, true);


export function addProduct(data: AddProduct): Promise<AddProduct & {_id: string}> {
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

export function editProduct(data: EditProduct): Promise<EditProduct> {
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
