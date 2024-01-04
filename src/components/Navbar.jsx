import React, { useState } from "react";
import { Link, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import "../styles/App.css";
import Searchbar from "./Searchbar";
import { navLinksData } from "../Utils/Utils";
import EditableItem from "./EditableItem";
import AddComponent from "./AddComponent";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleNavigate = () => {
    navigate("/search");
  };

  const [navLinks, setNavLinks] = useState(navLinksData);
  const [editMode, setEditMode] = useState(false);
  const [editableIndex, setEditableIndex] = useState(null);

  const toggleEditMode = (index) => {
    setEditMode(!editMode);
    setEditableIndex(index);
  };

  const handleSaveEdit = (newLabel) => {
    const updatedNavLinks = [...navLinks];
    updatedNavLinks[editableIndex].label = newLabel;
    setNavLinks(updatedNavLinks);
    setEditMode(false);
    setEditableIndex(null);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditableIndex(null);
  };

  const filteredLinks = searchTerm
    ? navLinks.filter((link) =>
        link.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : navLinks;

    return (
      <>
        <span onClick={handleNavigate}>
          <Searchbar handleSearch={handleSearch} />
        </span>
        <nav className={`nav flex-column py-3 pb-0`}>
          {filteredLinks.map((link, index) => (
            <CustomLink
              key={index}
              to={link.to}
              onDoubleClick={() => toggleEditMode(index)} // Add this line
              className={`nav-list border rounded d-flex align-items-center ${
                editMode && editableIndex === index ? "editable" : ""
              }`}
            >
              {editMode && editableIndex === index ? (
                <EditableItem
                  initialValue={link.label}
                  onSave={handleSaveEdit}
                  onCancel={handleCancelEdit}
                />
              ) : (
                <>
                  <span className="material-symbols-outlined px-2 list-icon">
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                  
                </>
              )}
            </CustomLink>
          ))}
    
          <AddComponent />
        </nav>
      </>
    );
}
    

function CustomLink ({ to, children, onDoubleClick, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  const handleDoubleClick = () => {
    if (onDoubleClick) {
      onDoubleClick();
    }
  };

  return (
    <li className={`${isActive ? "active" : ""}`}>
      <Link to={to} onDoubleClick={handleDoubleClick} {...props}>
        {children}
      </Link>
    </li>
  );
};

