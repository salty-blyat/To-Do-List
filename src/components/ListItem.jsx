import React from "react";







const ListItem = ({ item, onToggleCheckbox, onRemoveItem, isChecked }) => {
  const listItemStyle = {
    backgroundColor: isChecked ? "#333" : "#555", // Darker backgrounds
    color: "#fff", // White text for better contrast
    borderColor: isChecked ? "#444" : "#666", // Darker border colors
    textDecoration: isChecked ? "line-through" : "none",
  };

  const textStyle = {
    marginLeft: "10px",
    flexGrow: 1, // Allow text to take available space
  };

  const checkboxStyle = {
    marginRight: "10px",
  };

  const closeBtnStyle = {
    color: "#fff", // White color for the close icon
    cursor: "pointer",
  };

  return (
    <li className="d-flex align-items-center my-2 rounded px-3 py-1 addlist-list" style={listItemStyle}>
      <div className="custom-checkbox" onClick={() => onToggleCheckbox(item)}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => onToggleCheckbox(item)}
          style={checkboxStyle}
        />
        {/* {isChecked && <FontAwesomeIcon icon={faCheck} color="#fff" />} White check icon */}
      </div>

      <div className="flex-grow-1">
        <span style={textStyle}>{item.text}</span>
      </div>

      <div className="d-flex">
        <span
          className="material-symbols-outlined addlist-close-btn"
          onClick={() => onRemoveItem(item)}
          style={closeBtnStyle}
        >
          close
        </span>
      </div>
    </li>
  );
};

export default ListItem;
