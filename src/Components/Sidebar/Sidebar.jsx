import PropTypes from "prop-types";

const Sidebar = ({ cooks }) => {
  const totalTime = cooks.reduce((acc, cook) => acc + cook.preparing_time, 0);
  const totalCalories = cooks.reduce((acc, cook) => acc + cook.calories, 0);

  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <h3 className="text-xl font-semibold mb-4 ml-10 mr-10 text-center border-b-2 pb-4">
        Want to cook: {cooks.length}
      </h3>
      <table className="w-full mb-6 text-left">
        <thead>
          <tr className="border-b-2">
            <th className="pb-2">Name</th>
            <th className="pb-2">Time</th>
            <th className="pb-2">Calories</th>
            {/* <th className="pb-2">Action</th> */}
          </tr>
        </thead>
        <tbody>
          {cooks.map((cook, index) => (
            <tr key={cook.recipe_id}>
              <td className="py-2">
                {index + 1}. {cook.recipe_name}
              </td>
              <td className="py-2">{cook.preparing_time} minutes</td>
              <td className="py-2">{cook.calories} calories</td>
              {cooks.length > 0 && (
                <td className="py-2">
                  <button className="bg-green-500 text-white px-4 py-1 rounded-lg">
                    Preparing
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="text-xl font-semibold mb-4 ml-10 mr-10 text-center border-b-2 pb-4">
        Currently cooking: 02
      </h3>
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span>Name</span>
          <span>Time</span>
          <span>Calories</span>
        </div>
        {/* <div className="flex justify-between">
          <span>Spaghetti Bolognese</span>
          <span>30 minutes</span>
          <span>600 calories</span>
        </div> */}
      </div>
      <div className="mt-6">
        <div className="flex justify-between mb-2">
          <span>Total Time = {totalTime} minutes</span>
          <span>Total Calories = {totalCalories} calories</span>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  cooks: PropTypes.object.isRequired,
};

export default Sidebar;
