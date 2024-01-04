import bgMyday from "../assets/bgMyday.jpg";
import TaskPage from "./TaskPage";

const MyDay = ({pageTitle}) => {
  return (
    <TaskPage
      pageType="myday"
      pageTitle={pageTitle}
      pageBackground={bgMyday}
    />
  );
};

export default MyDay;
