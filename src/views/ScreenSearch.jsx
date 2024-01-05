import React from "react";
import bgMyday from "../assets/bgMyday.jpg";
import { useState, useEffect } from "react";
import ListItem from "../components/ListItem";
import Searchbar from "../components/Searchbar";
import { handleRemoveItem } from "../Utils/Utils";

const ScreenSearch = ({ icon }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredItems = items.filter((item) =>
    item.text.toLowerCase().includes(searchTerm)
  );

  useEffect(() => {
    const loadedItems = JSON.parse(localStorage.getItem("items")) || [];
    const taskItems = loadedItems;
    setItems(sortItems(taskItems));
  }, []);

  const sortItems = (items) => {
    return items.slice().sort((a, b) => a.check - b.check);
  };

  const handleToggleCheckbox = (index) => {
    const updatedItems = items.map((item, idx) =>
      idx === index ? { ...item, check: !item.check } : item
    );
    setItems(sortItems(updatedItems));
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  return (
    <>
      <div
        className="my-day w-100 h-100 d-flex flex-column blurry-background px-5 py-5"
        style={{
          color:'black',
          backgroundImage: `url(${bgMyday})`,
        }}
      >
       <div className="page-header d-flex">
          <span className="material-symbols-outlined px-2" style={{ fontSize: '3rem' }}>
           search
          </span>
          <h1>Search</h1>
        </div>
        <Searchbar handleSearch={handleSearch} />
        <div className="list w-100 h-100">
          {/* Conditionally render the filtered items only if search term is present */}
          {
            // searchTerm &&
          filteredItems.map((item, index) => (
              <ListItem
                key={index}
                item={item}
                onRemoveItem={() => handleRemoveItem(index, items, setItems)}
                onToggleCheckbox={() => handleToggleCheckbox(index)}
                isChecked={item.check}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default ScreenSearch;
