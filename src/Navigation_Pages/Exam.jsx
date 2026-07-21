import { Link } from "react-router-dom";
import ExamDashboard from "../components/ExamDashboard";
import ExamCards from "../components/ExamCards";
import CourseCard from "../components/CourseCard";


console.log("Exam Loader")



function Exam() {
  return (
    <>
      <ExamCards/>
      <CourseCard/>
   
      <ExamDashboard/>

    
    </>
  );
}

console.log("Exam Loader")
export default Exam;