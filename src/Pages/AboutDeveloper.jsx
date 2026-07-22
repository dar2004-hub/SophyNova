import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import developer from "../assets/images/developer.jpg";

import { FaArrowDown, FaHeart, FaArrowLeft, FaGraduationCap,} from "react-icons/fa";

function AboutDeveloper() {
    const navigate = useNavigate();

    return (

<div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-red-950 overflow-hidden relative">



{/* ================================================== Animated Background======================================================================= */}



<div className="absolute w-[450px] h-[450px] bg-red-700 rounded-full blur-[180px] opacity-20 -top-36 -left-32 animate-pulse"></div>

              <div className="absolute w-[350px] h-[350px] bg-red-500 rounded-full blur-[180px] opacity-20 bottom-0 right-0 animate-pulse"></div>

              <div className="absolute w-[250px] h-[250px] bg-white rounded-full blur-[150px] opacity-5 top-1/2 left-1/2"></div>

{/*---------------------------------------------------- Floating Particles------------------------------------------------------------- */}



                <div className="absolute inset-0 overflow-hidden">

                <div className="absolute top-20 left-20 w-4 h-4 rounded-full bg-red-500 animate-bounce"></div>

                <div className="absolute top-60 right-40 w-3 h-3 rounded-full bg-white animate-pulse"></div>

                <div className="absolute bottom-40 left-1/3 w-5 h-5 rounded-full bg-red-400 animate-ping"></div>

                <div className="absolute bottom-20 right-20 w-4 h-4 rounded-full bg-red-600 animate-bounce"></div>

                <div className="absolute top-40 left-1/2 w-2 h-2 rounded-full bg-red-300 animate-pulse"></div>

                </div>

{/* -------------------------------------------------------------- HERO SECTION--------------------------------------------------------------------- */}


<div className="relative z-20 max-w-7xl mx-auto px-8 py-20">

           <motion.div initial={{opacity:0,y:80}} animate={{opacity:1,y:0}}
            transition={{duration:1}} className="grid lg:grid-cols-2 gap-16 items-center">

{/* --------------------------------------------------------------- LEFT SIDE ----------------------------------------------------------------- */}


<div>

    <div className="relative w-72 h-72">

        <img src={developer} alt="Developer"className="rounded-full object-cover w-full h-full border-[6px] border-red-600 shadow-[0_0_60px_rgba(255,0,0,.45)]"/>

        <div className="absolute -bottom-3 -right-3 bg-red-600 px-5 py-2 rounded-full text-white font-semibold">

            Mission

        </div>

    </div>

</div>

{/* ------------------------------------------------------------------RIGHT SIDE-------------------------------------------------------------- */}



<div className="absolute top-162 left-300 z-50">

    <button onClick={() => navigate(-1)} className="group flex items-center gap-3 px-6 py-3 rounded-full bg-black/70 backdrop-blur-lg
                   border border-red-500 text-white hover:bg-red-600 hover:border-red-400 transition-all duration-300 shadow-lg shadow-red-900/30">

            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-semibold">
                Back
            </span>

    </button>
</div>

<div>

    <p className="text-red-500 font-semibold uppercase tracking-[6px]">
        Welcome To

    </p>

    <h1 className="text-6xl font-black text-white mt-4">
        Sophy<span className="text-red-500">Nova</span>
    </h1>

    <h2 className="text-3xl text-white font-bold mt-8">
   
    Hi,
    
    I'm Darshan Chaubey
    
    </h2>
    
    <p className="text-gray-300 mt-8 text-lg leading-9">
    
    Thank you for visiting SophyNova.
    
    This platform is much more than a personal project—
    
    it represents a dream to make quality education more accessible for students who are determined to learn and build a better future.
    
    </p>



    <div className="flex gap-5 mt-10">

        <div className="bg-red-600 px-6 py-4 rounded-xl flex items-center gap-3 text-white shadow-xl">

            <FaGraduationCap/>
                Education First

        </div>

        <div className="bg-black/40 border border-red-600 px-6 py-4 rounded-xl flex items-center gap-3 text-white">

            <FaHeart className="text-red-500"/>

                Built With Purpose
        </div>



    </div>



        <div className="mt-12">

            <Link to = "/Myjourney">

                <button className=" bg-gradient-to-r from-red-700 via-red-600 to-red-500 px-8 py-4 rounded-xl text-white font-bold hover:scale-105 transition duration-300 flex items-center gap-5">
                    Explore My Journey
                    <FaArrowDown/>

                </button>

            </Link>

            </div>

        </div>

         </motion.div>

    </div>

</div> );
}
export default AboutDeveloper;