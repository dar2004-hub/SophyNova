function StudyResources() {

    const resources = [

        {
            title: "📘 Notes",
            description: "Download Subject-wise Notes",
            button: "Explore"
        },

        {
            title: "📄 Previous Papers",
            description: "Download Previous Year Question Papers",
            button: "Explore"
        },

        {
            title: "🎥 Video Lectures",
            description: "Watch Free Video Lectures",
            button: "Explore"
        },

        {
            title: "📝 Mock Tests",
            description: "Practice with Free Mock Tests",
            button: "Explore"
        },

        {
            title: "📚 Books",
            description: "Recommended Books for Every Exam",
            button: "Explore"
        },

        {
            title: "📰 Current Affairs",
            description: "Daily, Weekly & Monthly Current Affairs",
            button: "Explore"
        }

    ];

    return (

        <section className="bg-gray-900 text-white py-20">

            <h2 className="text-3xl font-bold text-center mb-12">
                📚 Study Resources
            </h2>

            <p className="text-center text-gray-400 mb-12 text-lg">
                Everything you need to crack Government Exams in one place.
            </p>

            <div className="max-w mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">

                {resources.map((resource, index) => (

                    <div
                        key={index}
                        className="bg-gray-800 rounded-2xl p-3 sm:p-5 shadow-xl hover:scale-105 hover:bg-cyan-700 transition duration-300"
                    >

                        <h3 className="text-lg sm:text-xl font-bold mb-3">
                            {resource.title}
                        </h3>

                        <p className="text-gray-300 mb-3">
                            {resource.description}
                        </p>

                        <button
                            className="bg-cyan-500 px-3 py-1 rounded-lg hover:bg-cyan-600 transition"
                        >
                            {resource.button}
                        </button>

                    </div>

                ))}

            </div>

        </section>

    );
}

export default StudyResources;