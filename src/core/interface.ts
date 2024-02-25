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

// export interface IUser {
//   _id?: string;
//   name: string;
//   email: string;
//   time?: string;
// }
export interface IUser {
  name: string;
  email: string;
  password: any;
  _id?: string;
  phone?: string;
  address?: string;
  profileImage?: string;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
  selected_size?: string;
}
