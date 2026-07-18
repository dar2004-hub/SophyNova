import { FaBookOpen, FaClipboardCheck } from "react-icons/fa";

function LearningMockCards() {
  return (
    <section className="py-16 bg-gray-950">

      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Start Your Preparation
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-8">

        {/* Learning Card */}

        <div className="bg-gray-900 rounded-3xl p-10 border border-gray-700 hover:border-cyan-400 hover:shadow-cyan-500/30 hover:shadow-2xl transition duration-300">

          <div className="flex justify-center text-cyan-400 text-6xl mb-6">
            <FaBookOpen />
          </div>

          <h2 className="text-3xl text-center font-bold text-white">
            Learning Hub
          </h2>

          <ul className="mt-8 space-y-3 text-gray-300 text-lg">

            <li>📄 PDF Notes</li>

            <li>🎥 Video Lectures</li>

            <li>📚 Books</li>

            <li>📋 Syllabus</li>

            <li>🌐 Online Resources</li>

            <li>⭐ Reviews</li>

          </ul>

          <button className="mt-10 w-full bg-cyan-500 py-3 rounded-xl text-lg font-semibold hover:bg-cyan-600 transition">
            Start Learning
          </button>

        </div>

        {/* Mock Card */}

        <div className="bg-gray-900 rounded-3xl p-10 border border-gray-700 hover:border-green-400 hover:shadow-green-500/30 hover:shadow-2xl transition duration-300">

          <div className="flex justify-center text-green-400 text-6xl mb-6">
            <FaClipboardCheck />
          </div>

          <h2 className="text-3xl text-center font-bold text-white">
            Mock Practice
          </h2>

          <ul className="mt-8 space-y-3 text-gray-300 text-lg">

            <li>📝 Previous Year Questions</li>

            <li>📄 Practice PDF</li>

            <li>⏱ Live Timer</li>

            <li>🟢 Easy Level</li>

            <li>🟡 Moderate Level</li>

            <li>🔴 Hard Level</li>

          </ul>

          <button className="mt-10 w-full bg-green-500 py-3 rounded-xl text-lg font-semibold hover:bg-green-600 transition">
            Start Practice
          </button>

        </div>

      </div>

    </section>
  );
}

export default LearningMockCards;