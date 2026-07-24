import { useState, useEffect } from "react";
import axios from "axios";

const Thought = () => {

    const [dailyThought, setDailyThought] = useState(null);

    useEffect(() => {

        const fetchDailyThought = async () => {

            try {

                const API = import.meta.env.VITE_API_URL;

                const res = await axios.get(
                    `${API}/api/dailythought`
                );

                console.log(res.data);

                setDailyThought(res.data.thought);

            } catch (err) {

                console.log(err);

            }

        };

        fetchDailyThought();

    }, []);

    return (

        <div className="max-w-4xl mx-auto mt-16">

            <div className="bg-[#181818] border border-red-600 rounded-3xl p-8 shadow-[0_0_25px_rgba(255,0,0,.35)]">

                <h2 className="text-red-500 text-2xl font-bold mb-4">
                    🌟 Thought of the Day
                </h2>

                <p className="text-white text-xl italic leading-8">
                    "{dailyThought?.thought}"
                </p>

                <p className="text-gray-400 text-right mt-5 font-semibold">
                    — {dailyThought?.author}
                </p>

            </div>

        </div>

    );

};

export default Thought;
