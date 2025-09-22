import React from "react";

const Toggle = ({ selected, isAvailable, setIsAvailable }) => {
  return (
    <div className="container mx-auto px-4 md:px-10 lg:px-20 mt-10 text-white md:flex flex-row-reverse justify-between items-center">
      <div className="flex font-semibold mt-2">
        <button
          onClick={() => setIsAvailable(true)}
          className={`px-4 py-2 border-1 border-white rounded-l-2xl ${
            isAvailable && "bg-white text-blue-600"
          }`}
        >
          Available
        </button>
        <button
          onClick={() => setIsAvailable(false)}
          className={`px-4 py-2 border-1 border-white rounded-r-2xl ${
            isAvailable || "bg-white text-blue-600"
          }`}
        >
          Selected ({selected.length}/6)
        </button>
      </div>
      <h2 className="text-2xl font-semibold mt-2">
        {isAvailable ? "Available Players" : "Selected Players"}
      </h2>
    </div>
  );
};

export default Toggle;
