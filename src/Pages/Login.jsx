import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      
      
      const API_URL= import.meta.env.VIT_API_URL;
      const res = await axios.post(
        `${API_URL}/api/auth/login`,
        formData
      );

      localStorage.setItem("token", res.data.token);

      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message || "Login Failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center px-4">

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full grid md:grid-cols-2">

        {/* Left Side */}

        <div className="hidden md:flex flex-col justify-center items-center bg-blue-700 text-white p-10">

          <img
            src="/login.svg"
            alt="Login"
            className="w-80 mb-8"
          />

          <h1 className="text-4xl font-bold mb-4">
            Welcome to SophyNova
          </h1>

          <p className="text-center text-lg opacity-90">
            Learn. Practice. Succeed.
            <br />
            Your Complete Government Exam Preparation Platform.
          </p>

        </div>

        {/* Right Side */}

        <div className="p-10">

          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back 👋
          </h2>

          <p className="text-gray-500 mb-8">
            Login to continue learning.
          </p>

          {error && (
            <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-5">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            {/* Email */}

            <div className="mb-5 relative">

              <FaEnvelope className="absolute top-4 left-4 text-gray-400" />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 outline-none"
              />

            </div>

            {/* Password */}

            <div className="mb-5 relative">

              <FaLock className="absolute top-4 left-4 text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border rounded-xl py-3 pl-12 pr-12 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <button
                type="button"
                className="absolute top-4 right-4"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

            <div className="flex justify-between mb-6">

              <label className="flex items-center gap-2">

                <input type="checkbox" />

                Remember Me

              </label>

              <Link
                to="/forgot-password"
                className="text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>

            </div>

            <button
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
            >
              {loading ? "Logging In..." : "Login"}
            </button>

          </form>

          <p className="mt-8 text-center">

            Don't have an account?

            <Link
              to="/register"
              className="text-blue-600 font-semibold ml-2"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;