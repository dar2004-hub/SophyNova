import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { FaArrowDown, FaHeart, FaArrowLeft, FaGraduationCap,} from "react-icons/fa";

function Myjourney() {
   const navigate = useNavigate();
    return(



<section className="relative min-h-screen py-14 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-950 to-black overflow-x-hidden">

    <div className="max-w-6xl mx-auto w-full">

        {/* Section Heading */}

        <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
        >

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white">

                My <span className="text-red-500">Journey</span>

            </h2>

            <div className="w-24 sm:w-32 lg:w-40 h-1 bg-red-600 rounded-full mx-auto mt-4 sm:mt-6"></div>

            <p className="text-gray-400 mt-5 sm:mt-8 text-base sm:text-lg lg:text-xl">

                Every dream begins with a single step.

            </p>

        </motion.div>


        {/* Story Card */}

        <motion.div

            initial={{ opacity: 0, y: 100 }}

            whileInView={{ opacity: 1, y: 0 }}

            transition={{ duration: 1 }}

            viewport={{ once: true }}

           className="mt-10 sm:mt-16 lg:mt-20 bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-red-500/20 shadow-2xl p-5 sm:p-8 lg:p-16"

        >

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500 mb-6 sm:mb-10">

                How Everything Started...

            </h3>


            <p className="text-gray-300 leading-7 sm:leading-8 lg:leading-10 text-base sm:text-lg">

                Like thousands of students, I also started preparing for
                competitive examinations with dreams of building a better
                future. While studying, I realised something that almost
                every student experiences.

            </p>


            <p className="text-gray-300 leading-7 sm:leading-8 lg:leading-10 text-base sm:text-lg">

                Study materials were scattered across different websites,
                YouTube channels, Telegram groups and applications.
                Finding the right notes often took more time than actually
                studying.

            </p>


            <p className="text-gray-300 leading-7 sm:leading-8 lg:leading-10 text-base sm:text-lg">

                I also noticed that many useful resources were hidden behind
                expensive subscriptions or coaching platforms. Not every
                student has the same opportunities, yet every student has
                the right to learn and improve.

            </p>


            <p className="text-gray-300 leading-7 sm:leading-8 lg:leading-10 text-base sm:text-lg">

                Instead of accepting this as a normal problem, I decided to
                create a single platform where students could prepare
                efficiently without wasting time searching for resources.

            </p>


            <div className="mt-8 sm:mt-12 border-l-4 border-red-600 pl-4 sm:pl-8">

                <h4 className="text-2xl sm:text-3xl font-bold text-white">

                    That idea became...

                </h4>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-red-500 mt-3 sm:mt-4">

                    SophyNova

                </h1>

                <p className="text-gray-300 mt-5 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-9">

                    A learning platform created with one vision —

                    <span className="text-white font-semibold">

                        {" "}making Government Exam preparation simpler,
                        organised and accessible for everyone.

                    </span>

                </p>

            </div>

        </motion.div>

    </div>

    
    <div className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50">
    
        <button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-3 px-6 py-3 rounded-full bg-black/70 backdrop-blur-lg
                       border border-red-500 text-white hover:bg-red-600 hover:border-red-400 transition-all duration-300
                       shadow-lg shadow-red-900/30"
        >
    
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-semibold">
                Back
            </span>
    
        </button>
    </div>

</section>
    );
}

export default Myjourney;