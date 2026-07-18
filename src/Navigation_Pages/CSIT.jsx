import ExamDashboard from "../components/ExamDashboard";
import { csitExams } from "../data/csitExams";

function CSIT() {
  return (
    <ExamDashboard
      title="Computer Science & IT"
      exams={csitExams}
    />
  );
}

export default CSIT;