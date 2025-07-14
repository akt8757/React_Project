import { Children } from "react";
import { useState } from "react";
import { weatherContext } from "./Context";
import useWeather from "./Hooks/useWeather";
import { antdThemeConfig } from "./config/antd.config";
import { ConfigProvider } from "antd";
import { locationContext } from "./Context";

export default function Store({ children }) {
  const WeatherData = useWeather();
  const [favoritLocation, setFavoritLocation] = useState([
    {
      city: "dhaka",
      latitude: 25.74664,
      longitude: 89.25166,
    },
  ]);
  return (
    <div>
      <ConfigProvider theme={antdThemeConfig}>
        <weatherContext.Provider value={{ WeatherData }}>
          <locationContext.Provider
            value={{ favoritLocation, setFavoritLocation }}
          >
            {children}
          </locationContext.Provider>
        </weatherContext.Provider>
      </ConfigProvider>
    </div>
  );
}
