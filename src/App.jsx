import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Footer from "./components/Footer";

const App = () => {
  const [recipes, setRecipes] = useState(() => {
    const savedRecipe = localStorage.getItem("recipes");

    return savedRecipe ? JSON.parse(savedRecipe) : [];
  });
  const [selectRecipe, setSelectRecipe] = useState(null);
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);
  const handleRecipes = async (value) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`,
      );
      const data = await response.json();
      console.log(data.meals);
      setRecipes(data.meals || []);
    } catch (error) {
      console.log("errro", error);
    }
  };
  const handleViewRecipe = async (id) => {
    if (id === null) {
      setSelectRecipe(null);
      return;
    }
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
      );

      const data = await response.json();
      setSelectRecipe(data.meals[0]);
      console.log(data.meals[0]);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    const GetRecipesDefualt = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`,
        );
        const data = await response.json();
        setRecipes(data.meals || []);
      } catch (error) {
        console.log("error", error);
      }
    };
    if (recipes.length === 0) {
      GetRecipesDefualt();
    }
  }, []);

  return (
    <div className="flex flex-col w-full bg-gray-200">
      <Header onSearch={handleRecipes} />
      <h1 className="text-center my-2 text-4xl capitalize font-bold  text-gray-400 ">
        our recipes
      </h1>
      <Recipes
        recipes={recipes}
        onViewRecipes={handleViewRecipe}
        selectRecipe={selectRecipe}
      />

      <Footer />
    </div>
  );
};

export default App;
