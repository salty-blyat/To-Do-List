import React, { useState } from "react";

const AddList = ({ pageType, onAddItem }) => {
  const [text, setText] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if text is empty
    if (!text.trim()) return; // Prevents adding if text is empty or only whitespace

    const data = {
      text: text,
      check: isChecked,
      page: pageType,
    };

    onAddItem(data);
    setText("");
    setIsChecked(false);
  };

  return (
    <form onSubmit={handleSubmit} className="input-group d-flex align-items-stretch text-white">
      <input
        className="bg-transparent form-control flex-grow-1 text-white"
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text"
      />
      <button type="submit" className="btn border text-white">
        Submit
      </button>
    </form>
  );
};

export default AddList;
