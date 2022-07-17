import { useParams ,useNavigate } from "react-router-dom";
import {courses} from '../Assets/Data/courses'
import {modules} from '../Assets/Data/modules'

import { useState } from "react";


export const Modules = () => {
    const {course} = useParams();
    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [filterModules, setFilterModules] = useState([]);
 
    const found = courses.find(title => {
        if(course == title.courseName)
        return title
    })

     
    const handleSearch = event => {
        setSearch(event.target.value)
   }
    const filter = () => {
        setFilterModules(modules.filter(item =>  item.name.includes(search) || item.status.includes(search) || item.startdate.includes(search) || item.enddate.includes(search) )) 
    }    

    const visit = (event) => {
        const module = event.target.parentNode.childNodes[0].innerHTML
        navigate(`/module-details/${module}`);
    
    }

    return(
        <div className="min-h-full w-full flex items-center justify-center py-12">
        <div className="w-5/6 flex flex-col items-center justify-center">
            <h1 className="font-bold text-3xl text-center pb-10">Course List</h1>
            <div className="w-full mb-12">
            <h1>Course Details</h1>
            <p>Course Name {found.courseName}</p>
            <p>Course Status {found.status}</p>
            <p>Enrollment Date {found.enrolldate}</p>
            <p>completion/Cancellation Date {found.enddate}</p>
            </div>
            <input
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                type="text" value={search} onChange={handleSearch} placeholder="Search Courses" onKeyUp={filter}/>
            <table className="table-fixed w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-12">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">Module Name</th>
                        <th scope="col" className="py-3 px-6">Status</th>
                        <th scope="col" className="py-3 px-6">Start Date</th>
                        <th scope="col" className="py-3 px-6">End Date</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            filterModules.length === 0 && search.length === 0 ? 
                            modules.map((module) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={module.name} onClick={visit}>
                            <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {module.name}
                            </td>
                            <td className="py-4 px-6">
                                {module.status}
                            </td>
                            <td className="py-4 px-6">
                                {module.startdate}
                            </td>
                            <td className="py-4 px-6">
                                {module.enddate}
                            </td>
                        </tr>
                            ))
                            :
                            filterModules.map((module) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={module.name} onClick={visit}>
                            <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {module.name}
                            </td>
                            <td className="py-4 px-6">
                                {module.status}
                            </td>
                            <td className="py-4 px-6">
                                {module.startdate}
                            </td>
                            <td className="py-4 px-6">
                                {module.enddate}
                            </td>
                        </tr>
                            ))
                        }
                    </tbody>
            </table>
        </div>
    </div>
    )
};
