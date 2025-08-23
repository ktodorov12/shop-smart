export interface ProdData {
  categoryId: string;
  description: string;
  img: string;
  price: string;
  productName: string;
  sublist: string;
  stars: string;
  _ownerId: string;
  _createdOn: string | Date;
  _id: string;
}

export interface ProdInBag extends ProdData {
  quantity?: string;
  size?: string;
  sizes: [{ size: string; amount: string }];
}

export interface AddProduct {
  categoryId: string;
  description: string;
  img: string;
  price: string;
  productName: string;
  sizes: [{ size: string; amount: string }];
  sublist: string;
  stars: string;
}

export interface EditProduct extends AddProduct {
  _ownerId: string;
  _createdOn: string | Date;
  _id: string;
  _updatedOn?: string | Date;
}

export interface Product {
  categoryId: string;
  description: string;
  img: string;
  price: string;
  productName: string;
  sizes: [{ size: string; amount: string }];
  sublist: string;
  stars: string;
  _ownerId: string;
  _createdOn: string | Date;
  _id: string;
}
