function LatestNotifications() {

    const notifications = [

        {
            title: "UPSC CSE 2027 Notification Released",
            date: "15 July 2026"
        },

        {
            title: "SSC CGL 2026 Apply Online",
            date: "10 July 2026"
        },

        {
            title: "NIC Scientist-B Recruitment",
            date: "08 July 2026"
        },

        {
            title: "RRB JE Recruitment",
            date: "05 July 2026"
        }

    ];

    return (

        <section className="bg-gray-950 text-white py-20">

            <h2 className="text-5xl font-bold text-center mb-12">
                Latest Notifications
            </h2>

            <div className="max-w-5xl mx-auto">

                {notifications.map((item, index) => (

                    <div
                        key={index}
                        className="bg-gray-800 rounded-xl p-6 mb-5 hover:bg-gray-700 transition duration-300 shadow-lg"
                    >

                        <div className="flex justify-between items-center">

                            <div>

                                <h3 className="text-2xl font-semibold">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 mt-2">
                                    {item.date}
                                </p>

                            </div>

                            <button className="bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600">
                                Read More
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );
}

export default LatestNotifications;