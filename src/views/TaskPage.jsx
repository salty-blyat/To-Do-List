// TaskPage.js
import React, { useState, useEffect } from "react";
import AddList from "../components/AddList";
import ListItem from "../components/ListItem";
import { handleToggleCheckbox, handleRemoveItem, handleAddItem, sortItems } from "../Utils/Utils";


const TaskPage = ({ pageType, pageTitle, pageBackground, icon }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadedItems = JSON.parse(localStorage.getItem("items")) || [];
    const taskItems = loadedItems.filter((item) => item.page === pageType);
    setItems(sortItems(taskItems));
  }, [pageType]);
  
  return (
    <>
      <div
        className="my-day w-100 h-100 d-flex flex-column blurry-background px-5 py-5"
        style={{
          backgroundImage: `url(${pageBackground})`,
        }}
      >
        <div className="page-header d-flex">
          {icon && (
            <span
              className="material-symbols-outlined px-2"
              style={{ fontSize: "3rem" }}
            >
              {icon}
            </span>
          )}
          <h1>{pageTitle}</h1>
        </div>
        <div className="content w-100 h-100">
          {items.map((item, index) => (
            <ListItem
              key={index}
              item={item}
              onToggleCheckbox={() => handleToggleCheckbox(index, items, setItems)}
              onRemoveItem={() => handleRemoveItem(index, items, setItems)}
              isChecked={item.check}
            />
          ))}
        </div>
        <AddList pageType={pageType} onAddItem={(newItem) => handleAddItem(newItem, pageType, items, setItems)} />
      </div>
    </>
  );
};

export default TaskPage;
