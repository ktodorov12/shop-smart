export interface Sublist {
  name: string;
  categoryId: string;
  amount: number;
  _id: string;
}

export interface Category {
  img: string;
  name: string;
  sizeType: string;
  sublist: Sublist[];
  _id: string;
}