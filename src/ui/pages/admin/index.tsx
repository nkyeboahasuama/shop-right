import React, { useState } from "react";
import { adminService } from "../../../service";

export const AdminPage = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(1);
  const [imageFile, setImageFile] = useState("");
  const [sizes, setSizes] = useState<string[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newProduct = {
      name: productName,
      description: "",
      price: price,
      image: imageFile,
      sizes: sizes,
    };
    adminService.addNewProduct(newProduct);
  };
  console.log(sizes);

  const handleUpdateSizes = (size: string) => {
    const updatedSizes = sizes.includes(size)
      ? sizes.filter((selectedSize) => selectedSize !== size)
      : [...sizes, size];
    setSizes(updatedSizes);
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
            min={1}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input type="file" onChange={(e) => setImageFile(e.target.value)} />
        </div>
        <div>
          {["large", "medium", "small"].map((size) => (
            <div key={size}>
              <label htmlFor={size}>{size}</label>
              <input
                type="checkbox"
                checked={sizes.includes(size)}
                id={size}
                onChange={() => handleUpdateSizes(size)}
              />
            </div>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
