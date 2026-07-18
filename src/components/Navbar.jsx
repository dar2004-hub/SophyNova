import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white flex justify-between items-center px-8 py-4 shadow-lg">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src="/Sophy_Logo.png"
          alt="SophyNova Logo"
          className="w-22 h-22 hover:scale-230 transition duration-300"
        />

        <h1 className="text-2xl font-bold">
          <span className="text-cyan-400">Sophy</span>
          <span className="text-gray-300">Nova</span>
        </h1>
      </div>

      {/* Menu */}
      <ul className="flex gap-8 text-lg">

        <li>
          <Link to="/" className="hover:text-cyan-400 transition">
            Home
          </Link>
        </li>

        <li>
          <Link to="/Exam" className="hover:text-cyan-400 transition">
            Exams
          </Link>
        </li>

        <li>
          <Link to="/Resources" className="hover:text-cyan-400 transition">
            Resources
          </Link>
        </li>

        <li>
          <Link to="/About" className="hover:text-cyan-400 transition">
            About
          </Link>
        </li>

      </ul>
       
      <ul>
      
        <li>
          <Link to="/About" className="hover:text-cyan-400 transition">
            About
          </Link>
        </li>

      </ul>


      {/* Buttons */}
      <div className="flex gap-4">

        <Link to="/Login">
          <button className="bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600 transition duration-300">
            Login
          </button>
        </Link>

        <Link to="/Register">
          <button className="bg-white text-black px-5 py-2 rounded-lg hover:bg-gray-300 transition duration-300">
            Register
          </button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;