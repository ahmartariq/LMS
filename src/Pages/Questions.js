import { useParams } from "react-router-dom";
import { modules } from "../Assets/Data/modules";
import { useState , useEffect } from "react";
import { questionsData } from "../Assets/Data/questionsData";


export const Questions = () => {

  const { module } = useParams();

  const found = modules.find((mod) => {
    if (module === mod.name) return mod;
  });
  
  let total = [0,0]

  const result = questionsData.map(question => {
    total[0] += question.score
    total[1] += question.totalScore
    
    return total
  })  

  if (
    found.status.toLocaleLowerCase() !== "waiting" &&
    found.name.toLowerCase().includes("quiz")
  ) {
    return (
      <div className="container flex flex-col justify-center items-center mt-8 pb-12">
        <h1 className="font-bold text-4xl primary-color">Questions Tab</h1>
        <h2 className="font-bold text-2xl primary-color align-self-end mt-12">Total Score: {total[0]}/{total[1]} </h2>
        <table className="table-auto w-full text-sm text-left text-white table-bordered" style={{ border: "1px #3596C1 solid" }}>
                    <thead className="text-xs primary-bg uppercase">
                        <tr>
                            <th scope="col" className="py-3 px-6">Questions</th>
                            <th scope="col" className="py-3 px-6">Answers</th>
                            <th scope="col" className="py-3 px-6">Obtained Marks</th>
                            <th scope="col" className="py-3 px-6">Total Marks</th>
                        </tr>
                    </thead>
                    <tbody className="text-black">
                        {
                                questionsData.map((question) => (
                                    <tr key={question.question}>
                                        <th scope="row" className="py-4 px-6">
                                            {question.question}
                                        </th>
                                        <td scope="row" className="py-4 px-6">
                                            {question.answer}
                                        </td>
                                        <td className="py-4 px-6">
                                            {question.score}
                                        </td>
                                        <td className="py-4 px-6">
                                            {question.totalScore}
                                        </td>
                                    </tr>
                                ))
                        }
                    </tbody>
                </table>
      </div>
    );
  }
  else{
    return(
        <div className="container flex flex-col justify-center items-center mt-8 pb-12">
        <h1 className="font-bold text-4xl primary-color">Questions Tab</h1>

       
        <div className="w-full md:w-1/2 mt-12 rounded-md primary-bg px-6 py-9 text-white flex flex-row gap-5 justify-center items-center shadow-lg">
          <h1 className="font-bold text-lg">No quiz or Questions for now!</h1>
        </div>
      </div>
    )
  }
};