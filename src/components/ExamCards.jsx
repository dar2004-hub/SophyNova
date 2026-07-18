import { Link } from "react-router-dom";

function ExamCards() {

const exams = [

{
title:"UPSC",
description:"IAS, IPS, IFS, IRS",
route:"/upsc"
},

{
title:"SSC",
description:"CGL, CHSL, MTS, CPO",
route:"/ssc"
},

{
title:"Banking",
description:"SBI, IBPS, RBI",
route:"/banking"
},

{
title:"Railway",
description:"RRB NTPC, JE, ALP",
route:"/railway"
},

{
title:"Defence",
description:"NDA, CDS, AFCAT",
route:"/defence"
},

{
title:"CS / IT",
description:"GATE, NIC, NIELIT",
route:"/csit"
}

];

return(

<section className="bg-gray-950 text-white py-20">

<h2 className="text-5xl font-bold text-center mb-14">

Popular Exams

</h2>

<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">

{

exams.map((exam,index)=>(

<Link
key={index}
to={exam.route}
>

<div className="bg-gray-800 rounded-2xl p-8 hover:bg-cyan-700 hover:scale-105 transition duration-300 cursor-pointer">

<h3 className="text-3xl font-bold">

{exam.title}

</h3>

<p className="mt-3 text-gray-300">

{exam.description}

</p>

<button className="mt-6 bg-white text-black px-5 py-2 rounded-lg">

Explore

</button>

</div>

</Link>

))

}

</div>

</section>

);

}

export default ExamCards;