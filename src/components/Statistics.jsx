import {
  FaUsers,
  FaBook,
  FaFilePdf,
  FaClipboardCheck,
} from "react-icons/fa";

import { statistics } from "../data/statistics";

function Statistics() {

  // Icons are kept here
  const icons = [
    <FaUsers size={20} className="text-cyan-400" />,
    <FaBook size={20} className="text-cyan-400" />,
    <FaFilePdf size={20} className="text-cyan-400" />,
    <FaClipboardCheck size={20} className="text-cyan-400" />
  ];

  return (

    <section className="bg-gray-900 text-white py-20">

      <h2 className="text-lg sm:text-xl font-bold text-center mb-14">
        Trusted By Thousands
      </h2>

      <div className="  max-w-7xl mx-auto grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6  gap-4">

        {statistics.map((item, index) => (

          <div
            key={index}
            className="  bg-gray-800 rounded-2xl p-1 sm:p-2 text-center shadow-xl hover:scale-105 hover:bg-cyan-700 transition duration-300"
          >

            <div className="flex justify-center mb-5">
              {icons[index]}
            </div>

            <h3 className="text-base sm:text-xl font-bold mb-3">
              {item.number}
            </h3>

            <p className="text-sm text-gray-300">
              {item.title}
            </p>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Statistics;