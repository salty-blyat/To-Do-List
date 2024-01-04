import React from "react";
import bgAssign from "../assets/bgAssign.jpg";
import TaskPage from "./TaskPage";
// import { navLinksData } from "../Utils/Utils";

const Assign = ({icon, pageTitle}) => {

  return (
    <>
      <TaskPage
      pageType="Assign"
      pageTitle={pageTitle}
      pageBackground={bgAssign}
      icon={icon}
    />
    </>
  );
};

export default Assign;
