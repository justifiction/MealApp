import React from "react";
import "./styles.css";
import MealCard from "../MealCard";
function MealsContainer({ meals }) {
  return (
    <div className="meals-container">
      {meals.map((meal, idx) => (
        <MealCard key={meal.idMeal} {...meal} />
      ))}
    </div>
  );
}

export default MealsContainer;
