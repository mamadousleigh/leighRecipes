import React from "react";

const Recipes = ({ recipes, onViewRecipes, selectRecipe }) => {
  return (
    <div className="py-5 px-6">
      {selectRecipe ? (
        <div className="max-w-2xl mx-auto mt-10 mb-10 bg-white rounded-2xl shadow-xl overflow-hidden ">
          <img
            src={selectRecipe.strMealThumb}
            alt={selectRecipe.strMeal}
            className="w-full h-80 object-cover"
          />

          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800">
              {selectRecipe.strMeal}
            </h2>

            <p className="text-gray-500 mt-2">
              Category: {selectRecipe.strCategory}
            </p>

            <p className="text-gray-500">Cuisine: {selectRecipe.strArea}</p>

            <h3 className="text-xl font-bold mt-6 mb-2">Instructions</h3>

            <p className="text-gray-600 leading-7">
              {selectRecipe.strInstructions}
            </p>

            <button
              onClick={() => onViewRecipes(null)}
              className="bg-blue-500 p-2 mt-4 text-white capitalize rounded cursor-pointer"
            >
              Close Recipe
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 w-full px-4 py-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {recipes.map((recipe) => (
            <div
              key={recipe.idMeal}
              className="bg-white p-2 rounded-lg shadow transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                className="w-full h-48 object-cover rounded-lg"
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
              />

              <p className="font-bold text-lg mt-2">{recipe.strMeal}</p>

              <p>
                <span className="font-semibold">Category:</span>{" "}
                {recipe.strCategory}
              </p>

              <p>
                <span className="font-semibold">Cuisine:</span> {recipe.strArea}
              </p>
              <button
                onClick={() => onViewRecipes(recipe.idMeal)}
                className="bg-blue-500 p-1 mt-1 text-white capitalize rounded cursor-pointer"
              >
                view recipes
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Recipes;
