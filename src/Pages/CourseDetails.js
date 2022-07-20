import { useParams ,useNavigate, useLocation } from "react-router-dom";
import {courses} from '../Assets/Data/courses'
import {modules} from '../Assets/Data/modules'
import { Navigation } from "./Navigation";
import { useState } from "react";


export const CourseDetails = () => {
    const {course} = useParams();
    const navigate = useNavigate();
    const location = useLocation()

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
        navigate(`/module-details/${module}/questions`);
    
    }

    const getLocation = () => {
        return location.pathname
    }
    return(
        <>
        <Navigation location={getLocation()}/>
        <div className="min-h-full w-full flex items-center justify-center py-12">
        <div className="w-5/6 flex flex-col items-center justify-center">
            <div className="w-full mb-12 flex justify-center items-center flex-col">
            <h1 className="font-bold text-2xl text-center pb-10 primary-color">Course Details</h1>
            <p className="text-lg text-center"><span className="font-medium ">Course Name:</span> {found.courseName}
            <span className="font-medium "> Course Status:</span> {found.status}
            <span className="font-medium"> Enrollment Date:</span> {found.enrolldate}
            <span className="font-medium"> completion/Cancellation Date:</span> {found.enddate}
            <span className="font-medium"> Tutor Name:</span> {found.tutor}</p>
            </div>
            <h1 className="font-bold text-4xl text-center pb-10 primary-color">Module List</h1>
            <input
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                type="text" value={search} onChange={handleSearch} placeholder="Search Modules" onKeyUp={filter}/>
            <table className="table-fixed w-full text-sm text-left text-white mt-12 table-bordered" style={{ border: "1px #3596C1 solid" }}>
                <thead className="text-xs uppercase primary-bg">
                    <tr>
                        <th scope="col" className="py-3 px-6">Module Name</th>
                        <th scope="col" className="py-3 px-6">Status</th>
                        <th scope="col" className="py-3 px-6">Start Date</th>
                        <th scope="col" className="py-3 px-6">End Date</th>
                    </tr>
                </thead>
                <tbody className="text-black">
                        {
                            filterModules.length === 0 && search.length === 0 ? 
                            modules.map((module) => (
                                <tr key={module.name} onClick={visit} className="tableData">
                            <th scope="row" className="py-4 px-6">
                                {module.name}
                            </th>
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
                            <tr key={module.name} onClick={visit} className="tableData">
                            <th scope="row" className="py-4 px-6">
                                {module.name}
                            </th>
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
    </>
    )
};
