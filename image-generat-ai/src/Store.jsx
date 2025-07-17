import React from "react";
import useFetchApi from "./Hooks/useFetchApi";
import { apiImageProvider } from "./assets/Provider";

export default function Store({ children }) {
  const apiData = useFetchApi();

  return (
    <div>
      <apiImageProvider.Provider value={{ apiData }}>
        {children}
      </apiImageProvider.Provider>
    </div>
  );
}
