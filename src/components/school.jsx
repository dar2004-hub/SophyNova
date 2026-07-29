import {  useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { useState } from "react";
import { useRef } from "react";
import {  SearchCheckIcon } from "lucide-react";


function SchoolPDF() {

    const navigate = useNavigate();

    const API = import.meta.env.VITE_API_URL;

    const [classItem, setClassItem] = useState(null);
    const [subject, setSubject] = useState(null);

    const [classes, setClasses] = useState([]);
    const [subjects, setSubjects] = useState([]);

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    //----------------------------------------------------
    // Load Classes
    //----------------------------------------------------

    useEffect(() => {

        axios.get(`${API}/api/school/classes`)

        .then((res)=>{

            const data = res.data.classes.map(item=>({

                value:item.class_id,
                label:item.class_name

            }));

            setClasses(data);

        })

        .catch(console.log);

    },[]);

    //----------------------------------------------------
    // Load Subjects
    //----------------------------------------------------

    useEffect(()=>{

        if(!classItem){

            setSubjects([]);
            setSubject(null);

            return;

        }

        axios

        .get(`${API}/api/school/subjects/${classItem.value}`)

        .then((res)=>{

            const data = res.data.subjects.map(item=>({

                value:item.subject_id,
                label:item.subject_name

            }));

            setSubjects(data);

        })

        .catch(console.log);

    },[classItem]);

    //----------------------------------------------------
    // Search PDFs
    //----------------------------------------------------

    const handleSearch = async()=>{

        if(!classItem){

            alert("Select Class");
            return;

        }

        if(!subject){

            alert("Select Subject");
            return;

        }

        try{

            setLoading(true);

            const res = await axios.get(

                `${API}/api/school/search`,

                {

                    params:{

                        class_id:classItem.value,
                        subject_id:subject.value

                    }

                }

            );

            setResults(res.data.pdfs || []);

        }

        catch(err){

            console.log(err);

            alert("No PDF Found");

            setResults([]);

        }

        finally{

            setLoading(false);

        }

    };

    //----------------------------------------------------
    // React Select Style
    //----------------------------------------------------

    const customStyle={

        control:(base)=>({

            ...base,

            background:"#181818",

            border:"2px solid red",

            borderRadius:"15px",

            padding:"6px"

        }),

        menu:(base)=>({

            ...base,

            background:"#222"

        }),

        option:(base,state)=>({

            ...base,

            background:state.isFocused?"red":"#222",

            color:"white"

        }),

        singleValue:(base)=>({

            ...base,

            color:"white"

        })

    };

    return(

<div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-red-950">

<div className="max-w-6xl mx-auto py-20 px-6">

<h1 className="text-center text-5xl font-extrabold text-white">

School

<span className="text-red-600">

 PDF Resources

</span>

</h1>

<p className="text-center text-gray-400 mt-4">

Search Notes, Worksheets, Assignments & Books

</p>

<div className="bg-[#111] mt-14 rounded-3xl p-10 border border-red-700 shadow-[0_0_35px_rgba(255,0,0,.3)]">

<div className="grid md:grid-cols-2 gap-8">

<div>

<h2 className="text-white font-bold mb-3">

Select Class

</h2>

<Select

options={classes}

value={classItem}

onChange={setClassItem}

styles={customStyle}

/>

</div>

<div>

<h2 className="text-white font-bold mb-3">

Select Subject

</h2>

<Select

options={subjects}

value={subject}

onChange={setSubject}

styles={customStyle}

/>

</div>

</div>

<div className="flex justify-center mt-10">

<button

onClick={handleSearch}

className="bg-red-600 hover:bg-red-700 px-10 py-4 rounded-full text-white font-bold flex items-center gap-3"

>

<Search/>

Search PDF

</button>

</div>

<div className="mt-12">

{

loading ?

<h2 className="text-center text-white">

Searching...

</h2>

:

results.length>0 ?

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

{

results.map((item)=>(

<div

key={item.pdf_id}

onClick={()=>{

    console.log("Clicked PDF:", item);

navigate(

"/school/pdf-details",

{

state:item

}

);

}}

className="bg-[#181818] p-6 rounded-2xl border border-red-600 hover:scale-105 cursor-pointer transition"

>

<h2 className="text-red-500 text-2xl font-bold">

{item.pdf_title}

</h2>


<p className="text-green-400 mt-4">

Uploaded By :

{item.uploaded_by || "Anonymous"}

</p>

</div>

))

}

</div>

:

<h2 className="text-center text-gray-500">

No PDF Found

</h2>

}

</div>

</div>

</div>

</div>

    );

}

export default SchoolPDF;