import { FaSearch } from "react-icons/fa";

function MockSearch() {
  return (
    <section className="bg-gradient-to-r from-gray-950 via-gray-900 to-black py-16">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-extrabold text-center text-white">

          📝 SophyNova Mock Exam Portal

        </h1>

        <p className="text-center text-gray-400 text-xl mt-5">

          Practice • Analyze • Improve

        </p>

        <div className="flex justify-center mt-10">

          <input
            type="text"
            placeholder="Search UPSC, SSC, Banking, GATE..."
            className="w-[650px] h-14 rounded-l-xl bg-gray-800 px-6 text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <button className="bg-cyan-500 px-8 rounded-r-xl hover:bg-cyan-600 transition">

            <FaSearch />

          </button>

        </div>

      </div>

    </section>
  );
}

export default MockSearch;