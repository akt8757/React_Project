import React, { useContext } from "react";
import { Flex, Spin } from "antd";
import Favorit from "./Favorit";
import WeatherHead from "./WeatherHead";
import WeatherDetail from "./WeatherDetail";
import { weatherContext } from "../../Context";
import { CloseOutlined } from "@ant-design/icons";

export default function WeatherBord() {
  const { WeatherData } = useContext(weatherContext);
  const { weather, loading } = WeatherData;

  const antIcon = (
    <CloseOutlined style={{ fontSize: 110, color: "#00B96B" }} spin />
  );
  return (
    <div>
      <Flex align="center" gap="middle">
        <Spin indicator={antIcon} fullscreen={true} spinning={loading}>
          content
        </Spin>
      </Flex>
      <main>
        <section>
          <div className="Container">
            <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
              <div className="grid md:grid-cols-2 gap-10 md:gap-6">
                <Favorit weatherFevorit={weather} />
                <WeatherHead weatherHedData={weather} />
                <WeatherDetail weatherDetailData={weather} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
