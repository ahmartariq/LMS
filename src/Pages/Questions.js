import { useParams, NavLink } from "react-router-dom";
import { modules } from "../Assets/Data/modules";
import { useState, useEffect } from "react";
import { questionsData } from "../Assets/Data/questionsData";
import { color } from "@mui/system";

export const Questions = () => {
  const { module } = useParams();

  const found = modules.find((mod) => {
    if (module === mod.name) return mod;
  });

  let total = [0, 0];

  const result = questionsData.map((question) => {
    total[0] += question.score;
    total[1] += question.totalScore;

    return total;
  });

  if (
    found.status.toLocaleLowerCase() !== "waiting" &&
    found.name.toLowerCase().includes("quiz")
  ) {
    return (
      <div className="container flex flex-col justify-center items-center mt-8 pb-12">
        <h2 className="font-bold text-2xl primary-color align-self-end mt-12">
          Total Score: {total[0]}/{total[1]}{" "}
        </h2>

        {/* <table className="table-auto w-full text-sm text-left text-white table-bordered" style={{ border: "1px #3596C1 solid" }}>
          <thead className="text-xs primary-bg uppercase">
            <tr>
              <th scope="col" className="py-3 px-6">Questions</th>
              <th scope="col" className="py-3 px-6">Answers</th>
              <th scope="col" className="py-3 px-6">Obtained Marks</th>
              <th scope="col" className="py-3 px-6">Total Marks</th>
            </tr>
          </thead>
          <tbody className="text-black"> */}
        {questionsData.map((question, count) => (
          <>
            <div
              className="-12 w-full md:w-4/5 flex flex-row"
              style={{ columnGap: "10px" }}
            >
              <span className="font-bold">{++count}.</span>
              <p>{question.question}</p>
            </div>
            <div className=" mb-12 w-full md:w-4/5  rounded-md primary-bg px-6 py-9 text-white flex flex-row gap-4 items-center shadow-lg">
              <div className="question">
                <textarea
                  name="answer"
                  id="answer"
                  className="w-full color-black  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  rows="3"
                  style={{ resize: "none" }}
                  readOnly
                >
                  {question.answer}
                </textarea>
              </div>
              <div className="circle">
                <p className="font-bold text-xl">{question.score}/{question.totalScore}</p>
              </div>
            </div>
          </>
        ))}
        {/* </tbody>
        </table> */}
      </div>
    );
  } else {
    return (
      <div className="container flex flex-col justify-center items-center mt-8 pb-12">
        <div className="w-full md:w-1/2 mt-12 rounded-md primary-bg px-6 py-9 text-white flex flex-row gap-5 justify-center items-center shadow-lg">
          <h1 className="font-bold text-lg">No quiz or Questions for now!</h1>
        </div>
      </div>
    );
  }
};
