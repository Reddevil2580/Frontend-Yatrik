import React, { useState } from "react";
import { TravelList } from "./TravelList";
import Props from "./Prop"; // Updated import
import "./prop.css";
import { Link } from "react-router-dom";
import Trekkingdst from "./Trekking_destinations.jpg";

function Travel() {
  const [sortOrder, setSortOrder] = useState("");
  const [provinceFilter, setProvinceFilter] = useState("all");
  const [budgetFilter, setBudgetFilter] = useState("all");

  const sortByProvince = (event) => {
    setProvinceFilter(event.target.value);
    setSortOrder(""); // Reset sort order when changing province filter
  };

  const sortByBudget = (event) => {
    setBudgetFilter(event.target.value);
    setSortOrder(""); // Reset sort order when changing budget filter
  };



  let filteredList = TravelList;

  if (provinceFilter !== "all") {
    filteredList = filteredList.filter(
      (property) =>
        property.province.toLowerCase() === provinceFilter.toLowerCase()
    );
  }

  if (budgetFilter !== "all") {
    const [minBudget, maxBudget] = budgetFilter.split("-");
    filteredList = filteredList.filter(
      (property) =>
        parseInt(property.price.replaceAll(",", "")) >= parseInt(minBudget) &&
        parseInt(property.price.replaceAll(",", "")) <= parseInt(maxBudget)
    );
  }


  let sortedList = filteredList;

  if (sortOrder === "lowToHigh") {
    sortedList = [...filteredList].sort(
      (a, b) =>
        parseInt(a.price.replaceAll(",", "")) -
        parseInt(b.price.replaceAll(",", ""))
    );
  } else if (sortOrder === "highToLow") {
    sortedList = [...filteredList].sort(
      (a, b) =>
        parseInt(b.price.replaceAll(",", "")) -
        parseInt(a.price.replaceAll(",", ""))
    );
  } else if (sortOrder === "lowerToHigherDays") {
    sortedList = [...filteredList].sort((a, b) => a.days - b.days);
  } else if (sortOrder === "higherToLowerDays") {
    sortedList = [...filteredList].sort((a, b) => b.days - a.days);
  }

  return (
    <div className="property1">
      <img src={Trekkingdst} alt="" />
      <h1 className="property-title">Trending Treks</h1>
      <div className="sortButtons">
        <label htmlFor="province-select">Sort by Province:</label>
        <select id="province-select" onChange={sortByProvince}>
          <option value="all">All Provinces</option>
          <option value="Province 1">Province 1</option>
          <option value="Province 1">Province 1</option>
          <option value="Province 2">Province 2</option>
          <option value="Province 3">Province 3</option>
          <option value="Province 4">Province 4</option>
          <option value="Province 5">Province 5</option>
          <option value="Province 6">Province 6</option>
          <option value="Province 7">Province 7</option>
        </select>
        <label htmlFor="budget-select">Sort by Budget:</label>
        <select id="budget-select" onChange={sortByBudget}>
          <option value="all">All Budgets</option>
          <option value="10000-15000">10k - 15k</option>
          <option value="16000-21000">16k - 21k</option>
          <option value="22000-30000">22k - 30k</option>
          <option value="30000">Above 20k</option>
        </select>
      </div>
      {sortedList.length === 0 ? (
        <div className="noPropertiesMessage">
          No properties are listed based on your interest.
        </div>
      ) : (
        <div className="propertyList">
          {sortedList.map((prop, key) => (
            <Props
              key={key}
              id={key}
              image={prop.image}
              name={prop.name}
              price={prop.price}
              province={prop.province}
              days={prop.days}
              buyrent={prop.buyrent}
            />
          ))}
        </div>
      )}
      <div className="Trekking">
        <Link to="/Trekking">
          <button>Trekking Destinations</button>
        </Link>

        <Link to="/mountainclimbing">
          <button>mountainclimbing Destinations</button>
        </Link>
      </div>
    </div>
  );
}

export default Travel;