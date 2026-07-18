import { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

function UploadPDF() {

    const [exam, setExam] = useState(null);

    const [subject, setSubject] = useState(null);

    const [resourceType, setResourceType] = useState(null);

    const [subjects, setSubjects] = useState([]);

    const [title, setTitle] = useState("");

    const [pdf, setPdf] = useState(null);

    const [loading, setLoading] = useState(false);

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

    const resourceTypes = [

        { value:5,label:"PDF Notes" },
        { value:1,label:"Handwritten Notes" },
        { value:7,label:"Books" },
        { value:2,label:"Short Notes" },
        { value:3,label:"Important Topics" },
        { value:4,label:"Important Questions" },
        { value:9,label:"Previous Year Questions" }

    ];

    const customStyle={

        control:(base)=>({

            ...base,

            background:"#181818",

            border:"2px solid #dc2626",

            borderRadius:"15px",

            padding:"6px"

        }),

        menu:(base)=>({

            ...base,

            background:"#181818"

        }),

        option:(base,state)=>({

            ...base,

            background:state.isFocused?"#dc2626":"#181818",

            color:"white"

        }),

        singleValue:(base)=>({

            ...base,

            color:"white"

        })

    };

    useEffect(()=>{

        if(!exam){

            setSubjects([]);

            setSubject(null);

            return;

        }

        axios

        .get(`http://localhost:5000/api/subjects/${exam.value}`)

        .then((res)=>{

            const data=res.data.subjects.map(item=>({

                value:item.subject_id,

                label:item.subject_name

            }));

            setSubjects(data);

        })

        .catch((err)=>{

            console.log(err);

            alert("Unable to Load Subjects");

        });

    },[exam]);



    const handleUpload=async()=>{

        if(!exam){

            alert("Select Exam");

            return;

        }

        if(!subject){

            alert("Select Subject");

            return;

        }

        if(!resourceType){

            alert("Select Resource Type");

            return;

        }

        if(title.trim()===""){

            alert("Enter PDF Title");

            return;

        }

        if(!pdf){

            alert("Choose PDF");

            return;

        }

        const formData=new FormData();

        formData.append("exam_id",exam.value);

        formData.append("subject_id",subject.value);

        formData.append("resource_type_id",resourceType.value);

        formData.append("pdf_title",title);

        formData.append("pdf",pdf);

        try{

            setLoading(true);

            const res=await axios.post(

                "http://localhost:5000/api/pdfs/upload",

                formData,

                {

                    headers:{

                        "Content-Type":"multipart/form-data"

                    }

                }

            );

            alert(res.data.message);

            setExam(null);

            setSubject(null);

            setResourceType(null);

            setTitle("");

            setPdf(null);

            setSubjects([]);

            const file=document.getElementById("pdfFile");

            if(file){

                file.value="";
            }

        }

        catch(err){

            console.log(err);

            alert(

                err.response?.data?.message ||

                "Upload Failed"

            );

        }

        finally{

            setLoading(false);

        }

    };



    return(

<div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-red-950 flex justify-center items-center p-10">

<div className="w-full max-w-3xl bg-[#151515] rounded-3xl border border-red-700 shadow-[0_0_40px_rgba(255,0,0,.35)] p-10">

<h1 className="text-5xl font-extrabold text-center text-white">

Upload

<span className="text-red-600">

 PDF Resource

</span>

</h1>

<p className="text-center text-gray-400 mt-4">

Upload study material for SophyNova

</p>

<div className="space-y-6 mt-10">

<Select

options={exams}

value={exam}

onChange={setExam}

placeholder="Select Exam"

styles={customStyle}

/>

<Select

options={subjects}

value={subject}

onChange={setSubject}

placeholder="Select Subject"

styles={customStyle}

/>

<Select

options={resourceTypes}

value={resourceType}

onChange={setResourceType}

placeholder="Select Resource Type"

styles={customStyle}

/>

<input

type="text"

placeholder="Enter PDF Title"

value={title}

onChange={(e)=>setTitle(e.target.value)}

className="w-full p-4 rounded-xl bg-[#181818] border border-red-600 text-white outline-none focus:border-red-400"

/>

<input

id="pdfFile"

type="file"

accept=".pdf"

onChange={(e)=>setPdf(e.target.files[0])}

className="w-full p-3 rounded-xl bg-[#181818] border border-red-600 text-white file:bg-red-600 file:border-0 file:text-white file:px-4 file:py-2 file:rounded-lg"

/>

<button

onClick={handleUpload}

disabled={loading}

className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 py-4 rounded-xl text-2xl font-bold transition"

>

{

loading

?

"Uploading..."

:

"UPLOAD PDF"

}

</button>

</div>

</div>

</div>

    );

}

export default UploadPDF;