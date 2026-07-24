import { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import { Upload } from "lucide-react";

function SchoolUpload() {

    const API = import.meta.env.VITE_API_URL;

    const [classes, setClasses] = useState([]);
    const [subjects, setSubjects] = useState([]);

    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState(null);

    const [title, setTitle] = useState("");
    const [pdf, setPdf] = useState(null);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchClasses();
    }, []);

    // -------------------- Fetch Classes --------------------

    const fetchClasses = async () => {

        try {

            const res = await axios.get(
                `${API}/api/school/classes`
            );

            const data = res.data.classes.map(item => ({
                value: item.class_id,
                label: item.class_name
            }));

            setClasses(data);

        } catch (err) {

            console.log(err);

        }

    };

    // -------------------- Fetch Subjects --------------------

    const fetchSubjects = async (classId) => {

        try {

            const res = await axios.get(
                `${API}/api/school/subjects/${classId}`
            );

            const data = res.data.subjects.map(item => ({
                value: item.subject_id,
                label: item.subject_name
            }));

            setSubjects(data);

        } catch (err) {

            console.log(err);

        }

    };

    // -------------------- Class Change --------------------

    const handleClassChange = (selected) => {

        setSelectedClass(selected);

        setSelectedSubject(null);

        fetchSubjects(selected.value);

    };

    // -------------------- Upload --------------------

    const handleUpload = () => {

        console.log("Class :", selectedClass);
        console.log("Subject :", selectedSubject);
        console.log("Title :", title);
        console.log("PDF :", pdf);

    };

    return (

        <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-red-950">

            <div className="max-w-3xl mx-auto py-24">

                <div className="bg-[#151515] rounded-3xl border border-red-600 p-10 shadow-[0_0_35px_rgba(255,0,0,.3)]">

                    <h1 className="text-4xl font-bold text-white text-center">
                        📚 Upload School Book
                    </h1>

                    {/* Class */}

                    <div className="mt-10">

                        <label className="text-white font-semibold">
                            Select Class
                        </label>

                        <Select
                            options={classes}
                            value={selectedClass}
                            onChange={handleClassChange}
                        />

                    </div>

                    {/* Subject */}

                    <div className="mt-6">

                        <label className="text-white font-semibold">
                            Select Subject
                        </label>

                        <Select
                            options={subjects}
                            value={selectedSubject}
                            onChange={setSelectedSubject}
                        />

                    </div>

                    {/* Title */}

                    <div className="mt-6">

                        <label className="text-white font-semibold">
                            Book Title
                        </label>

                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full mt-2 p-4 rounded-xl bg-[#202020] border border-red-600 text-white outline-none"
                            placeholder="Enter Book Title"
                        />

                    </div>

                    {/* PDF */}

                    <div className="mt-6">

                        <label className="text-white font-semibold">
                            Choose PDF
                        </label>

                        <input
                            type="file"
                            accept=".pdf"
                            onChange={(e) => setPdf(e.target.files[0])}
                            className="w-full mt-2 text-white"
                        />

                    </div>

                    {/* Upload Button */}

                    <div className="mt-10">

                        <button
                            onClick={handleUpload}
                            disabled={loading}
                            className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-xl text-white font-bold flex justify-center items-center gap-3 transition"
                        >

                            <Upload size={22} />

                            {loading ? "Uploading..." : "Upload Book"}

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default SchoolUpload;