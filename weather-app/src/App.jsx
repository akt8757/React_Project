import Header from "./Component/Header/Header";
import Store from "./Store";
import backgroundImg from "../src/assets/backgrounds/winter.jpg";
import WeatherBord from "./Component/weather/WeatherBord";

function App() {
  return (
    <div className="bg-body font-[Roboto] text-light bg-[url('../src/assets/backgrounds/winter.jpg')] bg-no-repeat bg-cover h-screen grid">
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
