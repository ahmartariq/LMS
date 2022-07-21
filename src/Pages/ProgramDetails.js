import { useParams, useNavigate, useLocation } from "react-router-dom"
import { useState } from "react";
import { data } from '../Assets/Data/data'
import { courses } from '../Assets/Data/courses'
import { Navigation } from "./Navigation";



export const ProgramDetails = () => {
    const navigate = useNavigate();
    const location  = useLocation();

    const [search, setSearch] = useState("");
    const [filterCourses, setFilterCourses] = useState([]);

    const { id } = useParams()

    const found = data.find(person => {
        if (id == person.studentId)
            return person
    })

    const handleSearch = event => {
        setSearch(event.target.value)
    }
    const filter = () => {
        setFilterCourses(courses.filter(item => item.courseName.toLowerCase().includes(search.toLowerCase()) || item.status.toLowerCase().includes(search.toLowerCase()) || item.enrolldate.toLowerCase().includes(search.toLowerCase())))
    }

    const visit = (event) => {
        const course = event.target.parentNode.childNodes[0].innerHTML
        navigate(`/course-details/${course}`);
    }

    const getLocation = () => {
        return location.pathname
    }
    return (
        <>
        <Navigation location={getLocation()}/>
        <div className="min-h-full w-full flex items-center justify-center py-12">
            <div className="w-5/6 flex flex-col items-center justify-center">
                <div className="w-full mb-12 flex justify-center items-center flex-col">
                    <h1 className="font-bold text-4xl text-center pb-10 primary-color">Program Details</h1>
                    <p className="text-lg text-center"><span className="font-medium"> Student Name:</span> {found.studentName} |
                    <span className="font-medium"> Program Name:</span> {found.program} |
                    <span className="font-medium"> Program Code:</span> {found.programCode} |
                    <span className="font-medium"> Program Number:</span> {found.programNumber} |
                    <span className="font-medium"> Status:</span> {found.status}
                    </p>
                </div>
                <h1 className="font-bold text-3xl pb-10 text-left align-self-start primary-color">Course List</h1>
                <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="text" value={search} onChange={handleSearch} placeholder="Search Courses" onKeyUp={filter} />
                <table className="table-auto w-full text-sm text-left text-white mt-12 table-bordered" style={{ border: "1px #3596C1 solid" }}>
                    <thead className="text-xs primary-bg uppercase">
                        <tr>
                            <th scope="col" className="py-3 px-6">Course Name</th>
                            <th scope="col" className="py-3 px-6">Status</th>
                            <th scope="col" className="py-3 px-6">Enrollment Date</th>
                        </tr>
                    </thead>
                    <tbody className="text-black">
                        {
                            filterCourses.length === 0 && search.length === 0 ?
                                courses.map((course) => (
                                    <tr key={course.courseName} onClick={visit} className="tableData">
                                        <th scope="row" className="py-4 px-6">
                                            {course.courseName}
                                        </th>
                                        <td className="py-4 px-6">
                                            {course.status}
                                        </td>
                                        <td className="py-4 px-6">
                                            {course.enrolldate}
                                        </td>
                                    </tr>
                                ))
                                :
                                filterCourses.map((course) => (
                                    <tr key={course.courseName} onClick={visit} className="tableData">
                                        <th scope="row" className="py-4 px-6 ">
                                            {course.courseName}
                                        </th>
                                        <td className="py-4 px-6">
                                            {course.status}
                                        </td>
                                        <td className="py-4 px-6">
                                            {course.enrolldate}
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
}
