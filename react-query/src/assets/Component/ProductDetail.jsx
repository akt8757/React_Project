import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export default function ProductDetail({ id }) {
  const getProduct = async ({ queryKey }) => {
    const product = await axios.get(
      `http://localhost:3001/${queryKey[0]}/${queryKey[1]}`
    );

    return product.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", id],
    queryFn: getProduct,
  });

  if (isLoading) return <h1>Data Loadind....</h1>;
  if (error) return <h1>Error ocured</h1>;
  return (
    <div>
      <div>
        <h1 className="text-3xl">Product Detail</h1>
        <ul className="flex flex-wrap justify-center items-center">
          <li className=" border border-sky-200 rounded-sm m-2 p-2">
            <img
              className="h-60 w-80 object-cover rounded-full"
              src={data.thumbnail}
              alt={data.title}
            />
            <div className="my-2">
              <p>title: {data.title}</p>
              <p>Description: {data.description}</p>
              <p>Price: {data.price}</p>
              <p>Rating: {data.rating}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

// ${queryKey[0]}/${queryKey[1]}
