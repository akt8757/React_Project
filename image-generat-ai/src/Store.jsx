import React from "react";
import useFetchApi from "./Hooks/useFetchApi";
import { apiImageProvider } from "./assets/Provider";
import { downloadImageContext } from "./assets/Provider";
import useDownload from "./Hooks/useDownload";

export default function Store({ children }) {
  const apiData = useFetchApi();
  const downLoadedImage = useDownload();

  return (
    <div>
      <apiImageProvider.Provider value={{ apiData }}>
        <downloadImageContext.Provider value={{ downLoadedImage }}>
          {children}
        </downloadImageContext.Provider>
      </apiImageProvider.Provider>
    </div>
  );
}
