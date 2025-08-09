import Header from "./Component/Header";
import AddMultiCity from "./Component/Multicity/AddMultiCity";
import FlyDate from "./Component/SearchBox/FlyDate";
import FLyDestination from "./Component/SearchBox/FLyDestination";
import FlySearch from "./Component/SearchBox/FlySearch";
import SelectPasenger from "./Component/SearchBox/SelectPasenger";
import ServicOption from "./Component/ServicOption";
import Test from "./Component/test";
import TripOption from "./Component/TripOption";
import Store from "./Store";

function App() {
  return (
    <Store>
      <div>
        <Header />
        <div className="px-[220px] mt-20">
          <div className="shadow-lg bg-stone-50 pb-50 pt-2 ">
            <ServicOption />
            <TripOption />
            <div className="grid grid-cols-6 gap-3 px-5 mt-10">
              <FLyDestination />
              <FlyDate />
              <SelectPasenger />
            </div>
            <AddMultiCity />
            <FlySearch />
            {/* <Test /> */}
          </div>
        </div>
      </div>
    </Store>
  );
}

export default App;
