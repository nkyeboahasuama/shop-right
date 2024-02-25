import axios from "axios";
import { IProduct } from "../../core/interface";

const addNewProduct = (newProduct: IProduct) => {
  axios
    .post("http://localhost:3001/api/add-product", newProduct)
    .then((res) => {
      console.log("Adding product:", newProduct);
    })
    .catch((err: any) => {
      console.log(err);
    });
};

export const adminService = { addNewProduct };
