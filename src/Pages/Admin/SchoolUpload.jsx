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

            console.log(err);

            alert("Upload Failed");

        }

    };

    return (

        <div>

            <h1>School Upload</h1>

            <select

                value={classId}

                onChange={(e)=>setClassId(e.target.value)}

            >

                <option>Select Class</option>

                {

                    classes.map(item=>

                        <option

                            key={item.class_id}

                            value={item.class_id}

                        >

                            {item.class_name}

                        </option>

                    )

                }

            </select>

            <br/><br/>

            <select

                value={subjectId}

                onChange={(e)=>setSubjectId(e.target.value)}

            >

                <option>Select Subject</option>

                {

                    subjects.map(item=>

                        <option

                            key={item.subject_id}

                            value={item.subject_id}

                        >

                            {item.subject_name}

                        </option>

                    )

                }

            </select>

            <br/><br/>

            <input

                placeholder="PDF Title"

                value={title}

                onChange={(e)=>setTitle(e.target.value)}

            />

            <br/><br/>

            <input

                placeholder="Uploaded By"

                value={uploadedBy}

                onChange={(e)=>setUploadedBy(e.target.value)}

            />

            <br/><br/>

            <input

                type="file"

                accept=".pdf"

                onChange={(e)=>setPdf(e.target.files[0])}

            />

            <br/><br/>

            <button onClick={handleUpload}>

                Upload PDF

            </button>

        </div>

    );

}