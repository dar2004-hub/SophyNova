import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function SchoolPDFDetails() {

    const location = useLocation();
    const navigate = useNavigate();

    const state = location.state;

    const [pdf, setPdf] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        if (!state) {

            setError("No PDF Selected");
            setLoading(false);
            return;

        }

        const fetchPDF = async () => {

            try {

                const API = import.meta.env.VITE_API_URL;

                const res = await axios.get(

                    `${API}/api/school-pdfs/get`,

                    {

                        params: {

                            pdf_id: state.pdf_id

                        }

                    }

                );

                if (res.data.success) {

                    setPdf(res.data.pdf);

                } else {

                    setError("PDF Not Found");

                }

            }

            catch (err) {

                console.log(err);

                setError(

                    err.response?.data?.message ||

                    "Unable to Load PDF"

                );

            }

            finally {

                setLoading(false);

            }

        };

        fetchPDF();

    }, [state]);

    if (loading) {

        return (

            <div className="min-h-screen bg-black flex justify-center items-center">

                <div className="text-center">

                    <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

                    <h2 className="text-white text-3xl mt-6">

                        Loading PDF...

                    </h2>

                </div>

            </div>

        );

    }

    if (error) {

        return (

            <div className="min-h-screen bg-black flex flex-col justify-center items-center">

                <h1 className="text-red-500 text-4xl font-bold">

                    {error}

                </h1>

                <button

                    onClick={() => navigate(-1)}

                    className="mt-8 bg-red-600 px-8 py-4 rounded-xl"

                >

                    Go Back

                </button>

            </div>

        );

    }

    const API = import.meta.env.VITE_API_URL;

    const pdfURL = `${API}/uploads/pdfs/${pdf.pdf_url}`;

    return (

<div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-red-950">

<div className="max-w-7xl mx-auto py-12 px-6">

<div className="bg-[#111] rounded-3xl border border-red-700 shadow-[0_0_35px_rgba(255,0,0,.3)] p-8">

<h1 className="text-5xl text-white font-extrabold">

{pdf.title}

</h1>

<p className="text-gray-400 mt-4">

{pdf.description}

</p>

<div className="grid md:grid-cols-3 gap-6 mt-8">

<div>

<h2 className="text-red-500 font-bold">

Class

</h2>

<p className="text-white">

{pdf.class_name}

</p>

</div>

<div>

<h2 className="text-red-500 font-bold">

Subject

</h2>

<p className="text-white">

{pdf.subject_name}

</p>

</div>

<div>

<h2 className="text-red-500 font-bold">

Uploaded By

</h2>

<p className="text-white">

{pdf.uploaded_by || "Anonymous"}

</p>

</div>

</div>

<div className="flex gap-6 mt-10">

<a

href={pdfURL}

target="_blank"

rel="noreferrer"

className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-white font-bold"

>

Preview PDF

</a>

<a

href={pdfURL}

download

className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl text-white font-bold"

>

Download PDF

</a>

</div>

<div className="mt-12">

<iframe

src={pdfURL}

title="PDF Viewer"

className="w-full h-[900px] rounded-xl border border-red-700"

></iframe>

</div>

</div>

</div>

</div>

    );

}

export default SchoolPDFDetails;