import PropTypes from "prop-types";
import { FaClock, FaFireAlt } from "react-icons/fa";
const Recipe = ({ recipe, handleWantToCook }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <img
        src={recipe_image}
        alt={recipe_name}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h2 className="text-2xl font-semibold mb-2">{recipe_name}</h2>
      <p className="text-gray-700 mb-4">{short_description}</p>
      <h3 className="font-semibold">Ingredients: {ingredients.length}</h3>
      <ul className="list-disc list-inside mb-4">
        {ingredients.map((ingredient, idx) => (
          <li key={idx}>{ingredient}</li>
        ))}
      </ul>
      <div className="flex justify-between items-center text-gray-600">
        <span className="flex items-center">
          <FaClock className="mr-2" />
          {preparing_time}
        </span>
        <span className="flex items-center">
          <FaFireAlt className="mr-2" />
          {calories}
        </span>
      </div>
      <button
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg"
        onClick={() => handleWantToCook(recipe)}
      >
        Want to Cook
      </button>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleWantToCook: PropTypes.func.isRequired,
};

export default Recipe;
