import { useState } from "react";
import { Popover } from "antd";
import CitySearch from "./CitySearch";

export default function FlightSearch() {
  const [activePopup, setActivePopup] = useState(null);
  const [departure, setDeparture] = useState(null);
  const [arrival, setArrival] = useState(null);

  const handleDepartureSelect = (city) => {
    setDeparture(city);
    setActivePopup("arrival"); // Next step
  };

  const handleArrivalSelect = (city) => {
    setArrival(city);
    setActivePopup("date"); // Next step
  };

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {/* Departure */}
      <Popover
        content={<CitySearch onSelect={handleDepartureSelect} />}
        open={activePopup === "departure"}
        onOpenChange={(open) => setActivePopup(open ? "departure" : null)}
      >
        <button>
          {departure
            ? `${departure.name} (${departure.code})`
            : "Select Departure"}
        </button>
      </Popover>

      {/* Arrival */}
      <Popover
        content={<CitySearch onSelect={handleArrivalSelect} />}
        open={activePopup === "arrival"}
        onOpenChange={(open) => setActivePopup(open ? "arrival" : null)}
      >
        <button>
          {arrival ? `${arrival.name} (${arrival.code})` : "Select Arrival"}
        </button>
      </Popover>
    </div>
  );
}
