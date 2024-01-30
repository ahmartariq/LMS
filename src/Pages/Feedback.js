import { useParams } from "react-router-dom"
import { modules } from "../Assets/Data/modules";
import { useState } from "react";


export const Feedback = () => {
    const { module } = useParams();
    const [stdFeedback, setStdFeedback] = useState('')
    const [tutorFeedback, setTutorFeedback] = useState('')


    const found = modules.find((mod) => {
        if (module === mod.name) return mod;
    });

    const handleStd = event => {
        setStdFeedback(event.target.value);
    };

    const handleTutor = event => {
        setTutorFeedback(event.target.value);
    };


    if (found.status.toLocaleLowerCase() !== "waiting" &&
        found.name.toLowerCase().includes("quiz")) {

        return (
            <div className="container flex flex-col justify-center items-center mt-8 pb-12">
                <div className="w-full  md:w-4/5 mt-12 rounded-md primary-bg px-6 py-9 text-white flex flex-row gap-3 items-center shadow-lg" >
                    <div className="circle-feedback">
                        <p className="font-bold text-lg text-center">Student Feedback</p>
                    </div>
                    <input
                        className="appearance-none rounded-none relative block w-3/4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm max-h-11"
                        type="text" value={stdFeedback} onChange={handleStd} placeholder="Student Feedback" readOnly/>
                </div>

                <div className="w-full  md:w-4/5 mt-12 rounded-md primary-bg px-6 py-9 text-white flex flex-row gap-3 items-center shadow-lg" >
                    <div className="circle-feedback">
                        <p className="font-bold text-lg text-center">Tutor Feedback</p>
                    </div>
                    <input
                        className="appearance-none rounded-none relative block w-3/4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm max-h-11"
                        type="text" value={tutorFeedback} onChange={handleTutor} placeholder="Tutor Feedback" readOnly/>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container flex flex-col justify-center items-center mt-8 pb-12">
                <div className="w-full md:w-1/2 mt-12 rounded-md primary-bg px-6 py-9 text-white flex flex-row gap-5 justify-center items-center shadow-lg" >
                    <h1 className="font-bold text-lg">You cannot give feedback right now!</h1>
                </div>
            </div>
        )
    }
}