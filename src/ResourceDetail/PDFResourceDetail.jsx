import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function PDFResourceDetails() {

    const location = useLocation();
    const navigate = useNavigate();

    const state = location.state;

    const [pdf, setPDF] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        if (!state) {

            setError("No Resource Selected.");
            setLoading(false);
            return;

        }

        const fetchPDF = async () => {

            try {

                const API = import.meta.env.VITE_API_URL;

                const res = await axios.get(

                    `${API}/api/pdfs/get`,

                    {
                        params: {
                            exam_id: state.exam_id,
                            subject_id: state.subject_id,
                            resource_type_id: state.resource_type_id
                        }
                    }

                );

                if (res.data.success && res.data.pdf) {

                    console.log("PDF Received :", res.data.pdf);

                    setPDF(res.data.pdf);

                } else {

                    setError("PDF Not Found.");

                }

            }

            catch (err) {

                console.log(err);

                setError(

                    err.response?.data?.message ||

                    "Unable to Load PDF."

                );

            }

            finally {

                setLoading(false);

            }

        };

        fetchPDF();

    }, [state]);

    // ----------------------------
    // Loading Screen
    // ----------------------------

    if (loading) {

        return (

            <div className="min-h-screen bg-black flex flex-col justify-center items-center">

                <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>

                <h2 className="mt-6 text-red-500 text-3xl font-bold">

                    Loading PDF...

                </h2>

            </div>

        );

    }

    {/*------------------------------------------------------ Error Screen ----------------------------------------------------------------*/}


    if (error) {

        return (

            <div className="min-h-screen bg-black flex flex-col justify-center items-center">

                <h1 className="text-4xl text-red-600 font-bold">

                    {error}

                </h1>

                <button

                    onClick={() => navigate(-1)}

                    className="mt-8 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl text-xl font-bold"

                >

                    ← Go Back

                </button>

            </div>

        );

    }

   {/*----------------------------------------------------------------------Safety Check-------------------------------------------------------*/}

   
    if (!pdf) {

        return (

            <div className="min-h-screen bg-black flex justify-center items-center">

                <h1 className="text-red-500 text-4xl">

                    PDF Not Available

                </h1>

            </div>

        );

    }

{/*  -----------------------------------------------------------------PDF URL --------------------------------------------------------------------*/}


    const API = import.meta.env.VITE_API_URL;
    const pdfURL = pdf.pdf_file;
    window.open(pdfURL, "_blank");

    return (

        <div className="min-h-screen bg-gradient-to-br from-black via-[#111111] to-red-950 py-10 px-6">

            <div className="max-w-7xl mx-auto">

                <div className="bg-[#181818] border border-red-600 rounded-3xl shadow-[0_0_30px_rgba(255,0,0,.4)] overflow-hidden">

                    {/* Header */}

                    <div className="p-8 border-b border-red-700">

                        <h1 className="text-5xl font-bold text-red-500">

                            {pdf.pdf_title}

                        </h1>

                        <p className="mt-4 text-gray-400">

                            Uploaded :

                            <span className="text-white ml-2">

                                {new Date(pdf.uploaded_at).toLocaleString()}

                            </span>

                        </p>

                        <p  className="mt-4 text-gray-400">
                            Uploaded By:
                            <span className="text-white ml-2">
                                {""}{pdf.uploaded_by}
                            </span>
                        </p>



                        

                    </div>



{/*---------------------------------------------------------------- Buttons------------------------------------------------------------ */}




                    <div className="flex flex-wrap gap-5 p-8">

                        <button

                            onClick={() => window.open(pdfURL, "_blank")}

                            className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl text-xl font-bold transition"

                        >

                            👁 Preview PDF

                        </button>

                        <a

                            href={pdfURL}

                            download

                            className="border-2 border-red-600 hover:bg-red-600 px-8 py-4 rounded-xl text-xl font-bold transition"

                        >

                            ⬇ Download PDF

                        </a>

                        <button

                            onClick={() => navigate(-1)}

                            className="border border-gray-600 hover:bg-gray-800 px-8 py-4 rounded-xl text-xl font-bold transition"

                        >

                            ← Back

                        </button>

                    </div>

                    {/* PDF Viewer */}

                    <div className="border-t border-red-700">

                        <iframe

                            src={pdfURL}

                            title="PDF Preview"

                            width="100%"

                            height="900px"

                            className="bg-white"

                        />

                    </div>

                </div>

            </div>

        </div>

    );

}

export default PDFResourceDetails;