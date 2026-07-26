import { useEffect, useState } from "react";
import axios from "axios";

export default function SchoolUpload() {

    const API = import.meta.env.VITE_API_URL;

    const [classes, setClasses] = useState([]);

    const [subjects, setSubjects] = useState([]);

    const [classId, setClassId] = useState("");

    const [subjectId, setSubjectId] = useState("");

    const [title, setTitle] = useState("");

    const [uploadedBy, setUploadedBy] = useState("");

    const [pdf, setPdf] = useState(null);

    useEffect(() => {

        axios.get(`${API}/api/school/classes`)

        .then(res => {

            setClasses(res.data.classes);

        });

    }, []);

    useEffect(() => {

        if (!classId) return;

        axios

        .get(`${API}/api/school/subjects/${classId}`)

        .then(res => {

            setSubjects(res.data.subjects);

        });

    }, [classId]);

    const handleUpload = async () => {

        const formData = new FormData();

        formData.append("class_id", classId);

        formData.append("subject_id", subjectId);

        formData.append("pdf_title", title);

        formData.append("uploaded_by", uploadedBy);

        formData.append("pdf", pdf);

        try{

            const res = await axios.post(

                `${API}/api/school/upload`,

                formData

            );

            alert(res.data.message);

        }

        catch(err){

            console.log("FULL ERROR:", err);

    console.log("Response:", err.response);

    console.log("Data:", err.response?.data)

            console.log(err);

            alert("Upload Failed");

        }

    };

    return (

       

<div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-red-950 flex justify-center items-center px-5 py-10">

<div className="w-full max-w-3xl bg-[#121212] border border-red-700 rounded-3xl shadow-[0_0_40px_rgba(255,0,0,.35)] p-10">

<div className="text-center">

<h1 className="text-5xl font-extrabold text-white">

School

<span className="text-red-600">

 PDF Upload

</span>

</h1>

<p className="text-gray-400 mt-4">

Upload Study Materials for Students

</p>

</div>

<div className="space-y-7 mt-10">

<div>

<label className="block text-white font-semibold mb-2">

📘 Select Class

</label>

<select

value={classId}

onChange={(e)=>setClassId(e.target.value)}

className="w-full bg-[#1b1b1b] border border-red-600 rounded-xl p-4 text-white outline-none focus:ring-2 focus:ring-red-500"

>

<option value="">Select Class</option>

{

classes.map(item=>(

<option

key={item.class_id}

value={item.class_id}

>

{item.class_name}

</option>

))

}

</select>

</div>

<div>

<label className="block text-white font-semibold mb-2">

📚 Select Subject

</label>

<select

value={subjectId}

onChange={(e)=>setSubjectId(e.target.value)}

className="w-full bg-[#1b1b1b] border border-red-600 rounded-xl p-4 text-white outline-none focus:ring-2 focus:ring-red-500"

>

<option value="">Select Subject</option>

{

subjects.map(item=>(

<option

key={item.subject_id}

value={item.subject_id}

>

{item.subject_name}

</option>

))

}

</select>

</div>

<div>

<label className="block text-white font-semibold mb-2">

📝 PDF Title

</label>

<input

placeholder="Enter PDF Title"

value={title}

onChange={(e)=>setTitle(e.target.value)}

className="w-full bg-[#1b1b1b] border border-red-600 rounded-xl p-4 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-red-500"

/>

</div>

<div>

<label className="block text-white font-semibold mb-2">

👤 Uploaded By

<span className="text-gray-500 text-sm ml-2">

(Optional)

</span>

</label>

<input

placeholder="Your Name"

value={uploadedBy}

onChange={(e)=>setUploadedBy(e.target.value)}

className="w-full bg-[#1b1b1b] border border-red-600 rounded-xl p-4 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-red-500"

/>

</div>

<div>

<label className="block text-white font-semibold mb-2">

📄 Select PDF

</label>

<input

type="file"

accept=".pdf"

onChange={(e)=>setPdf(e.target.files[0])}

className="w-full bg-[#1b1b1b] border border-red-600 rounded-xl p-4 text-white
file:bg-red-600
file:text-white
file:border-0
file:px-5
file:py-2
file:rounded-lg
file:cursor-pointer"

/>

</div>

<div className="pt-4">

<button

onClick={handleUpload}

className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-xl py-4 rounded-xl shadow-[0_0_25px_rgba(255,0,0,.45)] hover:scale-[1.02] transition duration-300"

>

🚀 Upload PDF

</button>

</div>

</div>

</div>

</div>

);
}