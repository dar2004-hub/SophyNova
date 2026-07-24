import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Hero() {


const [dailyThought, setDailyThought] = useState(null);
const [search, setSearch] = useState("");
const [results, setResults] = useState([]);
const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();

  const handleSearch = async () => {

    if (search.trim() === "") {
        alert("Please enter something to search.");
        return;
    }

    try {

        setLoading(true);
        const API = import.meta.env.VITE_API_URL;

        console.log("API URL:", import.meta.env.VITE_API_URL);
        
          const res = await axios.get(
            `${API}/api/search/search`,
            {
                params: {
                    keyword: search}
                }
            );

        if (!res.data.success) {
            setResults([]);
            return;
        }

        const data = [];

        res.data.exams?.forEach(item =>
            data.push({
                type: "Exam",
                name: item.exam_name,
                id: item.exam_id
            })
        );

        res.data.subjects?.forEach(item =>
            data.push({
                type: "Subject",
                name: item.subject_name,
                id: item.subject_id
            })
        );

        res.data.resources?.forEach(item =>
            data.push({
                type: "Resource",
                name: item.title,
                id: item.resource_id
            })
        );

        res.data.books?.forEach(item =>
            data.push({
                type: "Book",
                name: item.title,
                id: item.book_id
            })
        );

        res.data.pdfs?.forEach(item =>
            data.push({
                type: "PDF",
                name: item.title,
                id: item.pdf_id
            })
        );

        res.data.videos?.forEach(item =>
            data.push({
                type: "Video",
                name: item.title,
                id: item.video_id
            })
        );

        res.data.previousPapers?.forEach(item =>
            data.push({
                type: "Previous Paper",
                name: item.title,
                id: item.paper_id
            })
        );

        res.data.mockTests?.forEach(item =>
            data.push({
                type: "Mock Test",
                name: item.title,
                id: item.mock_test_id
            })
        );

        res.data.onlineSources?.forEach(item =>
            data.push({
                type: "Online Source",
                name: item.title,
                id: item.source_id
            })
        );

        setResults(data);

    } catch (err) {

        console.log(err);

        setResults([]);

    } finally {

        setLoading(false);

    }


    useEffect(() => {

    const fetchDailyThought = async () => {

        try {

            const API = import.meta.env.VITE_API_URL;

            const res = await axios.get(
                `${API}/api/dailythought`
            );
            console.log("Daily Thought API:", res.data);

            setDailyThought(res.data.thought);

        } catch (err) {

            console.log(err);

        }

    };

    fetchDailyThought();

}, []);

};

  return (
    
    <section className="bg-gray-950 text-white min-h-[90vh] flex items-center justify-center px-4">

      <div className="text-center w-full max-w-5xl px-4 sm:px-6">

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          AI Powered Government
          <span className="text-cyan-400"> Exam Preparation</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 px-2">
          One Platform for UPSC, SSC, Banking, Railway,
          Defence, State PSC and CS/IT Aspirants.
        </p>

        <div className="mt-8">
          <input
             type="text" value={search} onChange={(e)=> setSearch(e.target.value)}
             onKeyDown={(e)=>{
              if(e.key==="Enter"){
                handleSearch();
              }
             }}
             placeholder="🔍 Search Previous Year Papers, Notes, Mock Tests..."
             className="w-full max-w-[700px] h-12 sm:h-14 px-5 sm:px-6 rounded-full bg-gray-300 text-red-500
             text-base sm:text-lg placeholder:text-sm sm:placeholder:text-lg placeholder:font-semibold placeholder:text-gray-500 shadow-lg focus:outline-none focus:ring-4 focus:ring-red-800 transition duration-200" />

             <div className="mt-6 w-full max-w-[800px] mx-auto">

                {loading && (
               <p className="text-cyan-400 text-lg">
                   Searching...
               </p>
             )}

    {!loading && results.length === 0 && search !== "" && (
        <div className="bg-gray-900 rounded-xl p-6 text-center">

            <h2 className="text-red-500 text-xl font-bold">
                😔 No Result Found
            </h2>

            <p className="text-gray-400 mt-3">
                Don't worry ❤️
            </p>

            <p className="text-gray-500">
                We are continuously adding study materials.
                This content will be available soon.
            </p>

        </div>



    )}

    

    {results.map((item, index) => (

        <div
            key={index}
            className="bg-gray-900 hover:bg-gray-800 rounded-xl p-4 mt-3 cursor-pointer duration-300"
        >

            <h2 className="text-cyan-400 font-bold">

                {item.type}

            </h2>

            <p className="text-white">

                {item.name}

            </p>

        </div>

    ))}

</div>

        <button onClick={handleSearch}  className="mt-4 sm:mt-5 bg-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-600 transition w-full sm:w-auto">
            Search
        </button>
        </div>

        <div  className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">

          <button className="bg-cyan-500 px-8 py-3 rounded-xl hover:bg-cyan-600 transition w-full sm:w-auto">
            Start Learning
          </button>
          
          

        </div>

        

      </div>

    </section>
  );
}

export default Hero;