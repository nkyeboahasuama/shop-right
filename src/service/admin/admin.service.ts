import axios from "axios";

interface IProduct {
  name: string;
  description: null;
  price: number;
  image: null;
}

const addNewProduct = (newProduct: IProduct) => {
  axios
    .post("http://localhost:3001/api/add-product", newProduct)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err: any) => {
      console.log(err);
    });
  console.log("Adding product:", newProduct);
};

export const adminService = { addNewProduct };
