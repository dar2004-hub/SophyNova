
import Home from "./Navigation_Pages/Home";
import Exam from "./Navigation_Pages/Exam"
import Resources from "./Navigation_Pages/Resources"
import Navbar from "./components/Navbar"
import About from "./Navigation_Pages/About"
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import UPSC from "./Navigation_Pages/UPSC";
import SSC from "./Navigation_Pages/SSC";
import Banking from "./Navigation_Pages/Banking";
import Railway from "./Navigation_Pages/Railway";
import Defence from "./Navigation_Pages/Defence";
import CSIT from "./Navigation_Pages/CSIT";
import AboutDeveloper from "./Pages/AboutDeveloper";
import Myjourney from "./Pages/Myjourney";
import UploadPDF from "./Pages/Admin/UploadPDF";
import PDFResourceDetails from "./ResourceDetail/PDFResourceDetail";
import PopularExams from "./components/PopularExams";
import ExamDashboard from "./components/ExamDashboard";
import ExamCards from "./components/ExamCards";
import Thought from "./components/Thought"





import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        
        <Route path="/Thought" element={<Thought/>}/>
        <Route path="/UploadPDF" element={<UploadPDF/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/upsc" element={<UPSC />} />
        <Route path="/ssc" element={<SSC/>}/>
        <Route path="/banking" element={<Banking/>}/>
        <Route path="/railway" element={<Railway/>}/>
        <Route path="/defence" element={<Defence/>}/>
        <Route path="/csit" element={<CSIT/>}/>
        <Route path="/aboutdeveloper" element={<AboutDeveloper />}/>
        <Route path="/Myjourney" element={<Myjourney/>}/>
        <Route path="/pdf-details"element={<PDFResourceDetails/>}/>
        <Route path ="/PopularExams"element={<ExamCards/>}/>
        
        
        
        
      </Routes>
    </>
  );
}

export default App;

