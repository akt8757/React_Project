import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function ProductList({ getIdHandeler }) {
  const getProductData = async ({ queryKey }) => {
    const product = await axios.get(`http://localhost:3001/${queryKey[0]}`);
    return product.data;
  };

  const { error, data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProductData,
  });

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
                onClick={() => getIdHandeler(item.id)}
                className="flex flex-col border border-sky-200 rounded-sm m-2"
              >
                <h2 className="text-xl my-2 text-center">{item.title}</h2>
                {item.thumbnail && (
                  <img
                    className="h-60 w-80 object-cover "
                    src={item.thumbnail}
                    alt="Product"
                  />
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
