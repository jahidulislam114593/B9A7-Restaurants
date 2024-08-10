import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import Sidebar from "../Sidebar/Sidebar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OurRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("Recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const [cooks, setCooks] = useState([]);

  const handleWantToCook = (recipe) => {
    const recipeExists = cooks.some(
      (cook) => cook.recipe_id === recipe.recipe_id
    );

    if (recipeExists) {
      toast.error("Already exist!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const newCook = [...cooks, recipe];
      setCooks(newCook);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">Our Recipes</h1>
      <p className="text-center mb-8">
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate metus pharetra rhoncus. Eget urna volutpat curabitur elementum
        mauris aenean neque.
      </p>
      <div className="flex">
        <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe_id}
              recipe={recipe}
              handleWantToCook={handleWantToCook}
            />
          ))}
        </div>
        <div className="w-1/3 pl-6">
          <Sidebar cooks={cooks} />
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default OurRecipes;
