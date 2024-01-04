import React from 'react';
import TaskPage from './TaskPage';
import bgPlan from '../assets/bgPlan.jpg';

const Task = ({icon, pageTitle}) => {
  return (
    <TaskPage
      pageType="task"
      pageTitle={pageTitle}
      pageBackground={bgPlan}
      icon={icon}
    />
  );
};

export default Task;
