import { useParams } from "react-router-dom"
import { modules } from "../Assets/Data/modules";
import { useState } from "react";


export const Feedback = () => {
    const { module } = useParams();
    const [selected, setSelected] = useState('Tutor')
    const [answer, setAnswer] = useState('')


    const found = modules.find((mod) => {
        if (module === mod.name) return mod;
    });

    const handleAnswer = event => {
        setAnswer(event.target.value);
    };


    const handleChange = event => {
        setSelected(event.target.value)
    }

    if (found.status.toLocaleLowerCase() !== "waiting" &&
        found.name.toLowerCase().includes("quiz")) {

        return (
            <div className="container flex flex-col justify-center items-center mt-8">
                <h1 className="font-bold text-4xl primary-color">Feedback Tab</h1>
                <select className="text-base appearance-none rounded-none relative block w-6/12 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-9"
                    name="user" id="user" onChange={handleChange}>
                    <option value="Tutor">Tutor</option>
                    <option value="Student">Student</option>
                </select>
                <div className="w-full md:w-1/2 mt-12 rounded-md primary-bg px-6 py-9 text-white flex flex-row gap-5 items-center shadow-lg" >
                    <div className="w-2/12 bg-white primary-color circle flex justify-center items-center">
                        <p className="font-bold text-lg text-center">{selected} Feedback</p>
                    </div>
                    <input
                        className="appearance-none rounded-none relative block w-3/4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm max-h-11"
                        type="text" value={answer} onChange={handleAnswer} placeholder="Feedback" />
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container flex flex-col justify-center items-center mt-8">
                <h1 className="font-bold text-4xl primary-color">Feedback Tab</h1>
                <div className="w-full md:w-1/2 mt-12 rounded-md primary-bg px-6 py-9 text-white flex flex-row gap-5 justify-center items-center shadow-lg" >
                    <h1 className="font-bold text-lg">You cannot give feedback right now!</h1>
                </div>
            </div>
        )
    }
}