import React, { useState } from "react";

export default function AddProduct() {
  const [state, setState] = useState({
    title: "",
    description: "",
    price: "",
    rating: "",
    thumbnail: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
  };
  const handleSubmit = () => {};
  return (
    <div className="bg-gray-100 m-3 w-full p-2">
      <h2 className="text-2xl text-center">Add product</h2>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <input
          className="border-cyan-500 border-1 p-2 rounded my-2 w-full"
          placeholder="Product Title"
          type="text"
          name="title"
          value={state.title}
          onChange={handleChange}
        />

        <input
          className="border-cyan-500 border-1 p-2 rounded my-2 w-full"
          placeholder="Product Description"
          type="text"
          name="description"
          value={state.description}
          onChange={handleChange}
        />

        <input
          className="border-cyan-500 border-1 p-2 rounded my-2 w-full"
          placeholder="Product Price"
          type="text"
          name="price"
          value={state.price}
          onChange={handleChange}
        />

        <input
          className="border-cyan-500 border-1 p-2 rounded my-2 w-full"
          placeholder="Product Rating"
          type="text"
          name="rating"
          value={state.rating}
          onChange={handleChange}
        />

        <input
          className="border-cyan-500 border-1 p-2 rounded my-2 w-full"
          placeholder="Product Rating"
          type="text"
          name="thumbnail"
          value={state.thumbnail}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
