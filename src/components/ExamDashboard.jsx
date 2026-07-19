import { useState } from "react";
import { FaSearch, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";


function ExamDashboard({ title, exams = [] }) {
  const navigate = useNavigate ();

  const [examName, setExamName] = useState("");
  const [examDate, setExamDate] = useState("");
  const filteredExams = (exams || []).filter((exam) => {

    const matchName =
      exam.examName.toLowerCase().includes(examName.toLowerCase());

    const matchDate =
      examDate === "" || exam.examDate === examDate;

    return matchName && matchDate;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-black text-white px-4 py-6 sm:px-6 lg:px-10">

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-cyan-400 mb-8 sm:mb-12">
        {title} Examination Portal
      </h1>

      {/* Search Box */}
      <div className="max-w-5xl mx-auto bg-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 mb-8 sm:mb-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">

          {/* Exam Name */}
          <div className="relative">

            <FaSearch className="absolute left-4 top-4 text-gray-400" />

            <input
              type="text"
              placeholder="Search Exam Name..."
              value={examName}
              onChange={(e) => setExamName(e.target.value)}
              className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-xl bg-gray-800 text-sm sm:text-base outline-none border border-gray-700 focus:border-cyan-400"
            />

          </div>


          

          {/* Date */}
          <div className="relative">

            <FaCalendarAlt className="absolute left-4 top-4 text-gray-400" />

            <input
              type="date"
              value={examDate}
              onChange={(e) => setExamDate(e.target.value)}
              className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-xl bg-gray-800 text-sm sm:text-base outline-none border border-gray-700 focus:border-cyan-400"
            />

          </div>

          {/* Button */}
          <button className="bg-cyan-500 rounded-xl py-3 text-base sm:text-lg font-semibold hover:bg-cyan-600 transition w-full">
            Search
          </button>

        </div>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-8">

        {filteredExams.length > 0 ? (

        filteredExams.map((exam) => (
      
          <div
            key={exam.id}
            className="bg-gray-900 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-gray-700 hover:border-cyan-400 hover:shadow-cyan-500/20 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
      
            <h2 className="text-xl sm:text-2xl font-bold text-cyan-400">
              {exam.examName}
            </h2>
      
            <p className="mt-4">
              📅 Exam Date :
              <span className="text-gray-300"> {exam.examDate}</span>
            </p>
      
            <p>
              🎓 Qualification :
              <span className="text-gray-300"> {exam.qualification}</span>
            </p>
      
            <p>
              🏛 Conducted By :
              <span className="text-gray-300"> {exam.organization}</span>
            </p>
      
            <button className="mt-6 w-full bg-cyan-500 py-3 rounded-xl hover:bg-cyan-600 transition">
              Explore
            </button>
      
            <div className="mt-8 border-t border-gray-700 pt-6">
      
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      
                <div className="bg-gray-800 rounded-xl p-4 sm:p-5">
      
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-400">
                    📚 Learning Hub
                  </h3>
      
                  <ul className="mt-4 text-gray-300 space-y-2">
                    <li>📄 PDF Notes</li>
                    <li>🎥 Video Lectures</li>
                    <li>📚 Books</li>
                    <li>🌐 Online Resources</li>
                    <li>📋 Syllabus</li>
                  </ul>
      
                  <button className="mt-5 w-full bg-cyan-500 py-2 sm:py-3 rounded-lg hover:bg-cyan-600 transition">
                    Start Learning
                  </button>
      
                </div>
      
                <div className="bg-gray-800 rounded-xl p-5">
      
                  <h3 className="text-xl font-bold text-green-400">
                    📝 Mock Practice
                  </h3>
      
                  <ul className="mt-4 text-gray-300 space-y-2">
                    <li>📄 Previous Papers</li>
                    <li>📑 Mock PDF</li>
                    <li>⏱ Timer</li>
                    <li>🟢 Easy</li>
                    <li>🟡 Moderate</li>
                    <li>🔴 Hard</li>
                  </ul>
      
                  <button className="mt-5 w-full bg-green-500 py-2 sm:py-3 rounded-lg hover:bg-green-600 transition">
                    Start Practice
                  </button>
      
                </div>
      
              </div>
      
            </div>
      
          </div>
      
        ))

) : (

  <div className="col-span-3 text-center py-20">

    <h2 className="text-4xl font-bold text-red-500">
      Exam Available Soon...
    </h2>

    <p className="text-gray-400 mt-4">
      No matching exam found in our database.
    </p>

  </div>

)}

<div className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50">
      
          <button
              onClick={() => navigate(-1)}
              className="group flex items-center gap-3 px-6 py-3 rounded-full bg-black/70 backdrop-blur-lg border border-red-500
                         text-white hover:bg-red-600 hover:border-red-400 transition-all duration-300 shadow-lg shadow-red-900/30">
      
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
      
              <span className="font-semibold">
                  Back
              </span>
      
          </button>
      </div>


</div>

</div>
);
}

export default ExamDashboard;