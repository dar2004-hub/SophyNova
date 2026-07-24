import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 py-4 shadow-lg gap-4 lg:gap-0 overflow-x-hidden">

    {/*----------------------------------------------------------- Logo----------------------------------------------------------------------------------------------------------------------- */}
     
     
      <div className="flex items-center gap-3">

        <h1 className="text-xl sm:text-2xl font-bold">
          <span className="text-cyan-400">Sophy</span>
          <span className="text-gray-300">Nova</span>
        </h1>
      </div>

      {/*------------------------------------------------------------ Menu----------------------------------------------------------------- */}
      
      
      <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-base sm:text-lg">

        <li>
          <Link to="/" className="hover:text-cyan-400 transition">
            Home
          </Link>
        </li>

        <li>
          <Link to="/PopularExams" className="hover:text-cyan-400 transition">
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
       
      <ul className="flex justify-center">
      
        <li>
          
          <Link to="/UploadPDF" className="hover:text-cyan-400 transition">

            Upload

          </Link>
        </li>

      </ul>


      
       
      <ul className="flex justify-center">
      
        <li>
          
          <Link to="/Thought" className="hover:text-cyan-400 transition">

            Thought !

          </Link>
        </li>

      </ul>

      

      


  {/*------------------------------------------------------------ Buttons---------------------------------------------------------------------- */}


      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center">

        <Link to="/Login">
          <button className="bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600 transition duration-300 w-full sm:w-auto">
            Login
          </button>
        </Link>

        <Link to="/Register">
          <button className="bg-white text-black px-5 py-2 rounded-lg hover:bg-gray-300 transition duration-300 w-full sm:w-auto">
            Register
          </button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;