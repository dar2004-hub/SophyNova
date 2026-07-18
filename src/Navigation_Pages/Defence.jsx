import ExamDashboard from "../components/ExamDashboard";
import { defenceExams } from "../data/defenceExams";

function Defence() {
  return (
    <ExamDashboard
      title="Defence"
      exams={defenceExams}
    />
  );
}



export default Defence;