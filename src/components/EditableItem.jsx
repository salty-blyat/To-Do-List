import React, { useState } from "react";

const EditableItem = ({ initialValue, onSave }) => {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSave(value);
    }
  };

  return (
    <>
      <input
        className="bg-dark"
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

export default EditableItem;
