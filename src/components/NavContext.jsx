import React, { createContext, useContext, useState } from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [updatedNavLinks, setUpdatedNavLinks] = useState([]);

  const updateNavLinks = (newLinks) => {
    setUpdatedNavLinks(newLinks);
  };

  return (
    <NavContext.Provider value={{ updatedNavLinks, updateNavLinks }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => useContext(NavContext);
