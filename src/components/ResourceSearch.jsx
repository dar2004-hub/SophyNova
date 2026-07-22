import { useState } from "react";
import Select from "react-select";
import axios from "axios";
import { Search, SearchCheckIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";


function Resources() {

  
const navigate = useNavigate();  
const [exam, setExam] = useState(null);
const [results, setResults] = useState([]);
const [loading, setLoading] = useState(false);
const [search, setSearch]=useState("");
const [keyword, setkeyword]=("")

const [subjects, setSubjects]= useState([]);


    const exams = [

        { value:1,label:"UPSC"},
        { value:2,label:"SSC CGL"},
        { value:3,label:"SSC CHSL"},
        { value:4,label:"SSC MTS"},
        { value:5,label:"SSC JE"},
        { value:6,label:"IBPS PO"},
        { value:7,label:"IBPS Clerk"},
        { value:8,label:"RRB NTPC"},
        { value:9,label:"RRB Group D"},
        { value:10,label:"GATE CSE/IT"},
        { value:11,label:"State PSC"},
        { value:12,label:"Defence"}

    ];


const searchSubjects = async (value) => {
    console.log("Typing:", value);

    setSearch(value);

    if (!exam || value.trim() === "") {
        setSubjects([]);
        return;
    }

    try {

        const API = import.meta.env.VITE_API_URL;

        const res = await axios.get(
            `${API}/api/subjects/search`,
            {
                params: {
                    exam_id: exam.value,
                    keyword: value
                }
            }
            
        );

        setSubjects(res.data.subjects || []);

    } catch (err) {

        console.log(err);
        setSubjects([]);

    }

};



const handleSearch = async () => {

    if (!exam) {

        alert("Please Select Exam");
        return;

    }

    if (search.trim() === "")  {

        alert("Enter Subject");
        return;

    }

    try {

        setLoading(true);

        const API = import.meta.env.VITE_API_URL;

        const res = await axios.get(
            `${API}/api/resources/search`,
            
            {
                params: {
                    exam_id: exam.value,
                    keyword: search
                }
            }
        );


        setResults(res.data.resources || []);

    }

    catch (err) {

        console.log(err);

        alert("No Resources Found");

        setResults([]);

    }

    finally {

        setLoading(false);

    }


};
    return(

<div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-red-950">

    <div className="max-w-6xl mx-auto py-24 px-6">

        <div className="text-center">

            <h1 className="text-xl font-extrabold text-white">

              Find Your


                 <span className="text-red-600">

                  Study Resources

                 </span>

            </h1>

            <p className="mt-5 text-lg text-gray-300">

                Search Notes • Books • PYQs • Videos • Mock Tests • PDFs

            </p>

        </div>

        <div className="bg-[#111] mt-16 rounded-3xl shadow-[0_0_40px_rgba(255,0,0,.4)] border border-red-700 p-12">

            <div className="grid lg:grid-cols-2 gap-10">

                <div>

                    <h2 className=" flex justify center text-white text-sm font-bold mb-5">

                     🎯 Select Exam

                    </h2>

                    <Select options={exams} placeholder="Search Exam..." value={exam} onChange={setExam} styles={{
                         control:(base)=>({...base,background:"#181818",border:"2px solid red",padding:"10px",borderRadius:"15px",color:"white"}),
                         menu:(base)=>({...base,background:"#222"}),option:(base,state)=>({...base,background:state.isFocused?"red":"#222",color:"white"}),
                         singleValue:(base)=>({...base,color:"white"})
                        }
                    }/>

                </div>
                 <div>
                    <h2 className="text-white text-sm font-bold mb-3">
                        📚 Subject / Topic
                        </h2>
                       



                    <input type="text" placeholder="Type Subjects" value={search} onChange={(e)=>searchSubjects(e.target.value)}
                         className="w-full p-5 rounded-2xl bg-[#181818] border-2 border-red-600 text-white text-xl
                         placeholder:text-gray-500 outline-none focus:border-red-400 transition"/>


                         {subjects.length > 0 && (

<div className="absolute w-full bg-[#181818] border border-red-600 rounded-xl mt-2 max-h-60 overflow-y-auto z-50">

    {subjects.map((subject) => (

        <div
            key={subject.subject_id}
            onClick={() => {
                setSearch(subject.subject_name);
                setSubjects([]);
            }}
            className="px-4 py-3 cursor-pointer text-white hover:bg-red-600 transition"
        >

            {subject.subject_name}

        </div>

    ))}

</div>

)}
                </div>

            </div>

            <div className="flex justify-center mt-14">

                <button onClick={handleSearch} className="flex items-center gap-3 bg-red-600 hover:bg-red-700 px-4 py-3
                rounded-full text-sm font-extrabold shadow-[0_0_30px_rgba(255,0,0,.6)] transition duration-300 hover:scale-105">

                <Search size={3}/>SEARCH NOW

               </button>

            </div>

            <div className="mt-12">
                {loading ? (

                    <h2 className="text-center text-white text-2xl">
                        Searching...
                    </h2>

    ) : results.length > 0 ? (

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {results.map((item) => (

                <div

                    key={item.resource_id}

                    onClick={() => {

                        if (

                            item.resource_type_name !== "Video Lectures" &&
                            item.resource_type_name !== "Mock Test" &&
                            item.resource_type_name !== "Online Sources"

                        ) {

                            console.log("Clicked Item :", item);

                            navigate("/pdf-details", {

                                state: {

                                    exam_id: item.exam_id,

                                    subject_id: item.subject_id,

                                    resource_type_id: item.resource_type_id,

                                    
                                }

                            });

                        }

                    }}

                    className="bg-[#181818] border border-red-600  rounded-2xl p-6 shadow-lg cursor-pointer hover:scale-105
                               hover:shadow-[0_0_25px_rgba(255,0,0,.5)]transition-all duration-300">

                    <h2 className="text-red-500 text-2xl font-bold">
                         {item.resource_type_name}
                          </h2>

                    <h3 className="text-white mt-4 text-lg font-semibold">
                        {item.title}
                        </h3>

                    <p className="text-gray-400 mt-3">
                        {item.description}
                         </p>

                </div>

            ))}

        </div>

    ) : (

        <h2 className="text-center text-gray-400 text-xl">

            No Resources Found

        </h2>

    )}

            </div>
        
        </div>

    </div>

</div>

    )

}

export default Resources;