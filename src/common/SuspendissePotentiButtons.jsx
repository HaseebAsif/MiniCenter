import { useState } from "react";

const SuspendissePotentiButtons = () => {
  const [buttonsClicked, setButtonsClicked] = useState([
    false,
    false,
    false,
    false,
  ]);
  const handleClick = (index) => {
    setButtonsClicked((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="flex justify-center flex-wrap">
      {buttonsClicked.map((isClicked, index) => (
        <button
          key={index}
          className={`w-16 h-16 m-4 rounded-2xl border border-gray-400 focus:outline-none ${isClicked ? "bg-blue-500 text-white" : "bg-white"
            }`}
          onClick={() => handleClick(index)}
        >
          Btn {index + 1}
        </button>
      ))}
    </div>
  );
};

export default SuspendissePotentiButtons;
