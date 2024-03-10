import React, { useState } from "react";

const SuspendissePotentiButtons = () => {
  // State to track the clicked status of each button
  const [buttonsClicked, setButtonsClicked] = useState([
    false,
    false,
    false,
    false,
  ]);

  // Function to handle button click
  const handleClick = (index) => {
    setButtonsClicked((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index]; // Toggle the clicked status
      return newState;
    });
  };

  return (
    <div className="flex justify-center flex-wrap">
      {/* Map through the buttonsClicked state array to render buttons */}
      {buttonsClicked.map((isClicked, index) => (
        <button
          key={index}
          className={`w-16 h-16 m-4 rounded-2xl border border-gray-400 focus:outline-none ${
            isClicked ? "bg-blue-500 text-white" : "bg-white"
          }`}
          onClick={() => handleClick(index)}
        >
          {/* Add text or icon inside the button */}
          Btn {index + 1}
        </button>
      ))}
    </div>
  );
};

export default SuspendissePotentiButtons;
