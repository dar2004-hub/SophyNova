import ExamDashboard from "../components/ExamDashboard";
import { railwayExams } from "../data/railwayExams";

function Railway() {
  return (
    <ExamDashboard
      title="Railway"
      exams={railwayExams}
    />
  );
}

export default Railway;