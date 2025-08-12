import { useState } from "react";

export default function CitySearch({ onSelect }) {
  const [query, setQuery] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  const cities = [
    { code: "DAC", name: "Dhaka", country: "Bangladesh" },
    { code: "CXB", name: "Cox's Bazar", country: "Bangladesh" },
    { code: "JFK", name: "New York JFK", country: "USA" },
    { code: "DXB", name: "Dubai", country: "UAE" },
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filter cities
    if (value.trim() === "") {
      setFilteredCities([]);
    } else {
      setFilteredCities(
        cities.filter(
          (city) =>
            city.name.toLowerCase().includes(value.toLowerCase()) ||
            city.code.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  return (
    <div style={{ width: 250 }}>
      <input
        type="text"
        placeholder="Type city or airport"
        value={query}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: 4,
        }}
      />
      {filteredCities.length > 0 && (
        <ul style={{ listStyle: "none", padding: 0, marginTop: 8 }}>
          {filteredCities.map((city) => (
            <li
              key={city.code}
              onClick={() => onSelect(city)}
              style={{
                padding: "6px 8px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
            >
              <strong>{city.code}</strong> - {city.name} ({city.country})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
