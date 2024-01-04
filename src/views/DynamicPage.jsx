// DynamicPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import TaskPage from "../views/TaskPage";
import bgDynamic from '../assets/bgDynamic.jpg'

const DynamicPage = ({ icon, pageTitle }) => {
  const { pageId } = useParams();

  return (
    <>
      <TaskPage
        pageType={pageId}
        pageTitle={pageTitle}
        pageBackground={bgDynamic}
        icon={icon}
      />
    </>
  );
};

export default DynamicPage;