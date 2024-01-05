import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MyDay from "../views/MyDay";
import Important from "../views/Important";
import Planned from "../views/Planned";
import Assign from "../views/Assign";
import Flag from "../views/Flag";
import Task from "../views/Task";
import ScreenSearch from '../views/ScreenSearch'
import DynamicPage from "../views/DynamicPage";
import { navLinksData } from "../Utils/Utils";

export const PageContext = React.createContext();

const Path = () => {
  const [pageTitles, setPageTitles] = useState(navLinksData.map((link) => link.label));
  const [pageIcons, setPageIcons] = useState(navLinksData.map((link) => link.icon));

  const updatePageTitle = (index, newTitle) => {
    setPageTitles((prevTitles) => {
      const updatedTitles = [...prevTitles];
      updatedTitles[index] = newTitle;
      return updatedTitles;
    });
  };

  return (
    <PageContext.Provider value={{ pageTitles, setPageTitles, updatePageTitle, pageIcons }}>
      <Routes>
        <Route
          path="/To-Do-List/"
          element={<MyDay icon={pageIcons[0]} pageTitle={pageTitles[0]} />}
        />
        <Route
          path="/important"
          element={<Important icon={pageIcons[1]} pageTitle={pageTitles[1]} />}
        />
        <Route
          path="/planned"
          element={<Planned icon={pageIcons[2]} pageTitle={pageTitles[2]} />}
        />
        <Route
          path="/assigned"
          element={<Assign icon={pageIcons[3]} pageTitle={pageTitles[3]} />}
        />
        <Route
          path="/flagged"
          element={<Flag icon={pageIcons[4]} pageTitle={pageTitles[4]} />}
        />
        <Route
          path="/tasks"
          element={<Task icon={pageIcons[5]} pageTitle={pageTitles[5]} />}
        />
        
        <Route path="/search" element={<ScreenSearch />} />
        <Route path="/page/:pageId" element={<DynamicPage pageTitle={"New List"}/>} />
      </Routes>
    </PageContext.Provider>
  );
};

export default Path;
