import { Flex, Spin } from "antd";
import Header from "./Component/Header/Header";
import Store from "./Store";
import backgroundImg from "../src/assets/backgrounds/winter.jpg";
import WeatherBord from "./Component/weather/WeatherBord";
import useWeather from "./Hooks/useWeather";
import { CloseOutlined } from "@ant-design/icons";

function App() {
  const { loading } = useWeather();
  const antIcon = (
    <CloseOutlined style={{ fontSize: 110, color: "#00B96B" }} spin />
  );

  return (
    <div className="bg-body font-[Roboto] text-light bg-[url('../src/assets/backgrounds/winter.jpg')] bg-no-repeat bg-cover h-screen grid">
      <Flex align="center" gap="middle">
        <Spin indicator={antIcon} fullscreen={true} spinning={loading}>
          content
        </Spin>
      </Flex>
      <Store>
        <div className="grid place-items-center h-screen">
          <Header />
          <WeatherBord />
        </div>
      </Store>
    </div>
  );
}

export default App;
