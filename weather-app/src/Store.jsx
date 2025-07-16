import { Children, useEffect } from "react";
import { useState } from "react";
import { weatherContext } from "./Context";
import useWeather from "./Hooks/useWeather";
import { antdThemeConfig } from "./config/antd.config";
import { ConfigProvider } from "antd";
import { locationContext } from "./Context";

export default function Store({ children }) {
  const WeatherData = useWeather();

  const [favoritLocation, setFavoritLocation] = useState(() => {
    const saved = localStorage.getItem("favoritLocation");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoritLocation", JSON.stringify(favoritLocation));
  }, [favoritLocation]);

  return (
    <div>
      <ConfigProvider theme={antdThemeConfig}>
        <locationContext.Provider
          value={{ favoritLocation, setFavoritLocation }}
        >
          <weatherContext.Provider value={{ WeatherData }}>
            {children}
          </weatherContext.Provider>
        </locationContext.Provider>
      </ConfigProvider>
    </div>
  );
}
