import React, { useState } from "react";
import { adminService } from "../../../service";

export const AdminPage = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newProduct = {
      name: productName,
      description: null,
      price: price,
      image: null,
    };
    adminService.addNewProduct(newProduct);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input type="file" />
        </div>
        {/* <input type="submit" /> */}
        <button>Submit</button>
      </form>
    </>
  );
};
