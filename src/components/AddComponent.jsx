// AddComponent.jsx
import React, { useState } from "react";
import CustomNav from "./CustomNav";
import { useNavigate } from "react-router-dom";

const AddComponent = () => {
  const [pages, setPages] = useState([]);
  const navigate = useNavigate();

  const handleIncrement = () => {
    // Add a new page with a unique key and URL
    const newPage = { key: Date.now(), url: `/page/${Date.now()}` };
    setPages([...pages, newPage]);
    // Navigate to the new page
    navigate(newPage.url);
  };

  const handleDelete = (key) => {
    // Remove the page with the specified key
    const updatedPages = pages.filter((page) => page.key !== key);
    setPages(updatedPages);
  };

  return (
    <>
      {/* Custom new lists in navbar */}
        <div
          className="flex-column pt-3 border-top add-component text-nowrap"
          // style={{ flexGrow: 1 }}
        >
          {pages.map((page) => (
            <CustomNav
              key={page.key}
              index={page.key}
              url={page.url}
              onDelete={handleDelete}
            />
          ))}
        </div>

        {/* Button to add a new page in the navbar */}
        <div className="nav flex-column add-component px-0 ">
          <div
            className="nav-list border rounded d-flex align-items-center"
            onClick={handleIncrement}
          >
            <span className="material-symbols-outlined px-2 list-icon">
              add
            </span>
            New list
          </div>
      </div>
    </>
  );
};

export default AddComponent;
