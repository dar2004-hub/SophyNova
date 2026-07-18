import ExamDashboard from "../components/ExamDashboard";
import { bankingExams } from "../data/bankingExams";

function Banking() {
  return (
    <ExamDashboard
      title="Banking"
      exams={bankingExams}
    />
  );
}

export default Banking;