import { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

function UploadSchoolPDF() {

    const API = import.meta.env.VITE_API_URL;

    const [classes, setClasses] = useState([]);
    const [subjects, setSubjects] = useState([]);

    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState(null);

    const [pdfTitle, setPdfTitle] = useState("");
    const [uploadedBy, setUploadedBy] = useState("");
    const [pdf, setPdf] = useState(null);

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const customStyle = {

        control: (base) => ({
            ...base,
            background: "#181818",
            border: "2px solid #dc2626",
            color: "white",
            borderRadius: "12px",
            padding: "6px"
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

    };

    useEffect(() => {

        axios.get(`${API}/api/school/classes`)

            .then((res) => {

                const data = res.data.classes.map(item => ({

                    value: item.class_id,
                    label: item.class_name

                }));

                setClasses(data);

            })

            .catch(() => {

                alert("Unable to load classes.");

            });

    }, []);

    useEffect(() => {

        if (!selectedClass) {

            setSubjects([]);
            setSelectedSubject(null);
            return;

        }

        axios.get(`${API}/api/school/subjects/${selectedClass.value}`)

            .then((res) => {

                const data = res.data.subjects.map(item => ({

                    value: item.subject_id,
                    label: item.subject_name

                }));

                setSubjects(data);

            })

            .catch(() => {

                alert("Unable to load subjects.");

            });

    }, [selectedClass]);

    const handleUpload = async () => {

        if (!selectedClass)
            return alert("Select Class");

        if (!selectedSubject)
            return alert("Select Subject");

        if (!pdfTitle.trim())
            return alert("Enter PDF Title");

        if (!pdf)
            return alert("Choose PDF");

        const formData = new FormData();

        formData.append("class_id", selectedClass.value);
        formData.append("subject_id", selectedSubject.value);
        formData.append("subject_name", selectedSubject.label);
        formData.append("pdf_title", pdfTitle);
        formData.append("uploaded_by", uploadedBy);
        formData.append("pdf", pdf);

        try {

            setLoading(true);
            setMessage("");

            const res = await axios.post(

                `${API}/api/school/upload`,

                formData,

                {

                    headers: {

                        "Content-Type": "multipart/form-data"

                    }

                }

            );

            setMessage("✅ PDF Uploaded Successfully.");

            setSelectedClass(null);
            setSelectedSubject(null);
            setSubjects([]);

            setPdfTitle("");
            setUploadedBy("");
            setPdf(null);

            document.getElementById("pdfFile").value = "";

        }

        catch (err) {

            setMessage(

                err.response?.data?.message ||

                "Upload Failed"

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

<div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-red-950 flex justify-center items-center p-6">

<div className="w-full max-w-3xl bg-[#151515] rounded-3xl border border-red-700 shadow-[0_0_35px_rgba(255,0,0,.35)] p-10">

<h1 className="text-5xl text-center font-bold text-white">

School <span className="text-red-600">PDF Upload</span>

</h1>

<p className="text-center text-gray-400 mt-3">

Upload Study Materials

</p>

<div className="space-y-6 mt-10">

<Select

options={classes}

value={selectedClass}

onChange={setSelectedClass}

placeholder="Select Class"

styles={customStyle}

/>

<Select

options={subjects}

value={selectedSubject}

onChange={setSelectedSubject}

placeholder="Select Subject"

styles={customStyle}

/>

<input

type="text"

placeholder="PDF Title"

value={pdfTitle}

onChange={(e)=>setPdfTitle(e.target.value)}

className="w-full p-4 rounded-xl bg-[#181818] border border-red-600 text-white outline-none"

/>

<input

type="text"

placeholder="Uploaded By (Optional)"

value={uploadedBy}

onChange={(e)=>setUploadedBy(e.target.value)}

className="w-full p-4 rounded-xl bg-[#181818] border border-red-600 text-white outline-none"

/>

<input

id="pdfFile"

type="file"

accept=".pdf"

onChange={(e)=>setPdf(e.target.files[0])}

className="w-full p-3 rounded-xl bg-[#181818] border border-red-600 text-white"

/>

<button

onClick={handleUpload}

disabled={loading}

className="w-full bg-red-600 hover:bg-red-700 rounded-xl py-4 text-2xl font-bold"

>

{

loading

?

"Uploading..."

:

"UPLOAD PDF"

}

</button>

{

message &&

<div className="text-center mt-4 text-lg font-semibold text-green-400">

{message}

</div>

}

</div>

</div>

</div>

    );

}

export default UploadSchoolPDF;

