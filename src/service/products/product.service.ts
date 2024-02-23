import axios from "axios";

const getProducts = async () => {
  try {
    const res = await axios.get("http://localhost:3001/api/products");
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getProductDetails = async (id: string) => {
  try {
    const response = await axios.get(`http://localhost:3001/api/product/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};
export const productService = { getProducts, getProductDetails };
