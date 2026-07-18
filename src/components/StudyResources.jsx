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

            <h2 className="text-5xl font-bold text-center mb-14">
                📚 Study Resources
            </h2>

            <p className="text-center text-gray-400 mb-12 text-lg">
                Everything you need to crack Government Exams in one place.
            </p>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">

                {resources.map((resource, index) => (

                    <div
                        key={index}
                        className="bg-gray-800 rounded-2xl p-8 shadow-xl hover:scale-105 hover:bg-cyan-700 transition duration-300"
                    >

                        <h3 className="text-3xl font-bold mb-4">
                            {resource.title}
                        </h3>

                        <p className="text-gray-300 mb-6">
                            {resource.description}
                        </p>

                        <button
                            className="bg-cyan-500 px-5 py-3 rounded-lg hover:bg-cyan-600 transition"
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