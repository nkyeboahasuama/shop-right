export interface IProduct {
  _id?: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  sizes: string[];
}

export interface IOrder {
  _id?: string;
  customerName: string;
  products: string[];
  totalAmount: number;
  time?: string;
}

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  time?: string;
}
