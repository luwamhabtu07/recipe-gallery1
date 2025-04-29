// src/RecipeGallery.js
import React from "react";

const RecipeGallery = () => {
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"],
      image: "https://example.com/carbonara.jpg"
    },
    {
      id: 2,
      title: "Chicken Curry",
      ingredients: ["Chicken", "Curry powder", "Onions", "Tomatoes"],
      image: "https://example.com/chicken-curry.jpg"
    },
    {
      id: 3,
      title: "Avocado Toast",
      ingredients: ["Bread", "Avocado", "Lemon", "Salt"],
      image: "https://example.com/avocado-toast.jpg"
    }
  ];

  return (
    <div style={galleryStyle}>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={cardStyle}>
          <img src={recipe.image} alt={recipe.title} style={imgStyle} />
          <h2>{recipe.title}</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

// Simple Inline Styling
const galleryStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
  padding: "20px"
};

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "10px",
  width: "250px",
  textAlign: "center",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
};

const imgStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "8px"
};

export default RecipeGallery;
