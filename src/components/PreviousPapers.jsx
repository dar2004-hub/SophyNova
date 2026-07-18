import { papers } from "../data/papers";
import { FaFilePdf, FaDownload } from "react-icons/fa";

function PreviousPapers() {
  return (
    <section className="bg-gray-950 text-white py-20">

      <h2 className="text-5xl font-bold text-center mb-4">
        Previous Year Papers
      </h2>

      <p className="text-center text-gray-400 mb-12">
        Download previous year question papers for various Government Exams.
      </p>

      {/* Search Box */}
      <div className="max-w-2xl mx-auto mb-12">
        <input
          type="text"
          placeholder="Search by Exam Name..."
          className="w-full p-4 rounded-xl bg-gray-800 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </div>

      {/* Paper Cards */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">

        {papers.map((paper, index) => (

          <div
            key={index}
            className="bg-gray-800 rounded-2xl p-6 flex justify-between items-center hover:bg-gray-700 transition"
          >

            <div className="flex items-center gap-4">

              <FaFilePdf className="text-red-500 text-4xl" />

              <div>

                <h3 className="text-2xl font-bold">
                  {paper.exam}
                </h3>

                <p className="text-gray-400">
                  {paper.year} • {paper.stage}
                </p>

              </div>

            </div>

            <a
              href={paper.pdf}
              className="bg-cyan-500 px-5 py-3 rounded-xl hover:bg-cyan-600 transition flex items-center gap-2"
            >
              <FaDownload />
              Download
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default PreviousPapers;