import { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

function SchoolUpload() {

    const API = import.meta.env.VITE_API_URL;

    // -----------------------------
    // STATES
    // -----------------------------

    const [classes, setClasses] = useState([]);
    const [subjects, setSubjects] = useState([]);

    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState(null);

    const [pdfTitle, setPdfTitle] = useState("");
    const [uploadedBy, setUploadedBy] = useState("");

    const [pdf, setPdf] = useState(null);

    const [loading, setLoading] = useState(false);

    // -----------------------------
    // LOAD CLASSES
    // -----------------------------

    useEffect(() => {

        axios

            .get(`${API}/api/school/classes`)

            .then((res) => {

                const data = res.data.classes.map(item => ({

                    value: item.class_id,
                    label: item.class_name

                }));

                setClasses(data);

            })

            .catch((err) => {

                console.log(err);

                alert("Unable to Load Classes");

            });

    }, []);

    // -----------------------------
    // LOAD SUBJECTS
    // -----------------------------

    useEffect(() => {

        if (!selectedClass) {

            setSubjects([]);
            setSelectedSubject(null);

            return;

        }

        axios

            .get(`${API}/api/school/subjects/${selectedClass.value}`)

            .then((res) => {

                const data = res.data.subjects.map(item => ({

                    value: item.subject_id,
                    label: item.subject_name

                }));

                setSubjects(data);

            })

            .catch((err) => {

                console.log(err);

                alert("Unable to Load Subjects");

            });

    }, [selectedClass]);

    // -----------------------------
    // REACT SELECT STYLE
    // -----------------------------

    const customStyle = {

        control: (base) => ({

            ...base,

            background: "#181818",

            border: "2px solid #dc2626",

            borderRadius: "15px",

            padding: "6px",

            color: "white"

        }),

        menu: (base) => ({

            ...base,

            background: "#181818"

        }),

        option: (base, state) => ({

            ...base,

            background: state.isFocused ? "#dc2626" : "#181818",

            color: "white"

        }),

        singleValue: (base) => ({

            ...base,

            color: "white"

        })

        

    }
    function SchoolUpload() {

    // States

    // useEffect (Classes)

    // useEffect (Subjects)

    // customStyle

    // 👇 Paste Part 2 HERE

    return (

        

<div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-red-950 flex justify-center items-center px-4 py-8">

<div className="w-full max-w-3xl bg-[#151515] rounded-3xl border border-red-700 shadow-[0_0_40px_rgba(255,0,0,.35)] p-8">

<h1 className="text-4xl font-extrabold text-center text-white">

School

<span className="text-red-600">

 PDF Upload

</span>

</h1>

<p className="text-center text-gray-400 mt-3">

Upload Study Material for School Students

</p>

<div className="space-y-6 mt-10">

{/* ---------------- CLASS ---------------- */}

<div>

<label className="text-white font-semibold mb-2 block">

Select Class

</label>

<Select

options={classes}

value={selectedClass}

onChange={setSelectedClass}

placeholder="Select Class"

styles={customStyle}

/>

</div>

{/* ---------------- SUBJECT ---------------- */}

<div>

<label className="text-white font-semibold mb-2 block">

Select Subject

</label>

<Select

options={subjects}

value={selectedSubject}

onChange={setSelectedSubject}

placeholder="Select Subject"

styles={customStyle}

/>

</div>

{/* ---------------- PDF TITLE ---------------- */}

<div>

<label className="text-white font-semibold mb-2 block">

PDF Title

</label>

<input

type="text"

value={pdfTitle}

onChange={(e)=>setPdfTitle(e.target.value)}

placeholder="Enter PDF Title"

className="w-full p-4 rounded-xl bg-[#181818] border border-red-600 text-white outline-none focus:border-red-400"

/>

</div>

{/* ---------------- UPLOADED BY ---------------- */}

<div>

<label className="text-white font-semibold mb-2 block">

Uploaded By

<span className="text-gray-400 ml-2">

(Optional)

</span>

</label>

<input

type="text"

value={uploadedBy}

onChange={(e)=>setUploadedBy(e.target.value)}

placeholder="Teacher / Author Name"

className="w-full p-4 rounded-xl bg-[#181818] border border-red-600 text-white outline-none focus:border-red-400"

/>

</div>

{/* ---------------- PDF FILE ---------------- */}

<div>

<label className="text-white font-semibold mb-2 block">

Choose PDF

</label>

<input

id="schoolPDF"

type="file"

accept=".pdf"

onChange={(e)=>setPdf(e.target.files[0])}

className="w-full p-4 rounded-xl bg-[#181818] border border-red-600 text-white
file:bg-red-600
file:text-white
file:px-4
file:py-2
file:border-0
file:rounded-lg"

/>

</div>

{/* ---------------- BUTTON ---------------- */}

<button

onClick={handleUpload}

disabled={loading}

className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-700 py-4 rounded-xl text-xl font-bold transition"

>

{

loading ?

"Uploading PDF..."

:

"UPLOAD PDF"

}

</button>

</div>

</div>

</div>

);





};

}

export default SchoolUpload;



    
