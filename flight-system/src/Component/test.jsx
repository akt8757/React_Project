import { useState } from "react";

export default function Test() {
  const [formData, setFormData] = useState({
    customer: {
      name: "",
      email: "",
    },
    tripType: "round",
    trips: [
      {
        from: "",
        to: "",
        date: "",
      },
    ],
  });

  // trip add করার জন্য
  const addTrip = () => {
    setFormData((prev) => ({
      ...prev,
      trips: [...prev.trips, { from: "", to: "", date: "" }],
    }));
  };

  // trip data update করার জন্য
  const updateTrip = (index, key, value) => {
    setFormData((prev) => {
      const updatedTrips = [...prev.trips];
      updatedTrips[index][key] = value;
      return { ...prev, trips: updatedTrips };
    });
  };

  return (
    <div>
      <h2>Booking Form</h2>

      <input
        placeholder="Customer Name"
        value={formData.customer.name}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            customer: { ...prev.customer, name: e.target.value },
          }))
        }
      />

      {formData.trips.map((trip, index) => (
        <div key={index}>
          <input
            placeholder="From"
            value={trip.from}
            onChange={(e) => updateTrip(index, "from", e.target.value)}
          />
          <input
            placeholder="To"
            value={trip.to}
            onChange={(e) => updateTrip(index, "to", e.target.value)}
          />
          <input
            type="date"
            value={trip.date}
            onChange={(e) => updateTrip(index, "date", e.target.value)}
          />
        </div>
      ))}

      <button onClick={addTrip}>Add Trip</button>

      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
}
