import React from "react";

const Input = ({ inputValue, onChange, label }) => {
  return (
    <div className="mb-4 flex-col">
      <label className="text-xl mb-3">{label}</label>
      <input
        type="text"
        value={inputValue}
        className="text-black px-4 py-2 text-center"
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

export default Input;
