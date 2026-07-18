import { sscExams } from "../data/sscExams";
import ExamDashboard from "../components/ExamDashboard";


function SSC() {
  return (
    <ExamDashboard
      title="SSC"
      exams={sscExams}
    />
  );
}

export default SSC;