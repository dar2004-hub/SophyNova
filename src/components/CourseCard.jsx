
import { courses } from "../data/courses";



function CourseCard(){

return(

<section className="max-w-7xl mx-auto py-12">

            <h2 className="text-xl font-bold mb-10">

                🔥 Popular Courses

            </h2>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {courses.map((course)=>(

    <div

         key={course.id}

         className="bg-gray-900 rounded-3xl p-3 hover:scale-105 transition duration-300 hover:border-cyan-400 border border-gray-800">

                <h2 className="text-xl">

                  {course.icon}

                </h2>

                <h3 className="text-sm font-bold mt-5">

                  {course.title}

                </h3>

            <p className="text-xs-gray-400 mt-3">

              {course.description}

            </p>

                   <div className="grid grid-cols-2 gap-3 mt-8">

                    <button className="bg-cyan-500 rounded-xl py-2">
            
                     PDF
            
                    </button>
            
                     <button className="bg-purple-600 rounded-xs py-2">
                     
                     Videos
                     
                     </button>
            
                    <button className="bg-green-600 rounded-xs py-2">
                    
                    Lectures
                    
                    </button>
                    
                    <button className="bg-orange-500 rounded-xs py-2">
                    
                    Sources
                    
                    </button>
                    
                    <button className="bg-pink-500 rounded-xs py-2">
                    
                    Reviews
                    
                    </button>
            
                    <button className="bg-red-500 rounded-xs py-2">
            
                     Books
            
                    </button>

                     </div>

                 </div>

             ))}

        </div>


      

</section>

);

}

export default CourseCard;