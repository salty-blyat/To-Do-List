import bgFlag from "../assets/bgFlag.jpg";
import React from "react";
import TaskPage from "./TaskPage";



const Flag = ({icon, pageTitle}) => {

  return (
    <>
      <TaskPage
      pageType="flag"
      pageTitle={pageTitle}
      pageBackground={bgFlag}
      icon={icon}
    />
    </>
  );
};

export default Flag;
