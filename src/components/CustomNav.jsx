import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomNav = ({ index, url, onDelete }) => {
  const [listName, setListName] = useState(`Untitled List`);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setListName(e.target.value);
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    onDelete(index);
  };

  const handleNavigateToDynamicPage = () => {
    const dynamicPageUrl = `${url}`;
    navigate(dynamicPageUrl);
  };
  

  return (
    <div
      style={{width: '100%'}}
      onDoubleClick={handleDoubleClick}
      onBlur={handleBlur}
      onClick={handleNavigateToDynamicPage}
    >
      {isEditing ? (
        <input
        className="bg-dark"
          type="text"
          value={listName}
          onChange={handleNameChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <>
          <div className="nav-list border rounded d-flex align-items-center w-auto">
            <span className="material-symbols-outlined px-2 list-icon">menu</span>
            <span>{listName}</span>
            <span
              className="material-symbols-outlined align-self-end ms-auto"
              onClick={handleDelete}
            >
              close
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default CustomNav;
