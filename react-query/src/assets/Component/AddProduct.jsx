import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { Form, message, Space } from "antd";

export default function AddProduct() {
  const [messageApi, contextHolder] = message.useMessage();
  const [state, setState] = useState({
    title: "",
    description: "",
    price: "",
    rating: "",
    thumbnail: "",
  });
  const success = () => {
    messageApi.open({
      type: "success",
      content: "This is a success message",
    });
  };
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (product) =>
      axios.post("http://localhost:3001/products", product),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  const handleSubmit = () => {
    // e.preventDefault();
    console.log("submitting");
    const newData = { ...state, id: crypto.randomUUID().toString() };
    mutation.mutate(newData);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div className="bg-gray-100 m-3 w-full p-2">
      {contextHolder}
      <h2 className="text-2xl text-center">Add product</h2>
      <form
        // onSubmit={handleSubmit}
        className="flex flex-col items-center"
      >
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
          placeholder="thumbnail url"
          type="text"
          name="thumbnail"
          value={state.thumbnail}
          onChange={handleChange}
        />
      </form>
      <button
        onClick={handleSubmit}
        className="rounded-2xl bg-amber-700 border py-2 px-8 text-amber-50"
      >
        Submit
      </button>
    </div>
  );
}
