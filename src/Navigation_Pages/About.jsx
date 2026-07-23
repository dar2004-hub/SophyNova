import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";
import { FaBookOpen, FaGraduationCap, FaLaptopCode, FaUserGraduate, FaArrowRight, FaArrowLeft} from "react-icons/fa";

function AboutSophyNova() {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-red-950">

      {/* Background Glow */}

      <div className="absolute w-96 h-96 bg-red-600 blur-[180px] opacity-30 rounded-full -top-32 -left-20 animate-pulse"></div>

      <div className="absolute w-96 h-96 bg-red-500 blur-[180px] opacity-20 rounded-full bottom-0 right-0 animate-pulse"></div>

      {/* Floating Circles */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-24 left-32 w-4 h-4 bg-red-500 rounded-full animate-bounce"></div>

        <div className="absolute top-52 right-48 w-3 h-3 bg-white rounded-full animate-ping"></div>

        <div className="absolute bottom-32 left-1/3 w-5 h-5 bg-red-400 rounded-full animate-pulse"></div>

        <div className="absolute bottom-44 right-24 w-4 h-4 bg-red-600 rounded-full animate-bounce"></div>

      </div>

      
      <div className="absolute top-468 left-300 z-50">
      
          <button
              onClick={() => navigate(-1)}
              className="group flex items-center gap-3 px-6 py-3 rounded-full
                         bg-black/70 backdrop-blur-lg
                         border border-red-500
                         text-white
                         hover:bg-red-600
                         hover:border-red-400
                         transition-all duration-300
                         shadow-lg shadow-red-900/30"
          >
      
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
      
              <span className="font-semibold">
                  Back
              </span>
      
          </button>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >

          <h1 className="text-3xl font-extrabold text-white mb-3">

            Welcome To

            <span className="text-red-500"> SophyNova</span>

          </h1>

          <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-9">

            A modern learning platform built with one dream —
            <span className="text-red-400 font-semibold">
              {" "}
              quality education should never depend on money.
            </span>

          </p>

        </motion.div>

        {/* Mission Card */}

        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
          className="mt-20 bg-white/10 backdrop-blur-lg border border-red-700 rounded-3xl p-10 shadow-2xl"
        >

          <h2 className="text-3xl font-bold text-red-400 mb-8">

            Our Mission

          </h2>

          <p className="text-gray-200 text-sm leading-9">

            Thousands of talented students dream of becoming engineers,
            officers, teachers, researchers and government employees.

            <br /><br />

            Unfortunately, many students cannot afford expensive coaching
            institutes, premium subscriptions or costly study materials.

            <br /><br />

            <span className="text-red-400 font-bold">

              SophyNova was created to bridge that gap.

            </span>

            <br /><br />

            Our mission is to provide one powerful platform where every learner
            can access high-quality study resources completely free or at the
            lowest possible cost.

            <br /><br />

            Whether you're preparing for Government Exams, Competitive
            Examinations, Computer Science interviews, Programming, or Technical
            Subjects, SophyNova is here to help you learn with confidence.

            <br /><br />

            We believe that

            <span className="text-red-400 font-bold">

              talent should never stop because of financial problems.

            </span>

          </p>

        </motion.div>

        {/* Feature Cards */}

        <div className="grid grid-cols-3:grid-cols-4 gap-4 mt-20">

          <motion.div
            whileHover={{ scale: 1.04 }}
            className="bg-black/40 border border-red-700 rounded-2xl p-3"
          >

            <FaBookOpen className="text-4x1 text-red-500 mb-6" />

            <h2 className="text-white text-xl font-bold mb-4">

              Free Learning Resources

            </h2>

            <p className="text-gray-300 leading-8">

              Complete study notes, PYQs, PDFs, eBooks and handwritten notes
              available in one place.

            </p>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.04 }}
            className="bg-black/40 border border-red-700 rounded-2xl p-3"
          >

            <FaGraduationCap className="text-4xl text-red-500 mb-6" />

            <h2 className="text-white text-xl font-bold mb-4">

              Mock Tests

            </h2>

            <p className="text-gray-300 leading-8">

              Practice with real exam pattern tests designed for government and
              technical examinations.

            </p>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.04 }}
            className="bg-black/40 border border-red-700 rounded-2xl p-3"
          >

            <FaLaptopCode className="text-4xl text-red-500 mb-6" />

            <h2 className="text-white text-xl font-bold mb-4">

              Technical Learning

            </h2>

            <p className="text-gray-300 leading-8">

              Computer Science, Programming, AI, Data Science, Networking and
              interview preparation in one place.

            </p>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.04 }}
            className="bg-black/40 border border-red-700 rounded-2xl p-3"
          >

            <FaUserGraduate className="text-4xl text-red-500 mb-6" />

            <h2 className="text-white text-xl font-bold mb-4">

              Equal Opportunity

            </h2>

            <p className="text-gray-300 leading-8">

              Every student deserves the opportunity to succeed regardless of
              their financial background.

            </p>

          </motion.div>

        </div>

        {/* Quote */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-20 text-center"
        >

          <h2 className="text-2xl font-bold text-red-500">

            "Education is a Right, Not a Luxury."

          </h2>

          <p className="text-gray-300 mt-6 text-lg">

            Every learner deserves access to quality education.

          </p>

        </motion.div>

        {/* About Developer */}

        <div className="flex justify-center mt-20">

        <Link to ="/AboutDeveloper">

          <button className="group px-4 py-4 rounded-full bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white font-bold text-xs shadow-lg hover:scale-105 transition duration-300 flex items-center gap-2">
          
            About Developer

            <FaArrowRight className="group-hover:translate-x-2 transition" />
             

          </button>
        </Link>

        </div>

      </div>

    </section>
  );
}

export default AboutSophyNova;