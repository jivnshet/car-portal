import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducer";

const FilterPage: React.FC = () => {
  interface Car {
    model: string;
    location: string;
    bodyType: string;
    brand: string;
    owner: string;
    fuelType: string;
    transmission: string;
    // Add other fields as needed
  }

  const formData = useSelector((state: RootState) => state.formData);

  // Define filter state and update functions
  const [locationFilter, setLocationFilter] = useState<string>("Bengaluru");
  const [bodyTypeFilter, setBodyTypeFilter] = useState<string>("");
  const [brandFilters, setBrandFilters] = useState<string[]>([]);
  const [ownerFilter, setOwnerFilter] = useState<string>("");
  const [fuelTypeFilter, setFuelTypeFilter] = useState<string>("");
  const [transmissionFilter, setTransmissionFilter] = useState<string>("");

  // Filter the data based on the filter conditions
  const filteredData = formData.filter((item: Car) => {
    return (
      item.location === locationFilter &&
      (bodyTypeFilter === "" ||
        item.bodyType.toLowerCase().includes(bodyTypeFilter.toLowerCase())) &&
      (brandFilters.length === 0 || brandFilters.includes(item.brand)) &&
      (ownerFilter === "" || item.owner === ownerFilter) &&
      (fuelTypeFilter === "" || item.fuelType === fuelTypeFilter) &&
      (transmissionFilter === "" || item.transmission === transmissionFilter)
    );
  });

  return (
    <div>
      <h1>Second Page</h1>
      {/* Location filter */}
      <div>
        <label htmlFor="locationFilter">Location:</label>
        <select
          id="locationFilter"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option value="Bengaluru">Bengaluru</option>
          {/* Add other location options here */}
        </select>
      </div>
      {/* Body Type filter */}
      <div>
        <label htmlFor="bodyTypeFilter">Body Type:</label>
        <input
          type="text"
          id="bodyTypeFilter"
          value={bodyTypeFilter}
          onChange={(e) => setBodyTypeFilter(e.target.value)}
        />
      </div>
      {/* Brand filter */}
      <div>
        <label>Brand:</label>
        <div>
          <input
            type="checkbox"
            id="wagonR"
            value="WagonR"
            checked={brandFilters.includes("WagonR")}
            onChange={(e) =>
              setBrandFilters((prevFilters) =>
                e.target.checked
                  ? [...prevFilters, e.target.value]
                  : prevFilters.filter((filter) => filter !== e.target.value)
              )
            }
          />
          <label htmlFor="wagonR">WagonR</label>
        </div>
        {/* Add other brand checkboxes here */}
      </div>
      {/* Owner filter */}
      <div>
        <label>Owner:</label>
        <div>
          <input
            type="radio"
            id="firstOwner"
            value="1st Owner"
            checked={ownerFilter === "1st Owner"}
            onChange={() => setOwnerFilter("1st Owner")}
          />
          <label htmlFor="firstOwner">1st Owner</label>
        </div>
        {/* Add other owner radio buttons here */}
      </div>
      {/* Fuel Type filter */}
      <div>
        <label>Fuel Type:</label>
        <div>
          <input
            type="radio"
            id="petrol"
            value="Petrol"
            checked={fuelTypeFilter === "Petrol"}
            onChange={() => setFuelTypeFilter("Petrol")}
          />
          <label htmlFor="petrol">Petrol</label>
        </div>
        {/* Add other fuel type radio buttons here */}
      </div>
      {/* Transmission filter */}
      <div>
        <label>Transmission:</label>
        <div>
          <input
            type="radio"
            id="automatic"
            value="Automatic"
            checked={transmissionFilter === "Automatic"}
            onChange={() => setTransmissionFilter("Automatic")}
          />
          <label htmlFor="automatic">Automatic</label>
        </div>
        {/* Add other transmission radio buttons here */}
      </div>
      {/* Results display */}
      <div>
        <h2>Results:</h2>
        <ul>
          {filteredData.map((item: Car, index: number) => (
            <li key={index}>
              <p>Model: {item.model}</p>
              <p>Location: {item.location}</p>
              <p>Body Type: {item.bodyType}</p>
              <p>Brand: {item.brand}</p>
              <p>Owner: {item.owner}</p>
              <p>Fuel Type: {item.fuelType}</p>
              <p>Transmission: {item.transmission}</p>
              {/* Add other fields to display */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterPage;
