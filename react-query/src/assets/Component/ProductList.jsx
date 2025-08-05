import React from "react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function ProductList({ getIdHandeler }) {
  const getProductData = async ({ queryKey }) => {
    const product = await axios.get(`http://localhost:3001/${queryKey[0]}`);
    return product.data;
  };

  const { error, data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProductData,
  });

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id) => axios.delete(`http://localhost:3001/products/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  const handleDelete = (id) => {
    console.log(id);
    mutation.mutate(id);
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>error ocard</h1>;
  return (
    <div>
      <div>
        <ul className="flex flex-wrap justify-center items-center ">
          {data &&
            data.map((item) => (
              <li
                key={item.id}
                className="flex flex-col border border-sky-200 rounded-sm m-2"
              >
                <button
                  onClick={() => getIdHandeler(item.id)}
                  className="text-center bg-amber-800 border-2 border-r-2 py-2 px-7"
                >
                  Show Product
                </button>
                <h2 className="text-xl my-2 text-center">{item.title}</h2>
                {item.thumbnail && (
                  <img
                    className="h-60 w-80 object-cover "
                    src={item.thumbnail}
                    alt="Product"
                  />
                )}
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-center bg-amber-800 border-2 border-r-2 py-2 px-7"
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
