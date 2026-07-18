import ExamDashboard from "../components/ExamDashboard";
import { upscExams } from "../data/upscExams";

function UPSC() {
  return (
    <ExamDashboard
      title="UPSC"
      exams={upscExams}
    />
  );
}

export default UPSC;