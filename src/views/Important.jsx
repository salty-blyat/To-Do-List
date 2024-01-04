import bgImportant from "../assets/bgImportant.jpg";
import TaskPage from "./TaskPage";


const Important = ({icon, pageTitle}) => {
  return (
    <TaskPage
      pageType="import"
      pageTitle={pageTitle}
      pageBackground={bgImportant}
      icon={icon}
    />
  );
};

export default Important;
