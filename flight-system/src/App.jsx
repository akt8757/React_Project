import CitySearch from "./assets/test/CitySearch";
import FlightSearch from "./assets/test/FlightSearch";
import Header from "./Component/Header";
import MainSearchBox from "./Component/MainSearchBox";
import FlyDate from "./Component/SearchBox/FlyDate";
import FlySearch from "./Component/SearchBox/FlySearch";
import SelectPasenger from "./Component/SearchBox/SelectPasenger";
import ServicOption from "./Component/ServicOption";
import Test from "./Component/test";
import TripOption from "./Component/TripOption";
import ContextStore from "./ContextStore";

function App() {
  return (
    <ContextStore>
      <div>
        <Header />
        <div className="px-[200px] mt-20">
          <div className="shadow-lg bg-stone-50 pb-100 pt-2 ">
            <ServicOption />
            <TripOption />

            <MainSearchBox />
            <FlySearch />
            {/* <Test /> */}
          </div>
        </div>
      </div>
    </ContextStore>
  );
}

export default App;
