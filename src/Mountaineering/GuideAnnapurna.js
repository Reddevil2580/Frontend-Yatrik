import React, { useState } from "react";
import { Guidesannapurnadetails } from "./Guidesannapurnadetails";
import Props from "./Annapurnaprops"; // Updated import
import "../prop.css";
import Trekkingdst from "../Trekking_destinations.jpg";

function GuideAnnapurna() {
  const [sortOrder, setSortOrder] = useState("");
  const [budgetFilter, setBudgetFilter] = useState("all");
  const [languageFilter, setLanguageFilter] = useState("all");
  const [ageFilter, setAgeFilter] = useState("all");
  const [ExperienceFilter, setExperienceFilter] = useState("all");

  const sortByBudget = (event) => {
    setBudgetFilter(event.target.value);
    setSortOrder(""); // Reset sort order when changing budget filter
  };

  const sortByLanguage = (event) => {
    setLanguageFilter(event.target.value);
    setSortOrder(""); // Reset sort order when changing language filter
  };

  const sortByAge = (event) => {
    setAgeFilter(event.target.value);
    setSortOrder(""); // Reset sort order when changing age filter
  };

  const sortByExperience = (event) => {
    setExperienceFilter(event.target.value);
    setSortOrder(""); // Reset sort order when changing age filter
  };

  let filteredList = Guidesannapurnadetails;

  // Apply budget filter
  if (budgetFilter !== "all") {
    const [minBudget, maxBudget] = budgetFilter.split("-");
    filteredList = filteredList.filter(
      (property) =>
        parseInt(property.price.replaceAll(",", "")) >= parseInt(minBudget) &&
        parseInt(property.price.replaceAll(",", "")) <= parseInt(maxBudget)
    );
  }

  // Apply language filter
  if (languageFilter !== "all") {
    filteredList = filteredList.filter((property) =>
      property.Language.includes(languageFilter)
    );
  }

  // Apply age filter
  if (ageFilter !== "all") {
    const [minAge, maxAge] = ageFilter.split("-");
    filteredList = filteredList.filter(
      (property) =>
        parseInt(property.Age) >= parseInt(minAge) &&
        parseInt(property.Age) <= parseInt(maxAge)
    );
  }

  if (ExperienceFilter !== "all") {
    const [minExperience, maxExperience] = ExperienceFilter.split("-");
    filteredList = filteredList.filter(
      (property) =>
        parseInt(property.Experience) >= parseInt(minExperience) &&
        parseInt(property.Experience) <= parseInt(maxExperience)
    );
  }

  let sortedList = filteredList;

  // Apply sorting based on sortOrder
  if (sortOrder === "lowToHigh") {
    // Sort low to high by price
    sortedList = [...filteredList].sort(
      (a, b) =>
        parseInt(a.price.replaceAll(",", "")) -
        parseInt(b.price.replaceAll(",", ""))
    );
  } else if (sortOrder === "highToLow") {
    // Sort high to low by price
    sortedList = [...filteredList].sort(
      (a, b) =>
        parseInt(b.price.replaceAll(",", "")) -
        parseInt(a.price.replaceAll(",", ""))
    );
  } else if (sortOrder === "lowerToHigherDays") {
    // Sort lower to higher by days
    sortedList = [...filteredList].sort((a, b) => a.days - b.days);
  } else if (sortOrder === "higherToLowerDays") {
    // Sort higher to lower by days
    sortedList = [...filteredList].sort((a, b) => b.days - a.days);
  }

  return (
    <div className="property1">
      <img src={Trekkingdst} alt="" />
      <h1 className="property-title">Trending Treks</h1>
      <div className="sortButtons">
        <label htmlFor="budget-select">Sort by Budget:</label>
        <select id="budget-select" onChange={sortByBudget}>
          <option value="all">All Budgets</option>
          <option value="10000-15000">10k - 15k</option>
          <option value="16000-21000">16k - 21k</option>
          <option value="22000-30000">22k - 30k</option>
          <option value="30000">Above 20k</option>
        </select>

        <label htmlFor="language-select">Sort by Language:</label>
        <select id="language-select" onChange={sortByLanguage}>
          <option value="all">All Languages</option>
          <option value="Nepali">Nepali</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="French">French</option>
          <option value="Swedish">Swedish</option>
          <option value="Korean">Korean</option>
        </select>

        <label htmlFor="age-select">Sort by Age:</label>
        <select id="age-select" onChange={sortByAge}>
          <option value="all">All Ages</option>
          <option value="30-40">30-40</option>
          <option value="40-50">40-50</option>
          <option value="50-60">50-60</option>
          {/* Add other age options based on your data */}
        </select>

        <label htmlFor="Experience-select">Sort by Experience:</label>
        <select id="Experience-select" onChange={sortByExperience}>
          <option value="all">All Experiences</option>
          <option value="1-3">1-3</option>
          <option value="4-8">4-8</option>
          <option value="8-15">8-15</option>
          {/* Add other age options based on your data */}
        </select>

      </div>
      {sortedList && sortedList.length === 0 ? (
        <div className="noPropertiesMessage">
          No Guides are listed based on your interest.
        </div>
      ) : (
        <div className="propertyList">
          {sortedList.map((prop, key) => (
            <Props
              key={key}
              id={key}
              image={prop.image}
              Experience={prop.Experience}
              Age={prop.Age}
              name={prop.name}
              price={prop.price}
              province={prop.province}
              buyrent={prop.buyrent}
              Language={prop.Language}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default GuideAnnapurna;
