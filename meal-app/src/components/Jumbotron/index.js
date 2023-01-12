import React, { useState, useContext } from "react";
import "./style.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { MyContext } from "../../context";
import axios from "axios";

function MyJumbotron() {
  const [searchInput, setsearchInput] = useState("");
  const { setMeals } = useContext(MyContext);
  function handleSearch(search) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
    .then((res) => res.json())  
    .then((data) => setMeals(data.meals));
  }
  return (
    <div className="my-jumbotron">
      <h1>Welcome </h1>
      <h2>You can search your favourite meals</h2>
      <div className="button-input">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search for a meal..."
            aria-label="Meal search input"
            aria-describedby="meal-search-button"
            value={searchInput}
            onChange={(e) => setsearchInput(e.target.value)}
          />
          <Button
            variant="danger"
            id="meal-search-button"
            onClick={handleSearch}
          >
            Button
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}

export default MyJumbotron;
