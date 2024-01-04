import React from 'react';
import { useState, useEffect } from 'react';
import bgPlan from '../assets/bgPlan.jpg';
import TaskPage from './TaskPage';

const Planned = ({icon, pageTitle}) => {
  return (
    <>
      <TaskPage
      pageType="plan"
      pageTitle={pageTitle}
      pageBackground={bgPlan}
      icon={icon}
    />
    </>
  );
};

export default Planned;
