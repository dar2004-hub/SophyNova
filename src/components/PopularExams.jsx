const exams = [

"UPSC",
"SSC",
"Banking",
"Railway",
"Defence",
"CS / IT"

];

function PopularExams(){

return(

        <section className="bg-gray-950 py-12">

            <h2 className="text-4xl font-bold text-white text-center mb-10">

             🔥 Popular Exams

            </h2>

                <div className="flex flex-wrap justify-center gap-5">

                    {exams.map((exam,index)=>(

                    <button key={index} className="bg-gray-800 text-white px-8 py-4 rounded-full hover:bg-cyan-500 transition hover:scale-105">

                     {exam}

                    </button>

                )
            )
        }

                </div>

        </section>

);

}

export default PopularExams;