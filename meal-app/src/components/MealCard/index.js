import React from "react";
import { Card, Button } from "react-bootstrap";
import MealModal from "../MealModal";
function MealCard({ strMeal, strMealThumb, strInstructions, idMeal }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={strMealThumb} />
      <Card.Body>
        <Card.Title>{strMeal}</Card.Title>

        <MealModal title={strMeal} description={strInstructions} idMeal = {idMeal} />
      </Card.Body>
    </Card>
  );
}

export default MealCard;
