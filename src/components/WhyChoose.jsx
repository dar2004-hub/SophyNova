function WhyChoose() {

    const features = [

        {
            icon: "🤖",
            title: "AI Powered Learning",
            description: "Get personalized study plans and smart recommendations."
        },

        {
            icon: "📚",
            title: "Free Study Material",
            description: "Access notes, books, and resources completely free."
        },

        {
            icon: "📝",
            title: "Mock Tests",
            description: "Practice with exam-level mock tests and quizzes."
        },

        {
            icon: "📄",
            title: "Previous Year Papers",
            description: "Download solved and unsolved previous year papers."
        },

        {
            icon: "🔔",
            title: "Smart Notifications",
            description: "Receive instant updates about new vacancies and exams."
        },

        {
            icon: "📊",
            title: "Performance Analytics",
            description: "Track your learning progress with AI insights."
        }

    ];

    return (

        <section className="bg-gray-950 text-white py-20">

            <h2 className="text-5xl font-bold text-center mb-4">
                Why Choose <span className="text-cyan-400">SophyNova?</span>
            </h2>

            <p className="text-center text-gray-400 mb-16 text-lg">
                One platform for every Government Exam aspirant.
            </p>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">

                {features.map((feature, index) => (

                    <div
                        key={index}
                        className="bg-gray-800 rounded-3xl p-8 hover:bg-cyan-600 hover:scale-105 transition duration-300 shadow-2xl cursor-pointer"
                    >

                        <div className="text-6xl mb-6">
                            {feature.icon}
                        </div>

                        <h3 className="text-3xl font-bold mb-4">
                            {feature.title}
                        </h3>

                        <p className="text-gray-300">
                            {feature.description}
                        </p>

                    </div>

                ))}

            </div>

        </section>

    );
}

export default WhyChoose;