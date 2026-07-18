import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {FaUser, FaEnvelope, FaPhone, FaLock, FaEye, FaEyeSlash,} from "react-icons/fa";
import { motion } from "framer-motion";
import api from "../services/api"


function Register() {

    const navigate = useNavigate();
    const [loading, setLoading]= useState(false);
    const [formData, setFormData]= useState({
        full_name:"",
        email:"",
        mobile:"",
        password:"",
        confirmPassword:""


    });

    
    const handleChange= (e)=>{
    setFormData({
        ...formData,
        [e.target.name]:e.target.value
    })
  }
  const handleSubmit= async(e)=> {        
  e.preventDefault();

  console.log("Button Clicked")

if (formData.password !== 
    formData.confirmPassword) {
    alert("Passwords do not match");
    return;
}
try {
    const res = await api.post("/auth/register",{
        full_name:formData.full_name,
        email:formData.email,
        mobile:formData.mobile,
        password:formData.password
    });
    console.log(res.data);
    alert("Reistration Successful!");}
    catch(err){
        alert(err.response?.data?.message||"Registration Failed");
    }

};




  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const getStrength = () => {

    const password = formData.password

    if (password.length < 6)
      return {
        text: "Weak",
        color: "bg-red-500",
        width: "w-1/3",
      };

    if (password.length < 10)
      return {
        text: "Medium",
        color: "bg-yellow-500",
        width: "w-2/3",
      };

    return {
      text: "Strong",
      color: "bg-green-500",
      width: "w-full",
    };
  };

return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-red-950 flex items-center justify-center px-6 py-10">

{/*--------------------------------------------------- Background Glow -----------------------------------------------------*/}

<div className="absolute w-96 h-96 bg-red-600 rounded-full blur-[160px] opacity-30 -top-24 -left-24 animate-ping"></div>

<div className="absolute w-96 h-96 bg-blue-600 rounded-full blur-[170px] opacity-20 bottom-0 right-0 animate-pulse"></div>




<div className="absolute inset-0 overflow-hidden">

    <div className="absolute top-24 left-32 w-5 h-5 bg-red-500 rounded-full animate-pulse"></div>

    <div className="absolute top-72 right-40 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>

    <div className="absolute bottom-24 left-1/3 w-4 h-4 bg-white rounded-full animate-pulse"></div>

    <div className="absolute bottom-40 right-1/4 w-6 h-6 bg-red-400 rounded-full animate-pulse"></div>

</div>

{/* Main Container */}
      {/* Main Container */}

      <div className="relative z-5 w-full max-w-4xl grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">

        {/* LEFT PANEL */}

        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-red-700 via-red-900 to-black p-12">

          <h1 className="text-5xl font-extrabold text-white mb-6">
            SophyNova
          </h1>

          <p className="text-gray-200 text-lg leading-8">
            India's Complete Government Exam Preparation Platform
          </p>

          <div className="mt-12 space-y-6">

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                📚
              </div>

              <div>
                <h3 className="text-white font-bold">Study Notes</h3>
                <p className="text-gray-300 text-sm">
                  Complete handwritten and short notes.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                🎥
              </div>

              <div>
                <h3 className="text-white font-bold">Video Lectures</h3>
                <p className="text-gray-300 text-sm">
                  Learn from curated YouTube content.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                📝
              </div>

              <div>
                <h3 className="text-white font-bold">Mock Tests</h3>
                <p className="text-gray-300 text-sm">
                  Practice with exam-level tests.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                📄
              </div>

              <div>
                <h3 className="text-white font-bold">Previous Papers</h3>
                <p className="text-gray-300 text-sm">
                  Solve PYQs of every exam.
                </p>
              </div>
            </div>

          </div>

        </div>

{/*----------------------------------------- RIGHT PANEL-------------------------------------------------------------- */}

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 lg:p-14">

          <div className="text-center mb-8">

            <h2 className="text-4xl font-bold text-white">
              Create Account
            </h2>

            <p className="text-gray-300 mt-3">
              Join SophyNova & Start Your Learning Journey
            </p>

          </div>

          <form onSubmit={handleSubmit} className="space-y-6" >

            {/* Full Name */}

            <div className="relative">

              <FaUser className="absolute left-4 top-5 text-red-400" />

              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full bg-black/30 text-white border border-gray-600 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-red-500 transition"
              />

            </div>

            {/* Email */}

            <div className="relative">

              <FaEnvelope className="absolute left-4 top-5 text-red-400" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full bg-black/30 text-white border border-gray-600 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-red-500 transition"
              />

            </div>

            {/* Mobile */}

            <div className="relative">

              <FaPhone className="absolute left-4 top-5 text-red-400" />

              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="w-full bg-black/30 text-white border border-gray-600 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-red-500 transition"
              />

            </div>

            {/* Password */}

            <div className="relative">

              <FaLock className="absolute left-4 top-5 text-red-400" />

              <input
                type={showPassword?"text":"password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full bg-black/30 text-white border border-gray-600 rounded-xl py-4 pl-12 pr-12 focus:outline-none focus:border-red-500 transition"
              />

              <FaEye className="absolute right-5 top-5 text-gray-400 cursor-pointer" />

            </div>

            {/* Confirm Password */}

            <div className="relative">

              <FaLock className="absolute left-4 top-5 text-red-400" />

              <input
                type={"showConfirmPassword"?"text":
                "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full bg-black/30 text-white border border-gray-600 rounded-xl py-4 pl-12 pr-12 focus:outline-none focus:border-red-500 transition"
              />

              <FaEye className="absolute right-5 top-5 text-gray-400 cursor-pointer" />

            </div>

            {/* Button */}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 via-red-500 to-orange-500 py-4 rounded-xl text-white font-bold text-lg hover:scale-[1.02] transition duration-300 shadow-lg shadow-red-700/30"
            >
            {loading? "Creating Account....": "🚀 Create My Account"}
            </button>

          </form>

          <p className="text-center text-gray-300 mt-8">

            Already have an account?

            <Link
              to="/login"
              className="text-red-400 font-semibold ml-2 hover:text-red-300"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}



export default Register;